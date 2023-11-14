// selectedWorks.js
export default {
    name: 'selectedWorks', // This represents the collection of works for the "Selected Works" page
    title: 'Selected Works', // The title for the album shown in Sanity Studio
    type: 'document', // Type 'document' means it's a single document entry in Sanity
    fields: [
      {
        name: 'works', // This field will contain an array of references to 'singleSelectedWork' documents
        title: 'Works', // Title for this field in the studio, shown above the array of works
        type: 'array', // 'array' type allows for a list of items
        of: [{ type: 'reference', to: [{ type: 'singleSelectedWork' }] }], // Defines the contents of the array as references to 'singleSelectedWork' type
        options: {
          sortable: true, // Allows the user to reorder items within the array via drag-and-drop in the studio
        },
      },
      // ... any other fields you want to include for the album
    ],
    preview: {
      select: {
        title: 'works.0.title', // Select the title from the first work in the array for preview
        media: 'works.0.image', // Select the image from the first work in the array for preview
      },
      prepare(selection) {
        const { title, media } = selection;
        // Returns the selected title and media for preview; if there's no work, it falls back to hardcoded strings
        return {
          title: 'Selected Works Photos', // Fallback title if no works are added yet
          media, // The media to display in the preview
        };
      },
    },
    // ... any other settings or configurations for 'selectedWorks' document type
  };
  