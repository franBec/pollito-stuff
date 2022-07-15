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
    headTitle_setText('404 Not found')
    navBar_setArray([{ text: '404 Not Found 🐈‍⬛' }])
    quote_setArray([
      "'404 /ˌfɔːr əʊ ˈfɔːr/ [noun]'",
      'A message that appears on a computer screen that tells you that an internet address cannot be found',
    ])
    quote_setQuotee(
      "Definition of 404 from the Oxford Advanced Learner's Dictionary"
    )
    quote_setRedirect(
      'https://www.oxfordlearnersdictionaries.com/definition/english/404#:~:text=404-,noun,internet%20address%20cannot%20be%20found'
    )
    goBackButton_setRedirect('/')
  }, [])

  return null
}

export default LayoutMetadata
