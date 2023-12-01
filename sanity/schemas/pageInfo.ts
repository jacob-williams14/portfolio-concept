import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pageInfo',
  type: 'document',
  title: 'Page Info',
  fields: [
    defineField({ name: 'cornerText', type: 'string', title: 'Corner Text' }),
    defineField({ name: 'name', type: 'string', title: 'Name' }),
    defineField({
      name: 'centerImage',
      type: 'image',
      title: 'Centered Image',
    }),
    defineField({
      name: 'aboutPic',
      type: 'image',
      title: 'About Me Pic',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'backgroundInfo',
      type: 'text',
      title: 'BackgroundInfo',
    }),
    defineField({
      name: 'socials',
      type: 'array',
      title: 'Socials',
      of: [{ type: 'reference', to: [{ type: 'social' }] }],
    }),
    defineField({
      name: 'typewriterText',
      type: 'array',
      title: 'Typewriter Text',
      of: [{ type: 'string' }],
    }),
  ],
})
