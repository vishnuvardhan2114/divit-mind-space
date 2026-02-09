import { defineField, defineType } from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility',
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Events', value: 'events'},
          {title: 'Activities', value: 'activities'},
        ],
      },
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'uploadedAt',
      type: 'datetime',
      title: 'Uploaded Date',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      media: 'image',
      categories: 'categories',
    },
    prepare({ media, categories }) {
      return {
        title: categories?.join(', ') || 'Uncategorized',
        media,
      }
    },
  },
})
