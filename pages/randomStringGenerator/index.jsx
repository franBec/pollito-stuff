import Layout from '../../components/_utils/layout'
import Form from '../../components/randomStringGenerator/form'
import TextArea from '../../components/randomStringGenerator/textArea'
import { useState } from 'react'
import toast from 'react-hot-toast'

const RandomStringGenerator = () => {
  const loremIpsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  const martinFierro =
    'Aquí me pongo a cantar Al compás de la vigüela, Que el hombre que lo desvela Una pena estraordinaria Como la ave solitaria Con el cantar se consuela.'

  const [count, setCount] = useState(loremIpsum.length)
  const [text, setText] = useState(loremIpsum)

  const [allowedChars, setAllowedChars] = useState('')
  const [allowedLength, setAllowedLength] = useState(1)
  const [lengthError, displayLengthError] = useState(false)

  const handleTextAreaOnChange = (e) => {
    setText(e.target.value)
    setCount(e.target.value.length)
  }

  const handleLenghtInputOnChange = (e) => {
    const inputedLength = e.target.value
    setAllowedLength(inputedLength)
    displayLengthError(
      Number.isNaN(inputedLength) ||
        inputedLength < 1 ||
        inputedLength > 1000 ||
        !Number.isInteger(+inputedLength)
    )
  }

  const generateRandomString = (e) => {
    e.preventDefault()

    var length = allowedLength
    var chars = allowedChars

    if (!lengthError) {
      var string = ''
      if (chars.length === 0) {
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      }

      for (var i = 0; i < length; i++) {
        string += chars.charAt(Math.floor(Math.random() * chars.length))
      }

      setText(string)
      setCount(string.length)
    }
  }

  const triggerLorem = () => {
    if (
      text.localeCompare('lorem', undefined, { sensitivity: 'accent' }) === 0
    ) {
      setText(loremIpsum)
      setCount(loremIpsum.length)
      toast('Achievement obtained! Lorem ipsum', {
        icon: '📖',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
    }

    if (
      text.localeCompare('martin fierro', undefined, {
        sensitivity: 'base',
      }) === 0
    ) {
      setText(martinFierro)
      setCount(martinFierro.length)
      toast('Achievement obtained! El Gaucho Martín Fierro', {
        icon: '🧉',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
    }
  }

  return (
    <Layout
      headTittle="Pollito's stuff | Random String Generator"
      title={'Random String Generator 🎲'}
      pretitle={'You are using...'}
      descriptionRows={[
        'In work, I usually need to test length of form textfields and databases columns',
        'So, why typing random stuff and counting in Sublime text',
        'When a page can do it for me?',
      ]}
      signature="Pollito, while overengineering a simple task"
      displayHomeButton={true}
      goTo="https://en.wikipedia.org/wiki/Overengineering"
    >
      <Form
        generateRandomString={generateRandomString}
        allowedChars={allowedChars}
        setAllowedChars={setAllowedChars}
        lengthError={lengthError}
        allowedLength={allowedLength}
        handleLenghtInputOnChange={handleLenghtInputOnChange}
      />

      <TextArea
        count={count}
        text={text}
        handleTextAreaOnChange={handleTextAreaOnChange}
        triggerLorem={triggerLorem}
      />
    </Layout>
  )
}

export default RandomStringGenerator
