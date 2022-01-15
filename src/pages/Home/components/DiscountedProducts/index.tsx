import React from 'react';

import ProductCard from '@/modules/productCard/ProductCard';

import classes from './discountedProducts.module.scss';

interface DiscountedProductsProps {
  products: any;
  title: string;
}

const DiscountedProducts = (props: DiscountedProductsProps) => {
  const { products, title } = props;
  return (
    <section>
      <h2>{title}</h2>
      <div className={classes.productRow}>
        {products.map((product) => (
          <ProductCard
            customStyle={{
              width: "300px",
              height: "300px",
              marginRight: "20px",
            }}
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default DiscountedProducts;
