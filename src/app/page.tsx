import Head from 'next/head'
import Image from 'next/image'
import { PageInfo, Social } from '../../types'
import { getSocials } from '../../sanity/utils/getSocials'
import Header from './components/header/header'
import { getPageInfo } from '../../sanity/utils/getPageInfo'
import Hero from './components/hero/hero'

export default async function Home() {
  const pageInfo: PageInfo = await getPageInfo()
  const socials: Social[] = await getSocials()
  return (
    <div
      className="h-screen overflow-y-scroll bg-[rgb(36,36,36)]
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-icy-blue/80"
    >
      <Header pageInfo={pageInfo} socials={socials} />
      <Hero pageInfo={pageInfo} />
    </div>
  )
}
