// singlePublication.js
export default {
  name: 'singlePublication',
  title: 'Single Publication Entry',
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
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    // Additional fields specific to publications (like edition number, availability, etc.)
  ],
  // Additional settings or preview configurations
}
