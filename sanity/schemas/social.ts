import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'social',
  type: 'document',
  title: 'Social',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Social Media Platform',
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'Url',
    }),
    defineField({
      name: 'color',
      type: 'string',
      title: 'Color',
    }),
  ],
})
