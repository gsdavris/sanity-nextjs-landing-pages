// export const generateSlug = input => {
//   input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
// }

export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    },
    {
      name: 'author',
      type: 'reference',
      to: [
        {
          type: 'author'
        }
      ]
    },
    {
      name: 'body',
      type: 'richText',
      title: 'Post Body'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'author.name'
    },
  },
}
