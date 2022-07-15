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
    navBar_setArray([
      { text: 'Pokemon 🕹️', url: '/pokemon' },
      { text: 'Details' },
    ])
    quote_setArray(['El Equipo Rocket ha sido vencido otra vez'])
    quote_setQuotee('The rocket team, in Spanish Latin dub')
    quote_setRedirect('https://youtu.be/GB1bEnXjqQc')
    goBackButton_setRedirect('/pokemon')
  }, [])

  return null
}

export default LayoutMetadata
