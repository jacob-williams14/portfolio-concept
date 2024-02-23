'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { urlForImage } from '../../../../sanity/lib/image'
import { HomeData } from '../../../../types'

import './about.css'

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
      className="about-motion"
    >
      <h3 className="about-header">About</h3>
      <div className="about-content">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="about-image-container"
        >
          <AboutImage homeData={homeData} />
        </motion.div>
        <div className="about-text-container">
          <h4 className="about-large-text">
            A <span>little</span> about me:
          </h4>
          <p className="about-body-text">{homeData?.backgroundInfo}</p>
        </div>
      </div>
    </motion.div>
  )
}
