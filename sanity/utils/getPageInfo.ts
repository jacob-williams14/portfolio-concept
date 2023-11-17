import { client } from '../lib/client'

export const getPageInfo = async () => {
  const pageInfo = await client.fetch(`*[_type == "pageInfo"][0]`)
  return pageInfo
}
