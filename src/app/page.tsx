import { HomeData, Social, Playlist } from '../../types'

import { getSocials } from '../../sanity/utils/getSocials'
import { getHomeData } from '../../sanity/utils/getHomeData'
import { getPlaylists } from '../../sanity/utils/getPlaylists'

import Header from './home-components/header/header'
import Hero from './home-components/hero/hero'
import About from './home-components/about/about'

import './page.css'

export default async function Home() {
  const homeData: HomeData = await getHomeData()
  const socials: Social[] = await getSocials()
  const playlists: Playlist[] = await getPlaylists()
  return (
    <div className="page-container">
      <Header homeData={homeData} socials={socials} />
      <section id="hero" className="snap-start">
        <Hero homeData={homeData} />
      </section>
      <section id="about" className="snap-center">
        <About homeData={homeData} />
      </section>
    </div>
  )
}
