import Image from 'next/image'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import { HiDocumentText } from 'react-icons/hi'

const PersonalInfoCard = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-sm rounded-md  bg-slate-800 bg-opacity-80 p-2 shadow-md">
        <div className="flex flex-col items-center p-2">
          <Image
            src="/img/profilePic.jpg"
            width={200}
            height={200}
            alt="me.jpg"
            className="rounded-full"
          />
          <h5 className="mb-1 text-xl font-medium">Franco Exequiel Becvort</h5>
          <span className="text-sm text-slate-300">Backend Developer</span>
          <div className="mt-2 flex space-x-2 lg:mt-4">
            <a
              href="https://www.linkedin.com/in/franco-becvort/"
              target="_blank"
              className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium hover:bg-blue-600"
            >
              <FaLinkedin /> Linkedin
            </a>
            <a
              href="https://github.com/franBec"
              target="_blank"
              className="inline-flex items-center rounded-lg bg-slate-700 py-2 px-4 text-center text-sm font-medium hover:bg-slate-500"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="mailto:franbecvort@gmail.com"
              target="_blank"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <BiMailSend /> Mail
            </a>
            <a
              href="https://drive.google.com/file/d/1TIDam9E8cvcidaCUeJ6HJzqeVztHRbM0/view?usp=sharing"
              target="_blank"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <HiDocumentText />
              CV
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfoCard
