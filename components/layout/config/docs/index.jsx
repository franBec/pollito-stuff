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
    headTitle_setText('Docs')
    navBar_setArray([{ text: 'Docs ☕', url: '/docs' }])
    quote_setArray([
      "I don't have any background in proper software documentation",
      'But I have background developing without available documentation',
      'And it is a bad experience',
    ])
    quote_setQuotee('Pollito trying to become an ok-ish programmer')
    quote_setRedirect(
      'https://www.linkedin.com/posts/franco-becvort_development-coffee-activity-6944017973581856768-a5J7?utm_source=linkedin_share&utm_medium=member_desktop_web'
    )
    goBackButton_setRedirect('/')
  }, [])

  return null
}

export default LayoutMetadata
