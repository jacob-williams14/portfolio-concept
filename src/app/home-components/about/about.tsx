'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { urlForImage } from '../../../../sanity/lib/image'
import { HomeData } from '../../../../types'

type Props = {
  homeData: HomeData
}

const AboutImage = ({ homeData }: Props) => {
  return (
    <Image
      src={urlForImage(homeData?.aboutPic).url()}
      alt=""
      className="rounded-xl"
      fill
      style={{
        objectFit: 'cover',
      }}
    />
  )
}

export default function About({ homeData: homeData }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center
      justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-icy-blue">
        About
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="se:-mb-28 se:mt-6 se:h-[200px] se:w-[200px] xs:-mb-28
        xs:mt-0 relative h-56 w-56 flex-shrink-0 md:mb-0
        md:h-96 md:w-64 md:rounded-xl xl:h-[600px] xl:w-[500px]"
      >
        <AboutImage homeData={homeData} />
      </motion.div>
      <div className="se:space-y-6 xs:space-y-6 px-0 md:px-10 xl:space-y-8">
        <h4 className="text-4xl font-semibold">
          A <span className="underline decoration-icy-blue/70">little</span>{' '}
          about me:
        </h4>
        <p
          className="se:max-h-40 text-base
				 scrollbar-thin scrollbar-track-gray-400/20
				 scrollbar-thumb-icy-blue/80 md:max-h-40 xl:max-h-44"
        >
          {homeData?.backgroundInfo}
        </p>
      </div>
    </motion.div>
  )
}
