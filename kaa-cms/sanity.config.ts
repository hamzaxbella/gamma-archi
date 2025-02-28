import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'kaa-cms',
  
  projectId: 'rof9fknf',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],
  
  schema: {
    types: schemaTypes,
  },
})
