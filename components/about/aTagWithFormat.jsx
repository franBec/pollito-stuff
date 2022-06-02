import React from 'react'

const ATagWithFormat = ({ text, goto, format }) => {
  if (format === 'li')
    return (
      <li>
        <a href={goto} target="_blank">
          {text}
        </a>
      </li>
    )

  if (format === 'tag')
    return (
      <a
        href={goto}
        class="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"
        target="_blank"
      >
        {text}
      </a>
    )

  if (format === 'underline')
    return (
      <a className="underline" href={goto} target="_blank">
        {text}
      </a>
    )

  return <></>
}

export default ATagWithFormat
