// singleSelectedWork.js

export default {
    name: 'singleSelectedWork',
    title: 'Single Selected Work',
    type: 'document',
    hidden: 'true',
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
          hotspot: true, // Hotspot for setting focus point in images
        },
        fields: [
          // Additional fields for the image, such as alt text or captions, could be defined here
        ],
        validation: (Rule) => Rule.required(),
      },
      // Other fields specific to a selected work, such as artist name, creation date, etc.
    ],
    // Additional settings or preview configurations for the selected work
  };
  