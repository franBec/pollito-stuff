import { useState } from 'react'

const Form = ({ data, crudCreate, crudUpdate, setShowModal, isNewItem }) => {
  const [form, setForm] = useState({
    _id: data._id,
    text: data.text,
    description: data.description,
    reminder: data.reminder,
  })

  const [displayError, toogleError] = useState(crudCreate ? true : false)

  const handleChange = (e) => {
    const target = e.target
    const value = target.name === 'reminder' ? target.checked : target.value
    const name = target.name

    setForm({
      ...form,
      [name]: value,
    })

    if (e.target.name === 'text') {
      toogleError(!e.target.value || e.target.value.trim() === '')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!displayError) {
      isNewItem ? crudCreate(form) : crudUpdate(form)
    }
    setShowModal(false)
  }

  return (
    <form className="p-6" onSubmit={handleSubmit}>
      <p className="text-lg">
        <label>
          Task
          {displayError && (
            <label className="italic text-red-500">
              {' '}
              ~This field can't be empty
            </label>
          )}
        </label>
        <br />
        <textarea
          type="text"
          name="text"
          value={form.text}
          onChange={(e) => handleChange(e)}
          required
          placeholder="Write a task..."
          className="min-w-full resize-y rounded-md p-2 text-black"
          rows={2}
        />
      </p>
      <p className="my-4 text-lg  ">
        <label>Description</label>
        <br />
        <textarea
          type="text"
          name="description"
          value={form.description}
          onChange={(e) => handleChange(e)}
          placeholder="Add a description..."
          className="min-w-full resize-y rounded-md p-2 text-black"
          rows={2}
        />
      </p>
      <p className="my-4 text-lg">
        <label>
          Reminder?
          <input
            type="checkbox"
            name="reminder"
            checked={form.reminder}
            onChange={handleChange}
            className="ml-2"
          />{' '}
          {form.reminder ? 'ON' : 'OFF'}
        </label>
      </p>
      <div className="py-2">
        <div className="w-full border-t border-slate-200"></div>
      </div>
      <input
        className={`${
          displayError ? 'bg-slate-500' : 'bg-green-700 hover:bg-green-500'
        } mx-36 cursor-pointer rounded px-6 py-3 text-sm font-bold uppercase`}
        type="submit"
        value="Save changes"
      ></input>
    </form>
  )
}

export default Form
