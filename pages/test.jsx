import Layout from '../components/_utils/layout'
import Accordion from '../components/_utils/accordion/accordion'

const Test = () => {
  return (
    <Layout
      headTittle="Pollito's stuff | Testing area"
      title={'The dev testing area 🧪'}
      pretitle={'You are viewing...'}
      descriptionRows={[
        'Here I do quick test of functionality',
        'Before putting them in a proper place',
      ]}
      signature="Pollito, while copying StackOverflow codes to check if it is what he's looking for"
      displayHomeButton={true}
    >
      <Accordion />
    </Layout>
  )
}

export default Test
