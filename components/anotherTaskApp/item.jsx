import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import ItemModal from './itemModal'

const Item = ({ data, crudUpdate, crudDelete }) => {
  const [showModal, setShowModal] = useState(false)

  const formatDate = (date) => {
    if (!date) {
      return 'Date unavailable'
    }
    return date.split('T')[0] + ' ' + date.split('T')[1].split('.')[0]
  }

  return (
    <>
      <div
        className={`bg-gradient-to-r ${
          data.reminder
            ? 'from-green-500 via-green-800'
            : 'from-red-500 via-red-800'
        } m-2 flex flex-row items-center justify-between to-slate-900 py-2 px-4 opacity-90 transition duration-150 ease-in-out hover:scale-105`}
      >
        <div className="overflow-hidden">
          <h3 className="... truncate font-bold">{data.text}</h3>
          <p className="... truncate break-all text-sm italic">
            {data.description}
          </p>
          <p className="... truncate break-all text-sm italic">
            created: {formatDate(data.createdAt)}
          </p>
        </div>

        <div className="flex-none">
          <div className="flex flex-row items-center">
            <button
              onClick={() => setShowModal(true)}
              className="rounded bg-slate-800 py-2 px-4 font-semibold hover:bg-slate-700"
            >
              More info...
            </button>
            <FaTimes
              className="ml-2 text-3xl"
              style={{ color: 'white', cursor: 'pointer' }}
              onClick={() => crudDelete(data._id)}
            />
          </div>
        </div>
      </div>

      {showModal && (
        <ItemModal
          setShowModal={setShowModal}
          data={data}
          crudUpdate={crudUpdate}
          isNewItem={false}
        />
      )}
    </>
  )
}

export default Item
