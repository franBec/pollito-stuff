import Layout from '../components/_utils/layout'

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
      displayHomeButton={false}
    ></Layout>
  )
}

export default Home
