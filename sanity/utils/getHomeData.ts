import { client } from '../lib/client'

export const getHomeData = async () => {
  const homeData = await client.fetch(`*[_type == "homeData"][0]`)
  return homeData
}
