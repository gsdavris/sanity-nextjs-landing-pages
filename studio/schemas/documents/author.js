import { MdPerson } from 'react-icons/md';

export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  icon: MdPerson,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'bio',
      type: 'richText',
      title: 'Biography'
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
