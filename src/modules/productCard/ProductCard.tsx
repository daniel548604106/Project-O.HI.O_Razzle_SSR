import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import classes from './productCard.module.scss';

interface ProductCardProps {
  product: any;
  customStyle?: {
    width?: string;
    height?: string;
    marginRight?: string;
  };
}

const ProductCard = ({ product, customStyle }: ProductCardProps) => {
  const { width, height, marginRight } = customStyle;
  const directToProduct = () => {
    console.log("hihi");
  };
  const addItemToFavorite = (e, id) => {
    console.log("hihi");
  };
  const isFavorite = true;

  return (
    <div
      style={{ width: width, height: height, marginRight }}
      className={classes["product-root"]}
      onClick={() => directToProduct()}
    >
      <div className={classes["product-root_label"]}>
        <p className={classes["product-root_label_new"]}>新品</p>
        {product.discountPrice && (
          <p className={classes["product-root_label_discount"]}>{"qss"}</p>
        )}
      </div>
      <div className={classes["product-root-main"]}>
        <div className={classes["product-root-main_image"]}>
          <img
            className={classes["product-root-main_image_target"]}
            src={product.images[0]}
            alt={product.name}
          />
          <div
            onClick={(e) => addItemToFavorite(e, product._id)}
            className={`${classes.heartIcon} ${
              isFavorite && classes.activeHeartIcon
            }`}
          >
            add
          </div>
        </div>
        <div className={classes.cardContent}>
          <h2 className={classes.productName}>{product.name}</h2>
          <div>
            <h2 className={classes.brandName}>{product.publishedBy.name}</h2>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <span className={classes.discountPrice}>NTD</span>
              {product.discountPrice && (
                <p className={classes.discountPrice}>
                  ${product.discountPrice}
                </p>
              )}
              <p
                className={`
                    ${classes.originalPrice} 
                    ${!product.discountPrice && classes.noDiscountPrice}
                  `}
                style={{
                  textDecoration: product.discountPrice
                    ? "line-through"
                    : " none",
                }}
              >
                ${product.fullPrice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };

export default ProductCard;
