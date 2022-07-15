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
    headTitle_setText('Pokemon')
    navBar_setArray([{ text: 'Pokemon 🕹️', url: '/pokemon' }])
    quote_setArray(['Pues yo prefiero los tamales verdes'])
    quote_setQuotee('James in Spanish Latin dub')
    quote_setRedirect('https://youtu.be/LR9vfQ1J2M4')
    goBackButton_setRedirect('/')
  }, [])

  return null
}

export default LayoutMetadata
