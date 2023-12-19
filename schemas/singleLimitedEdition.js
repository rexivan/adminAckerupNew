// singleLimitedEdition.js
export default {
  name: 'singleLimitedEdition',
  title: 'Single Limited Edition Entry',
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
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text' // Changed from 'array' to 'text'
    }
    ,
    // Additional fields specific to limited editions (like edition number, availability, etc.)
  ],
  // Additional settings or preview configurations
};