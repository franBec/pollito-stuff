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
      "I'm a little sick right now but I swear",
      "When I'm ready I will fly us out of here",
    ])
    quote_setQuotee('This is home - Cavetown 🎵')
    quote_setRedirect('https://youtu.be/ZM_Gamwxvtc')
    goBackButton_setRedirect(null)
  }, [])

  return null
}

export default LayoutMetadata
