import { client } from '../lib/client'

export const getSocials = async () => {
  const socials = await client.fetch(`*[_type == "social"]`)
  return socials
}
