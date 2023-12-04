import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homeData',
  type: 'document',
  title: 'Home Data',
  fields: [
    defineField({ name: 'cornerText', type: 'string', title: 'Corner Text' }),
    defineField({ name: 'name', type: 'string', title: 'Name' }),
    defineField({
      name: 'centerImage',
      type: 'image',
      title: 'Centered Image',
      options: {
        hotspot: true,
      },
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
