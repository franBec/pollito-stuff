import Layout from '../components/_utils/layout'
import { useState } from 'react'

//https://stackoverflow.com/questions/60793727/failed-to-load-pdf-file-in-react-js
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Test = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <Layout
      headTittle="Pollito's stuff | Testing area"
      navTitle={'The dev testing area 🧪'}
      introDescriptionRows={[
        'Here I do quick test of functionality',
        'Before putting them in a proper place',
      ]}
      introSignature="Pollito, while copying StackOverflow codes to check if it is what he's looking for"
      isThisHome={false}
    >
      <>
        <Document file="/pdf/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </>
    </Layout>
  )
}

export default Test
