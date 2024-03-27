// publications.js
export default {
  name: 'publications',
  title: 'Publications',
  type: 'document',
  fields: [
    {
      name: 'works',
      title: 'Publications Works',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'singlePublication'}]}],
      options: {
        sortable: true,
      },
    },
    // ...other fields like 'image' if needed
  ],
  preview: {
    select: {
      title: 'works.0.title',
      media: 'works.0.images.0', // Change this to select the first image from the 'images' array
      // No need to select description here since it's not a field in this document
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title || 'Publications',
        media: media,
        // The description from the first work will not show up here,
        // as it's not part of this document's direct fields
      }
    },
  },
}
