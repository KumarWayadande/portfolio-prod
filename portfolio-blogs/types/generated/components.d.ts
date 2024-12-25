import type { Schema, Struct } from '@strapi/strapi';

export interface ImageImages extends Struct.ComponentSchema {
  collectionName: 'components_image_images';
  info: {
    displayName: 'Images';
    icon: 'picture';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'image.images': ImageImages;
    }
  }
}
