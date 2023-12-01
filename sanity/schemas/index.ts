import { type SchemaTypeDefinition } from 'sanity'

import pageInfo from './pageInfo'
import social from './social'
import playlist from './playlist'

export const schemas: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, social, playlist],
}
