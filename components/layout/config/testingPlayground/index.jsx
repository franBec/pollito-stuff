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
    headTitle_setText('Testing Playground')
    navBar_setArray([
      { text: 'The dev testing playground🧪', url: '/testingPlayground' },
    ])
    quote_setArray([
      'Here I do quick test of functionality',
      'Before putting them in a proper place',
    ])
    quote_setQuotee('Pollito, while copying from StackOverflow')
    quote_setRedirect('https://youtu.be/vSoMfIJDVSk')
    goBackButton_setRedirect('/')
  }, [])

  return null
}

export default LayoutMetadata
