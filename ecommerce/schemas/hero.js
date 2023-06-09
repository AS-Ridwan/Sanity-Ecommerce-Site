export default {
  name: 'hero',
  title: 'hero',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'buttonText',
      title: 'ButtonText',
      type: 'string',
    },
    {
      name: 'product',
      title: 'Product',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'string',
    },

    {
      name: 'midText',
      title: 'MidText',
      type: 'string',
    },
    {
      name: 'largeText',
      title: 'LargeText',
      type: 'string',
    },

    {
      name: 'discount',
      title: 'Discount',
      type: 'string',
    },
  ],
}
