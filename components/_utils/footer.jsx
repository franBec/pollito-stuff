import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="container mx-auto flex flex-col items-center justify-between rounded bg-[#716DA9] bg-opacity-10 p-6 md:flex-row">
      <Link href="/" className="mx-3 duration-150 hover:opacity-80">
        <a>Made by Pollito 🐤</a>
      </Link>
      <div className="-mx-6 flex">
        <Link
          href="/anotherTaskApp"
          className="mx-3 duration-150 hover:opacity-80"
        >
          <a>AnotherTaskApp</a>
        </Link>
        {' | '}
        <Link
          href="/randomStringGenerator"
          className="mx-3 duration-150 hover:opacity-80"
        >
          <a>Random String Generator</a>
        </Link>
        {/*{' | '}
        <Link
          href="/randomPuntanoGenerator"
          className="mx-3 duration-150 hover:opacity-80"
        >
          <a>Random Puntano Generator</a>
        </Link>
        {' | '}
        <Link href="/about" className="mx-3 duration-150 hover:opacity-80">
          <a>About</a>
        </Link> */}
      </div>
    </footer>
  )
}

export default Footer
