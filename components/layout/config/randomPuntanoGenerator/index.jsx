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
    headTitle_setText('Random Puntano Generator')
    navBar_setArray([
      { text: 'Random Puntano Generator 🦙', url: '/randomPuntanoGenerator' },
    ])
    quote_setArray(['Something/Someone from San Luis'])
    quote_setQuotee('Pollito, a not puntano defining a puntano')
    quote_setRedirect('https://en.wikipedia.org/wiki/San_Luis,_Argentina')
    goBackButton_setRedirect('/')
  }, [])

  return null
}

export default LayoutMetadata
