import Head from 'next/head'
import { useHeadTittle } from '../../zustand/layoutStore'

const HeadComponent = () => {
  const text = useHeadTittle((state) => state.get_text)
  return (
    <Head>
      <title>Pollito's Stuff {text && `| ${text}`}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default HeadComponent
