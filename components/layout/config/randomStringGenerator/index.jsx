import {
  useHeadTittle,
  useNavbarBreadcrumb,
  useQuoteContainer,
  useGoBackButton,
} from '../../../../zustand/layoutStore'

import { useEffect } from 'react'

const LayoutMetadata = () => {
  const headTitle_setText = useHeadTittle((state) => state.set_text)
  const navBar_setArray = useNavbarBreadcrumb((state) => state.set_array)
  const quote_setArray = useQuoteContainer((state) => state.set_array)
  const quote_setQuotee = useQuoteContainer((state) => state.set_quotee)
  const quote_setRedirect = useQuoteContainer((state) => state.set_redirect)
  const goBackButton_setRedirect = useGoBackButton(
    (state) => state.set_redirect
  )

  useEffect(() => {
    headTitle_setText('Random String Generator')
    navBar_setArray([
      { text: 'Random String Generator 🎲', url: '/randomStringGenerator' },
    ])
    quote_setArray([
      'In work, I usually need to test length of form textfields and databases columns',
      'So, why typing random stuff and counting in Sublime text',
      'When a page can do it for me?',
    ])
    quote_setQuotee('Pollito, while overengineering a simple task')
    quote_setRedirect('https://youtu.be/Sxxw3qtb3_g')
    goBackButton_setRedirect('/')
  }, [])

  return null
}

export default LayoutMetadata
