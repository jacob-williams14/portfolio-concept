import { client } from '../lib/client'

export const getPlaylists = async () => {
  const playlists = await client.fetch(`*[_type == "playlist"]`)
  return playlists
}
