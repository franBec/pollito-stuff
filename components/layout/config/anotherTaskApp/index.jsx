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
    headTitle_setText('Another Task App')
    navBar_setArray([{ text: 'Another Task App ❌✅', url: '/anotherTaskApp' }])
    quote_setArray([
      'Yes, another task managing app',
      'with CRUD operations and pagination in MongoDB & mongoose',
    ])
    quote_setQuotee('Pollito, while escaping React tutorial hell')
    quote_setRedirect('https://youtu.be/HyWYpM_S-2c')
    goBackButton_setRedirect('/')
  }, [])

  return null
}

export default LayoutMetadata
