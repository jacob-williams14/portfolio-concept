import { type SchemaTypeDefinition } from 'sanity'

import homeData from './homeData'
import social from './social'
import playlist from './playlist'

export const schemas: { types: SchemaTypeDefinition[] } = {
  types: [homeData, social, playlist],
}
