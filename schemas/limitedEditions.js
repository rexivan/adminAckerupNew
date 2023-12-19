// limitedEditions.js
export default {
  name: 'limitedEditions',
  title: 'Limited Editions',
  type: 'document',
  fields: [
    {
      name: 'works',
      title: 'Limited Edition Works',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'singleLimitedEdition' }] }],
      options: {
        sortable: true,
      },
    },
    // ...other fields like 'image' if needed
  ],
  preview: {
    select: {
      title: 'works.0.title',
      media: 'works.0.image',
      // No need to select description here since it's not a field in this document
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title || 'Limited Editions',
        media: media,
        // The description from the first work will not show up here, 
        // as it's not part of this document's direct fields
      };
    },
  },
};
