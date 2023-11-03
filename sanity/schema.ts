import { type SchemaTypeDefinition } from 'sanity'

import pageInfo from './schemas/pageInfo'
import social from './schemas/social'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, social],
}
