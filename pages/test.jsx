import Layout from '../components/_utils/layout'
import Geocode from 'react-geocode'

Geocode.setApiKey(process.env.NEXT_PUBLIC_API_KEY)
Geocode.setLanguage('en')
Geocode.setRegion('ar')
Geocode.setLocationType('ROOFTOP')
Geocode.enableDebug()

Geocode.fromLatLng('-33.292694', '-66.340651').then(
  (response) => {
    const address = response.results[0].formatted_address
    console.log(address)
  },
  (error) => {
    console.error(error)
  }
)

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
      <div class="mx-auto w-full p-8 md:w-3/5">
        <p>
          Open <strong>one</strong>
        </p>
        <div class="shadow-md">
          <div class="tab w-full overflow-hidden border-t">
            <input
              class="absolute opacity-0"
              id="tab-single-one"
              type="radio"
              name="tabs2"
            />
            <label
              class="block cursor-pointer p-5 leading-normal"
              for="tab-single-one"
            >
              Label One
            </label>
            <div class="tab-content overflow-hidden border-l-2 border-indigo-500 bg-gray-100 leading-normal">
              <p class="p-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur, architecto, explicabo perferendis nostrum, maxime
                impedit atque odit sunt pariatur illo obcaecati soluta molestias
                iure facere dolorum adipisci eum? Saepe, itaque.
              </p>
            </div>
          </div>
          <div class="tab w-full overflow-hidden border-t">
            <input
              class="absolute opacity-0"
              id="tab-single-two"
              type="radio"
              name="tabs2"
            />
            <label
              class="block cursor-pointer p-5 leading-normal"
              for="tab-single-two"
            >
              Label Two
            </label>
            <div class="tab-content overflow-hidden border-l-2 border-indigo-500 bg-gray-100 leading-normal">
              <p class="p-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur, architecto, explicabo perferendis nostrum, maxime
                impedit atque odit sunt pariatur illo obcaecati soluta molestias
                iure facere dolorum adipisci eum? Saepe, itaque.
              </p>
            </div>
          </div>
          <div class="tab w-full overflow-hidden border-t">
            <input
              class="absolute opacity-0"
              id="tab-single-three"
              type="radio"
              name="tabs2"
            />
            <label
              class="block cursor-pointer p-5 leading-normal"
              for="tab-single-three"
            >
              Label Three
            </label>
            <div class="tab-content overflow-hidden border-l-2 border-indigo-500 bg-gray-100 leading-normal">
              <p class="p-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur, architecto, explicabo perferendis nostrum, maxime
                impedit atque odit sunt pariatur illo obcaecati soluta molestias
                iure facere dolorum adipisci eum? Saepe, itaque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Test
