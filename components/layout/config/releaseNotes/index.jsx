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
    headTitle_setText('Releases')
    navBar_setArray([{ text: 'Releases 📒', url: '/releaseNotes' }])
    quote_setArray([
      'Do not expect fully detailed release notes',
      'Is just a place to check what has been happening lately around here',
    ])
    quote_setQuotee('Pollito, trying to keep track of stuff in this page')
    quote_setRedirect('https://en.wikipedia.org/wiki/Release_notes')
    goBackButton_setRedirect('/')
  }, [])

  return null
}

export default LayoutMetadata
