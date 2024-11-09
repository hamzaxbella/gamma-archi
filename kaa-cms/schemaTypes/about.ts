import {defineType, defineField} from 'sanity'

export const about = defineType({
  name: 'about',
  type: 'document',
  title: 'about',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
    }),

    defineField({
      name: 'paragraph1',
      title: 'Paragraph 1',
      type: 'text',
    }),

    defineField({
      name: 'image1',
      title: 'Image 1',
      type: 'image',
      options : {
        hotspot : true
      }
    }),

    defineField({
      name: 'paragraph2',
      title: 'Paragraph 2',
      type: 'text',
    }),

    defineField({
      name: 'image2',
      title: 'Image 2',
      type: 'image',
      options : {
        hotspot : true
      }
    }),

    defineField({
      name: 'paragraph3',
      title: 'Paragraph 3',
      type: 'text',
    }),
  ],
})
