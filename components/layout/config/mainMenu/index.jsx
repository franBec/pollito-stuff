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
    headTitle_setText('')
    navBar_setArray([])
    quote_setArray([
      "This was my first web page, and I'll love it forever",
      'But right now, is abandoned',
      'Click here, and visit my blog',
    ])
    quote_setQuotee('Pollito')
    quote_setRedirect('https://pollitodev.netlify.app/')
    goBackButton_setRedirect(null)
  }, [])

  return null
}

export default LayoutMetadata
