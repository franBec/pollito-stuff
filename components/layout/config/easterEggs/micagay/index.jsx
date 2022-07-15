import {
  useHeadTittle,
  useNavbarBreadcrumb,
  useQuoteContainer,
  useGoBackButton,
} from '../../../../../zustand/layoutStore'

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
    headTitle_setText('r u gay')
    navBar_setArray([{ text: '🤨', url: 'easterEggs/micagay' }])
    quote_setArray([
      'Should I explicitly say that this is not to be taken seriously?',
      "Everyone's so snowflake lately...",
      'Thnks to Mica for asking this, so much fun',
    ])
    quote_setQuotee('with <3, from Pollito to Mica')
    quote_setRedirect('https://instagram.com/mi.mi_ca?igshid=YmMyMTA2M2Y=')
    goBackButton_setRedirect('/')
  }, [])

  return null
}

export default LayoutMetadata
