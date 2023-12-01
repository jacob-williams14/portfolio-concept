'use client'

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

import { PageInfo, Social } from '../../../../types'

type Props = {
  socials: Social[]
  pageInfo: PageInfo
}

export default function Header({ socials, pageInfo }: Props) {
  return (
    <header className="sticky top-0 z-30 mx-auto flex max-w-7xl justify-between p-5">
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
        className="flex flex-row items-center"
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
        className="flex cursor-pointer items-center self-center"
      >
        <p className="text-lg uppercase tracking-[6px] text-icy-blue">
          {pageInfo?.cornerText}
        </p>
      </motion.div>
    </header>
  )
}
