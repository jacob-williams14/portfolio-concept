import React from 'react'

import { Playlist } from '../../../../types'

import SpotifyPlayer from '../spotify-player/player'

type Props = {
  playlists: Playlist[]
}

export default function Gallery({ playlists }: Props) {
  return (
    <div className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left md:flex-row">
      <h3 className="absolute top-24 mb-5 text-2xl uppercase tracking-[20px] text-icy-blue">
        Playlists
      </h3>
      <div
        className="flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10
				scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-icy-blue/80"
      >
        {playlists?.map((playlist) => (
          <SpotifyPlayer key={playlist._id} playlist={playlist} />
        ))}
      </div>
    </div>
  )
}
