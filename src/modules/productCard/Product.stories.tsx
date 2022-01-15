import React, { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { PRODUCT_DETAIL } from '../mockData/index.ts';
import { ProductCard } from './ProductCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Modules/Product Card",
  component: ProductCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProductCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProductCard> = (args) => {
  const { product, customStyle } = args;
  const [isFavorite, setFavorite] = useState(false);

  const handleAddToFavorite = () => {
    setFavorite(!isFavorite);
  };

  return (
    <ProductCard
      customStyle={customStyle}
      isFavorite={isFavorite}
      handleAddToFavorite={handleAddToFavorite}
      product={product}
      {...args}
    />
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  product: PRODUCT_DETAIL,
  customStyle: { width: "300px", height: "300px" },
};
