'use client'

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

import { HomeData, Social } from '../../../../types'

import './header.css'

type Props = {
  socials: Social[]
  homeData: HomeData
}

export default function Header({ socials, homeData }: Props) {
  return (
    <header className="sticky-header">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="header-motion-left"
      >
        {socials?.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor={social.color}
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="header-motion-right"
      >
        <p className="header-corner-text">{homeData?.cornerText}</p>
      </motion.div>
    </header>
  )
}
