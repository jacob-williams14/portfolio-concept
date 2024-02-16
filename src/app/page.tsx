import { HomeData, Social, Playlist } from '../../types'

import { getSocials } from '../../sanity/utils/getSocials'
import { getHomeData } from '../../sanity/utils/getHomeData'
import { getPlaylists } from '../../sanity/utils/getPlaylists'

import Header from './home-components/header/header'
import Hero from './home-components/hero/hero'
import About from './home-components/about/about'

export default async function Home() {
  const homeData: HomeData = await getHomeData()
  const socials: Social[] = await getSocials()
  const playlists: Playlist[] = await getPlaylists()
  return (
    <div
      className="z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-[rgb(36,36,36)] text-white
     scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-icy-blue/80"
    >
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
