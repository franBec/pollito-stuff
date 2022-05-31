import Layout from '../components/_utils/layout'
import Menu from '../components/mainMenu/menu'

//https://stackoverflow.com/questions/56334381/why-my-font-awesome-icons-are-being-displayed-big-at-first-and-then-updated-to-t
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false /* eslint-disable import/first */

const Home = () => {
  return (
    <Layout
      headTittle="Pollito's stuff | Home"
      title={"Pollito's Stuff 🐤"}
      pretitle={'Welcome to'}
      descriptionRows={[
        "I'm a little sick right now but I swear",
        "When I'm ready I will fly us out of here",
      ]}
      signature="This is home - Cavetown 🎵"
      goTo="https://youtu.be/ZM_Gamwxvtc"
      displayHomeButton={false}
    >
      <Menu />
    </Layout>
  )
}

export default Home
