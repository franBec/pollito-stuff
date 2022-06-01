import Layout from '../components/_utils/layout'
import Accordion from '../components/_utils/accordion/accordion'

const Test = () => {
  return (
    <Layout
      headTittle="Pollito's stuff | Testing area"
      navTitle={'The dev testing area 🧪'}
      introDescriptionRows={[
        'Here I do quick test of functionality',
        'Before putting them in a proper place',
      ]}
      introSignature="Pollito, while copying StackOverflow codes to check if it is what he's looking for"
      isThisHome={false}
    >
      <Accordion />
    </Layout>
  )
}

export default Test
