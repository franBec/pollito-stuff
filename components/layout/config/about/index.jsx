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
    headTitle_setText('About')
    navBar_setArray([{ text: 'About', url: '/about' }])
    quote_setArray(['Oh, hi~'])
    quote_setQuotee('Nanashi Mumei')
    quote_setRedirect('https://youtu.be/4NYsqm2E41k')
    goBackButton_setRedirect('/')
  }, [])

  return null
}

export default LayoutMetadata
