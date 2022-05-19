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
        className={`${
          data.reminder ? 'border-l-green-500' : 'border-l-red-500'
        } m-1 flex flex-row items-center justify-between border-l-8 bg-[#716da9] bg-opacity-80 py-2.5 px-5`}
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
              className="rounded bg-[#555D8E] py-2 px-4 font-semibold text-white hover:bg-[#4B578B]"
            >
              More info...
            </button>
            <FaTimes
              className="mx-1"
              style={{ color: 'red', cursor: 'pointer' }}
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
