import useSWR from 'swr'
import List from '../../components/anotherTaskApp/list'
import Swal from 'sweetalert2'
import ItemModal from '../../components/anotherTaskApp/itemModal'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import LoadingAnimation from '../../components/_utils/loadingAnimation'
import OrderByCreated from '../../components/_utils/pagination/orderByCreated'
import { SiAddthis } from 'react-icons/si'
import PrintErrors from '../../components/_utils/printErrors'
import LayoutMetadata from '../../components/layout/config/anotherTaskApp'

const index = () => {
  /*
   * Modal with form
   */
  const [showModal, setShowModal] = useState(false)

  /*
   * pagination management
   */
  const [pageNumber, updatePageNumber] = useState(1)
  const shouldUpdatePageNumber = (number) => {
    if (number > 0 && number <= data.totalPages && number != pageNumber) {
      updatePageNumber(number)
    }
  }

  const [sort, updateSort] = useState('asc')

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
      const resjson = await res.json()
      if (!resjson.success) {
        throw new Error(resjson.errors.toString())
      }

      //we succeed! now we need to manage the pagination stuff
      //if we updatePageNumber to a number != pageNumber , it triggers useSWR

      if (sort === 'asc') {
        /*
          fits in currentPage?
            YES: revalidate this page. Can't trigger with updatePageNumber, use mutate
            NO:
              fits in last page?
                YES: validate last page
                NO: validate last page + 1
        */

        if (data.docs.length !== data.limit) {
          mutate(
            `/api/anotherTaskApp?page=${pageNumber}&limit=5&orderBy=createdAt&sort=${sort}`
          )
        } else {
          if (data.totalDocs % data.limit === 0) {
            updatePageNumber(data.totalPages + 1)
          } else {
            updatePageNumber(data.totalPages)
          }
        }
      } else {
        //desc works like a stack, you can only add on top, you always validate to first page
        //Use mutate cause if pageNumber == 1, updatePageNumber won't trigger useSWR
        mutate(
          `/api/anotherTaskApp?page=1&limit=5&orderBy=createdAt&sort=${sort}`
        )
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
    const resjson = await res.json()
    if (!resjson.success) {
      const error = new Error(resjson.errors.toString())
      throw error
    }

    return resjson.data
  }

  /*useSWR returns 3 things
    data     docs to render + pagination metadata
    error    if somthing went wrong
    mutate   a funciton to mutate the data, something like a data-setData from react.useState

    also this does the rol of an onMount or useEffect when landing in the page
  */
  const { data, error, mutate } = useSWR(
    `/api/anotherTaskApp?page=${pageNumber}&limit=5&orderBy=createdAt&sort=${sort}`,
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

        const resjson = await res.json()
        if (!resjson.success) {
          const error = new Error(resjson.errors.toString())
          throw error
        }

        const newDocs = data.docs?.map((it) =>
          it._id !== resjson.data._id ? it : resjson.data
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

      const resjson = await res.json()
      if (!resjson.success) {
        const error = new Error(resjson.errors.toString())
        throw error
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
    <>
      <LayoutMetadata />
      {error ? (
        <PrintErrors
          errors={[error.toString()]}
          fileName="pages/anotherTaskApp/index.jsx"
        />
      ) : !data ? (
        <LoadingAnimation />
      ) : (
        <>
          <div className="flex flex-row items-end justify-between">
            <button
              className="rounded bg-sky-900 py-2 px-4 font-semibold text-white hover:bg-sky-700"
              onClick={() => setShowModal(true)}
            >
              <div className="flex items-center">
                <div className="mr-2">
                  <SiAddthis />
                </div>
                <div>Add new!</div>
              </div>
            </button>
            <OrderByCreated currentSort={sort} handleClick={updateSort} />
          </div>
          {data.docs?.length === 0 ? (
            <PrintBoxWithText text="Nothing to show. Add a new task!" />
          ) : (
            <List
              data={data}
              crudUpdate={crudUpdate}
              crudDelete={crudDelete}
              paginateClickHandler={shouldUpdatePageNumber}
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
    </>
  )
}

export default index
