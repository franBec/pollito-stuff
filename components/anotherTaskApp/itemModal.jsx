//https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/small
import Form from './form'

const ItemModal = ({
  setShowModal,
  data,
  crudUpdate,
  crudCreate,
  isNewItem,
}) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative my-6 mx-auto w-auto max-w-6xl">
          {/*content*/}
          <div className="relative flex w-full flex-col rounded-lg bg-slate-800 shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
              <h3 className="text-3xl font-semibold ">Task details</h3>
              <button
                className="float-right ml-auto text-3xl font-semibold leading-none outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="block h-6 w-6 text-4xl outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            {/* <div className="relative flex-auto"> */}
            <Form
              data={data}
              crudUpdate={crudUpdate}
              crudCreate={crudCreate}
              setShowModal={setShowModal}
              isNewItem={isNewItem}
            ></Form>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 opacity-50"></div>
    </>
  )
}

export default ItemModal
