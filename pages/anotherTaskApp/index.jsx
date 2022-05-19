import Layout from '../../components/_utils/layout'
import useSWR from 'swr'
import DisplayError from '../../components/_utils/displayError'
import List from '../../components/anotherTaskApp/list'
import Swal from 'sweetalert2'
import ItemModal from '../../components/anotherTaskApp/itemModal'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import LoadingAnimation from '../../components/_utils/loadingAnimation'

const index = () => {
  /*
   * Modal with form
   */
  const [showModal, setShowModal] = useState(false)

  /*
   * Page number management
   */
  const [pageNumber, updatePageNumber] = useState(1)
  const shouldUpdatePageNumber = (number) => {
    if (number > 0 && number <= data.totalPages && number != pageNumber) {
      updatePageNumber(number)
    }
  }

  /*
   * SWAL: handle errors
   */
  const swal_handleError = (errorMessage) => {
    console.error(errorMessage)
    new Swal({
      title: 'Something went wrong!',
      text: 'Error: ' + errorMessage,
      icon: 'error',
    })
  }

  /*
   * Check if two tasks are the same - Usefull for avoiding unnecesary CRUD Updates
   */
  const areTheSame = (t1, t2) => {
    return (
      t1._id === t2._id &&
      t1.text === t2.text &&
      t1.description === t2.description &&
      t1.reminder === t2.reminder
    )
  }

  /*
   * CRUD: [C]reate
   */

  const crudCreate = (form) => {
    toast.promise(createButter(form), {
      loading: 'Loading',
      success: 'Task created!',
      error: 'Something went wrong',
    })
  }

  const createButter = async (form) => {
    try {
      const res = await fetch('api/anotherTaskApp', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        throw new Error(
          'pages/anotherTaskApp/index.jsx -> crudCreate: res.status = ' +
            res.status
        )
      }

      if (data.docs.length === data.limit) {
        if (data.totalDocs % data.limit === 0) {
          updatePageNumber(data.totalPages + 1)
        } else {
          updatePageNumber(data.totalPages)
        }
      } else {
        const newTask = await res.json()
        const newDocs = [...data.docs, newTask.data]
        const newData = { ...data, docs: newDocs }
        await mutate(newData, false)
      }
    } catch (error) {
      swal_handleError(error.message)
      throw new Error(error.message)
    }
  }

  /*
   * CRUD: [R]ead all by page
   */

  const crudReadPage = async (url) => {
    const res = await fetch(url)
    if (!res.ok) {
      const error = new Error(
        'pages->anotherTaskApp->index.jsx: something went wrong fetching the data. res.status = ' +
          res.status
      )
      error.info = await res.json()
      error.status = res.status
      throw error
    }
    const { data } = await res.json()
    return data
  }

  /*useSWR returns 3 things
    data     docs to render + pagination metadata
    error    if somthing went wrong
    mutate   a funciton to mutate the data, something like a data-setData from react.useState

    also this does the rol of an onMount or useEffect when landing in the page
  */
  const { data, error, mutate } = useSWR(
    `/api/anotherTaskApp?page=${pageNumber}&limit=5`,
    crudReadPage
  )

  /*
   * CRUD: [U]pdate
   */
  const crudUpdate = (form) => {
    toast.promise(updateButter(form), {
      loading: 'Loading',
      success: 'Task updated!',
      error: 'Something went wrong',
    })
  }

  const updateButter = async (form) => {
    try {
      const taskToUpdate = data.docs?.find((it) => it._id === form._id)
      if (taskToUpdate && !areTheSame(form, taskToUpdate)) {
        const res = await fetch('/api/anotherTaskApp', {
          method: 'PUT',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(form),
        })
        if (!res.ok) {
          throw new Error(
            'pages/anotherTaskApp/index.jsx -> crudUpdate: res.status = ' +
              res.status
          )
        }

        const updatedTask = await res.json()
        const newDocs = data.docs?.map((it) =>
          it._id !== updatedTask.data._id ? it : updatedTask.data
        )
        const newData = { ...data, docs: newDocs }
        await mutate(newData, false)
      }
    } catch (error) {
      swal_handleError(error.message)
      throw new Error(error.message)
    }
  }

  /*
   * CRUD: [D]elete
   */
  const crudDelete = (id) => {
    toast.promise(deleteButter(id), {
      loading: 'Loading',
      success: 'Task deleted!',
      error: 'Something went wrong',
    })
  }

  const deleteButter = async (id) => {
    try {
      const res = await fetch('/api/anotherTaskApp', {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(id),
      })
      if (!res.ok) {
        throw new Error(
          'pages/anotherTaskApp/index.jsx -> crudDelete: res.status = ' +
            res.status
        )
      }

      //if there's nothing to show in this page, go to page-1
      if (data.docs.length === 0 && data.page !== 1) {
        updatePageNumber(pageNumber - 1)
      }
      //else, lets validate this page
      else {
        mutate(`/api/anotherTaskApp?page=${pageNumber}`)
      }
    } catch (error) {
      swal_handleError(error.message)
    }
  }

  return (
    <Layout
      headTittle="Pollito's stuff | Another Task App"
      title={'Another Task App'}
      pretitle={'You are using...'}
      descriptionRows={[
        'Yes, another task managing app',
        'with CRUD operations in MongoDB & mongoose',
      ]}
      signature="Pollito, while making the millionth task managing app in the internet"
      displayHomeButton={true}
    >
      {error ? (
        <DisplayError errorMessage={error} />
      ) : !data ? (
        <LoadingAnimation />
      ) : (
        <>
          <div>
            <button
              className="rounded bg-[#555D8E] py-2 px-4 font-semibold text-white hover:bg-blue-500"
              onClick={() => setShowModal(true)}
            >
              Add new!
            </button>
          </div>
          {data.docs?.length === 0 ? (
            <div className="container mx-auto mb-8 w-fit bg-white bg-opacity-10 py-2 px-4 text-lg md:py-4 md:px-10 md:text-2xl lg:py-6 lg:px-12 lg:text-3xl">
              Nothing to show. Add a new task!
            </div>
          ) : (
            <List
              data={data}
              crudUpdate={crudUpdate}
              crudDelete={crudDelete}
              handleClick={shouldUpdatePageNumber}
            />
          )}
          {showModal && (
            <ItemModal
              data={{ text: '', description: '', reminder: false }}
              crudCreate={crudCreate}
              setShowModal={setShowModal}
              isNewItem={true}
            />
          )}
        </>
      )}
    </Layout>
  )
}

export default index
