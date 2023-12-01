import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'playlist',
  type: 'document',
  title: 'Playlist',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Display Name for Playlist',
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'Url',
    }),
  ],
})
