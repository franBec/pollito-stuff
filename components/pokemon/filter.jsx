import Select from 'react-select'

import { useState } from 'react'

const Filter = ({ updateFilter }) => {
  //select stuff
  const options = [
    { value: 'id_asc', label: '1... 99 ⬇️' },
    { value: 'id_desc', label: '99... 1 ⬆️' },
    { value: 'az_asc', label: 'A - Z ⬇️' },
    { value: 'az_desc', label: 'Z - A ⬆️' },
  ]

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

  //form state

  const [form, setForm] = useState({
    name: '',
  })

  const handleChange = (e) => {
    const target = e.target
    var value = ''
    var name = ''

    //select box behaves a little weird, they dont have name & value
    if (target) {
      value = target.value.trim()
      name = target.name
    } else {
      name = 'sort'
      value = e.value
    }

    //needed to create a new constant
    //https://stackoverflow.com/questions/28773839/react-form-onchange-setstate-one-step-behind
    const updatedForm = {
      ...form,
      [name]: value,
    }

    setForm(updatedForm)
    updateFilter(updatedForm)
  }

  return (
    <>
      <div className="mb-4 flex items-end justify-around">
        <div>
          <input
            type="text"
            placeholder="Search a pokemon..."
            className="text-black"
            name="name"
            value={form.name ?? ''}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <Select
            defaultValue={options[0]}
            options={options}
            styles={customStyles}
            id="selectSort"
            instanceId="selectSort"
            name="sort"
            onChange={(e) => {
              handleChange(e)
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Filter
