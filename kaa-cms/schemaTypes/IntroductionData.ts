// mySingleton.js
import { defineField, defineType } from 'sanity';

export const introduction = defineType({
  name: 'introduction',
  title: "Contenue d'introduction",
  type: 'document',
  options: {
    singleton: true, // Identify this document as a singleton
  },
  fields: [
    defineField({
      name: 'paragraph1',
      title: 'Paragraph 1',
      type: 'text',
    }),
    defineField({
      name: 'paragraph2',
      title: 'Paragraph 2',
      type: 'text',
    }),
    defineField({
      name: 'paragraph3',
      title: 'Paragraph 3',
      type: 'text',
    }),
    defineField({
      name: 'image1',
      title: 'Image 1',
      type: 'image',
      options: {
        hotspot: true, // Enable hotspot for better image cropping
      },
    }),
    defineField({
      name: 'image2',
      title: 'Image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'image3',
      title: 'Image 3',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
