import Layout from '../../components/_utils/layout'
import LoadingAnimation from '../../components/_utils/loadingAnimation'
import DisplayError from '../../components/_utils/displayError'
import Form from '../../components/randomPuntanoGenerator/form'
import useSWR from 'swr'
import Puntano from '../../components/randomPuntanoGenerator/puntano'
import { useState } from 'react'

const RandomPuntanoGenerator = () => {
  /*------------------
  fn = first name
  ln = last name
  -------------------*/

  /*
   * Age state management
    age comes from form and needs to go to puntano, a brother component
    so I create a state here to update it on every sumbmit
   */
  const [age, setAge] = useState(18)

  /*
   * Gender state management
    gender comes from form and is needed as a query parameter to get first name
   */
  const [gender, setGender] = useState('')

  /*
   * fft: a trigger to Puntano component's useEffect
    ? why not use the props that already goes to Puntano component as triggers in the useEffect deps array?
    -can't put all the props in the useEffect deps array cause maybe all the props are re-genarated, causing the effect to run multiple times

    ? why not use just one of the props, ie lastName, as a trigger in the useEffect deps?
    -cause there's the little but random chance that the same lastName is randomly picked from the sample twice in a row
    In that scenario, useEffect won't trigger

    solution: I opted to send a boolean that infinitly toogles, kinda like a digital circuit flip-flop T, a fft
   */
  const [fft, toogle_fft] = useState(true)

  /* ------------------------------------------------------------------------------------------------------------------- */

  /*useSWR returns 3 things
    data     docs to render + pagination metadata
    error    if somthing went wrong
    mutate   a funciton to mutate the data, something like a data-setData from react.useState

    also this does the rol of an onMount or useEffect when landing in the page
  */

  /*
   * Get a new First Name from a collection in mongoDB
   */

  const fetchFn = async (url) => {
    const res = await fetch(url)
    if (!res.ok) {
      const error = new Error(
        'pages->randomPuntanoGenerator->index.jsx: something went wrong fetching a first name. res.status = ' +
          res.status
      )
      error.info = await res.json()
      error.status = res.status
      throw error
    }
    const { data } = await res.json()
    return data
  }

  const {
    data: fn_data,
    error: fn_error,
    mutate: fn_mutate,
  } = useSWR(
    `/api/randomPuntanoGenerator/firstName?gender=${gender}`,
    fetchFn,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  )

  /*
   * Get a new Last Name from a collection in mongoDB
   */

  const fetchLn = async (url) => {
    const res = await fetch(url)
    if (!res.ok) {
      const error = new Error(
        'pages->randomPuntanoGenerator->index.jsx: something went wrong fetching a last name. res.status = ' +
          res.status
      )
      error.info = await res.json()
      error.status = res.status
      throw error
    }
    const { data } = await res.json()
    return data
  }

  const {
    data: ln_data,
    error: ln_error,
    mutate: ln_mutate,
  } = useSWR('/api/randomPuntanoGenerator/lastName', fetchLn, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  /*
   * Make a new puntano
   */
  //make new puntano
  const makeNewPuntano = async (form) => {
    //update gender that comes from form
    setGender(form.gender)

    //get a first name form a sample in mongoDb
    fn_mutate(`/api/randomPuntanoGenerator/firstName?gender=${gender}`)

    //get a random last name from a sample in mongoDb
    ln_mutate('/api/randomPuntanoGenerator/lastName')

    //update age that comes from form
    setAge(form.age)

    //trigger puntano component useEffect
    toogle_fft(!fft)
  }

  return (
    <Layout
      headTittle="Pollito's stuff | Random Puntano Generator"
      title={'Random Puntano Generator 🦙'}
      pretitle={'You are using...'}
      descriptionRows={['Something/Someone from San Luis.']}
      signature="Pollito, a not puntano defining a puntano"
      displayHomeButton={true}
      goTo="https://en.wikipedia.org/wiki/San_Luis,_Argentina"
    >
      <Form makeNewPuntano={makeNewPuntano} />

      {fn_error ? (
        <DisplayError errorMessage={fn_error} />
      ) : ln_error ? (
        <DisplayError errorMessage={ln_error} />
      ) : !fn_data || !ln_data ? (
        <LoadingAnimation />
      ) : (
        <Puntano
          firstName={fn_data[0].name}
          lastName={ln_data[0].lastName}
          gender={fn_data[0].gender}
          age={age}
          triggerUseEffect={fft} //the value itself doesn't matter, what matters is that oscilates
        />
      )}
    </Layout>
  )
}

export default RandomPuntanoGenerator
