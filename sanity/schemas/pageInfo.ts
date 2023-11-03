import { defineField, defineType } from 'sanity'


export default defineType({
  name: 'pageInfo',
  type: 'document',
  title: 'Page Info',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Name' }),
    defineField({ name: 'role', type: 'string', title: 'Role' }),
    defineField({
      name: 'heroImage',
      type: 'image',
      title: 'Image',
    }),
    defineField({
      name: 'profilePic',
      type: 'image',
      title: 'Profile Pic',
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
