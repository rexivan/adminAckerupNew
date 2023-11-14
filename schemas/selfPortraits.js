// selfPortraits.js
export default {
    name: 'selfPortraits',
    title: 'Self Portraits',
    type: 'document',
    fields: [
      {
        name: 'works', // Array of references to 'singleSelfPortrait' documents
        title: 'selfPortraits Entries', // Title for this field in the studio
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'singleSelfPortrait' }] }],
        options: {
          sortable: true, // Allows for reordering in the studio
        },
      },
      // Add other fields here if needed
    ],
    // Remove the preview block entirely
    // Add other settings here if needed
  };
  