//https://stackoverflow.com/questions/71228521/conditionally-disable-an-option-using-react-select-not-work-when-change-option-p

import Layout from '../../components/_utils/layout'
import Select from 'react-select'
import { useState } from 'react'
import PrintBoxWithText from '../../components/_utils/printBoxWithText'

const index = () => {
  const options = [
    { value: '', label: 'Choose a file' },
    {
      value: '/pdf/randomPuntanoGenerator - fullNameAndGender.pdf',
      label: 'randomPuntanoGenerator - fullNameAndGender',
    },
    {
      value: '/pdf/randomPuntanoGenerator - randomAddress.pdf',
      label: 'randomPuntanoGenerator - randomAddress',
    },
    {
      value: '/pdf/randomPuntanoGenerator - newPuntano.pdf',
      label: 'randomPuntanoGenerator - newPuntano',
    },
  ]

  //Select: style
  const customStyles = {
    option: (provided) => ({
      ...provided,
      color: 'black',
      fontWeight: '',
    }),
    control: (provided) => ({
      ...provided,
      color: 'black',
      fontWeight: '',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'black',
      fontWeight: '',
    }),
  }

  const handleChange = (e) => {
    if (e.value) {
      setFile(e.value)
    }
  }

  const [file, setFile] = useState('')

  return (
    <Layout
      headTittle="Pollito's stuff | Docs"
      navTitle={'Docs ☕'}
      introDescriptionRows={[
        "I don't have any background in proper software documentation",
        'But I have background developing without available documentation',
        'And it is a bad experience',
      ]}
      introSignature="Pollito trying to become an ok-ish programmer"
      introHref="https://www.linkedin.com/posts/franco-becvort_development-coffee-activity-6944017973581856768-a5J7?utm_source=linkedin_share&utm_medium=member_desktop_web"
      isThisHome={false}
    >
      <Select
        id="selectFile"
        instanceId="selectFile"
        name="file"
        className=""
        defaultValue={options[0]}
        isOptionDisabled={(option) => !option.value}
        options={options}
        styles={customStyles}
        onChange={(e) => {
          handleChange(e)
        }}
      />
      <div className="mt-5">
        {file ? (
          <iframe src={file} width="100%" height="600px"></iframe>
        ) : (
          <PrintBoxWithText text="Hey, select a file! ⬆️" />
        )}
      </div>
    </Layout>
  )
}

export default index
