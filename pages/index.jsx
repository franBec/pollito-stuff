import Menu from '../components/mainMenu/menu'
import LayoutMetadata from '../components/layout/config/mainMenu/'

//https://stackoverflow.com/questions/56334381/why-my-font-awesome-icons-are-being-displayed-big-at-first-and-then-updated-to-t
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false /* eslint-disable import/first */

const Home = () => {
  return (
    <>
      <LayoutMetadata />
      <Menu />
    </>
  )
}

export default Home
