import { useState } from 'react'
import Select from 'react-select'

const Form = ({ makeNewPuntano }) => {
  //Select: options to display
  const options = [
    { value: '', label: 'Any' },
    { value: 'F', label: 'Female' },
    { value: 'M', label: 'Male' },
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

  //form state
  const [form, setForm] = useState({
    gender: '',
    age: 18,
  })

  //age validation
  const [ageError, displayAgeError] = useState(false)

  const handleChange = (e) => {
    const target = e.target
    var value = ''
    var name = ''

    //select box behaves a little weird, they dont have name & value
    if (target) {
      value = target.value
      name = target.name
    } else {
      name = 'gender'
      value = e.value
    }

    setForm({
      ...form,
      [name]: value,
    })

    if (target && e.target.name === 'age') {
      displayAgeError(
        Number.isNaN(value) ||
          value < 1 ||
          value > 80 ||
          !Number.isInteger(+value)
      )
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!ageError) {
      makeNewPuntano(form)
    }
  }

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <div className="flex items-end">
          <div className="mx-2">
            <label className="block ">Gender</label>
            <Select
              id="selectGender"
              instanceId="selectGender"
              name="gender"
              className=""
              defaultValue={options[0]}
              options={options}
              styles={customStyles}
              onChange={(e) => {
                handleChange(e)
              }}
            />
          </div>
          <div className="mx-2">
            <label className="block ">
              Age{' '}
              {ageError && (
                <label className="bg-white bg-opacity-20 italic text-red-500">
                  ~Age must be a positive integer less than 80!
                </label>
              )}
            </label>
            <input
              type="number"
              name="age"
              min="1"
              max="80"
              step="1"
              value={form.age}
              onChange={(e) => handleChange(e)}
              placeholder="Age"
              className="m-1.25 py-0.75 px-1.75 h-10 text-base text-black"
            ></input>
          </div>
          <div className="mx-2">
            <input
              type="submit"
              value="Generate!"
              className="rounded bg-[#555D8E] py-2 px-4 font-semibold text-white hover:bg-blue-500"
            ></input>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
