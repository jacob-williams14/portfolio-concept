import { type SchemaTypeDefinition } from 'sanity'

import pageInfo from './pageInfo'
import social from './social'

export const schemas: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, social],
}
