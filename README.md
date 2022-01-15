Project Link: https://ssr-with-razzle-danielyeh548604106-gmailcom.vercel.app/

Project Startup : Razzle
link： https://razzlejs.org/getting-started

razzl examples link : https://github.com/jaredpalmer/razzle/tree/master/examples

- command:
  npx create-razzle-app my-app

- Project Setting

  - Absolute Paths

  ```js

  {
  "compilerOptions": {
   "baseUrl": "src",
   "paths": {
     "@/pages/*": ["pages/*"],
     "@/components/*": ["components/*"]
   }
  }
  }


  ```

  - scss

  ```js

   npm i razzle-plugin-scss

  ```

  ```js
  plugins: [
    {
      name: "scss",
      options: {
        postcss: {
          dev: {
            sourceMap: false,
          },
        },
      },
    },
  ],

  ```

  - TypeScript

    ```js

    npm i razzle-plugin-typescript

    ```

Deployment : Vercel
link: https://razzlejs.org/deployment-options/vercel
利用 vercel 部署，可在官網找到 vercel.json 設定檔，在 root folder 建立 並透過 vercel cli 下 'vercel' command ，即可順利部署成功
