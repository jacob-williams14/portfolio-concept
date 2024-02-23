'use client'

import React from 'react'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

import { HomeData } from '../../../../types'

import { urlForImage } from '../../../../sanity/lib/image'

import './hero.css'

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
    <div className="hero-container">
      <div className="hero-image-container">
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
        <h2 className="name-text">{homeData?.name}</h2>
        <h1 className="typewriter-text">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#A5F2F3" />
        </h1>
      </div>
    </div>
  )
}
