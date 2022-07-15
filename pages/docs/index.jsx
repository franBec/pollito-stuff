//https://stackoverflow.com/questions/71228521/conditionally-disable-an-option-using-react-select-not-work-when-change-option-p

import Select from 'react-select'
import { useState } from 'react'
import PrintBoxWithText from '../../components/_utils/printBoxWithText'
import LayoutMetadata from '../../components/layout/config/docs'

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
    <>
      <LayoutMetadata />
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
    </>
  )
}

export default index
