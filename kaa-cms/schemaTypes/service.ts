import {defineType, defineField} from 'sanity'

export const service = defineType({
  name: 'service',
  type: 'document',
  title: 'Services',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
    }),
    defineField({
        name : 'description',
        title : 'description',
        type : 'text',
    })
  ],
})
