'use client'

import React from 'react'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

import { HomeData } from '../../../../types'

import { urlForImage } from '../../../../sanity/lib/image'

type Props = {
  homeData: HomeData
}

export default function Hero({ homeData }: Props) {
  const [text, count] = useTypewriter({
    words: homeData?.typewriterText.map((text: string) => {
      return `${text}`
    }),
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <div className="relative mx-auto h-80 w-80">
        <Image
          src={urlForImage(homeData?.centerImage).url()}
          alt=""
          className="rounded-full"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="z-20">
        <h2 className="text-md pb-5 uppercase tracking-[15px] text-gray-500">
          {homeData?.name}
        </h2>
        <h1 className="px-10 text-3xl font-semibold text-icy-blue lg:text-5xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#A5F2F3" />
        </h1>
      </div>
    </div>
  )
}
