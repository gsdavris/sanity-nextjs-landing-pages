export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata'
    }
  ],
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
      name: 'postCategory',
      type: 'reference',
      to: [
        {
          type: 'postCategory'
        }
      ],
      title: 'Category',
      description: 'Required'
    },
    {
      name: 'date',
      type: 'datetime',
      title: 'Date'
    },
    {
      name: 'body',
      type: 'richText',
      title: 'Post Body'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata'
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'author.name',
      media: 'openGraphImage'
    },
  },
}
