import Image from 'next/image'

const PersonalInfoCard = () => {
  return (
    <div className="max-w-sm rounded-lg  bg-gray-700 bg-opacity-20 shadow-md">
      <div className="flex flex-col items-center pb-10">
        <Image
          src="/img/profile.jpg"
          width={150}
          height={150}
          alt="Picture of the author"
          className="rounded-full"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Franco Exequiel Becvort
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Web Developer
        </span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add friend
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Message
          </a>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfoCard
