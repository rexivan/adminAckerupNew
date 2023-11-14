export default {
    name: 'limitedEditions',
    title: 'Limited Editions',
    type: 'document',
    fields: [
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }],
      },
    ],
  };
  