import App from "./App";
import React from "react";
import { StaticRouter } from "react-router-dom";
import express from "express";
import { renderToString } from "react-dom/server";
import createStore from "./redux/store.js";
import Routes from "./routes/index.ts";
import { matchRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import { Provider } from "react-redux";
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
console.log(assets);
const cssLinksFromAssets = (assets, entrypoint) => {
  return assets[entrypoint]
    ? assets[entrypoint].css
      ? assets[entrypoint].css
          .map((asset) => `<link rel="stylesheet" href="${asset}">`)
          .join("")
      : ""
    : "";
};

const jsScriptTagsFromAssets = (assets, entrypoint, ...extra) => {
  return assets[entrypoint]
    ? assets[entrypoint].js
      ? assets[entrypoint].js
          .map((asset) => `<script src="${asset}" ${extra.join(" ")}></script>`)
          .join("")
      : ""
    : "";
};

export const renderApp = (req, res) => {
  const store = createStore();

  //matchRoutes will return an array of components that matches the req.path to determine which component is going to be rendered

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    console.log(route.loadData, "data");
    return route.loadData ? route.loadData(store) : null;
  });

  return Promise.all(promises)
    .then((response) => {
      const context = {};
      const markup = renderToString(
        <Provider store={store}>
          <StaticRouter context={context} location={req.url}>
            <App />
          </StaticRouter>
        </Provider>
      );
      const html = `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="preload" as="image" href="https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"/>

        ${cssLinksFromAssets(assets, "client")}
    </head>
    <body>
        <div id="root">${markup}</div>
        <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
        ${jsScriptTagsFromAssets(assets, "client", "defer", "crossorigin")}
    </body>
  </html>`;
      console.log(html, context);

      return { context, html };
    })
    .catch((error) => console.log(error));
};

const server = express();

server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/*", async (req, res) => {
    const { context, html } = await renderApp(req, res);

    console.log(context, html);
    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(html);
    }
  });

export default server;
