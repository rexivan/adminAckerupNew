// archive.js
export default {
    name: 'archive',
    title: 'Archive',
    type: 'document',
    fields: [
      {
        name: 'works', // Array of references to 'singleArchive' documents
        title: 'Archive Entries', // Title for this field in the studio
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'singleArchive' }] }],
        options: {
          sortable: true, // Allows for reordering in the studio
        },
      },
      // Add other fields here if needed
    ],
    preview: {
      select: {
        title: 'works.0.title', // Gets title from first archive entry
        media: 'works.0.image', // Gets image from first archive entry
      },
      prepare(selection) {
        const { title, media } = selection;
        return {
          title: 'Archive Photos',
          media,
        };
      },
    },
    // Add other settings here
  };
  