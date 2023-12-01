'use client'

import React from 'react'
import { Spotify } from 'react-spotify-embed'

import { Playlist } from '../../../../types'

type Props = {
  playlist: Playlist
}

export default function SpotifyPlayer({ playlist }: Props) {
  return (
    <article>
      <Spotify width={500} height={400} link={playlist.url} />
    </article>
  )
}
