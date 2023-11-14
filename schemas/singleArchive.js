// singleArchive.js
export default {
    name: 'singleArchive',
    title: 'Single Archive Entry',
    type: 'document',
    hidden: true, // This hides the schema from the studio as it's only referenced
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Enables the hotspot option for images
        },
        // Define any additional image fields like captions or alt text here
        validation: (Rule) => Rule.required(),
      },
      // Define any other fields you want for an archive entry here
    ],
    // Add any additional settings or preview configurations here
  };
  