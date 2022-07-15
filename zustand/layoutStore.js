// this file is responsable for all the changes in the layout
// the functions here exported are pretended to be used onMount time of any index.jsx or similar page

//notice that the state in the setters is never used
//that because the layout of each page does not depends of any other page

//for that very reason: ALL index.jsx and similars should apply ALL of the functions this js provides
//if not, it may lead to misleading info displayed in the layout

import create from 'zustand'

//**Title of the Head HTML tag
export const useHeadTittle = create((set) => ({
  /**
   * Set the text that appears in the navegator tab
   * Example: Pollito's stuff | THE TEXT APPEARS HERE
   * setterParam: String
   */
  get_text: '',
  set_text: (text) => set((state) => ({ get_text: text })),
}))

//** Navbar breadcrumb
export const useNavbarBreadcrumb = create((set) => ({
  /**
   * An array of Links objects that makes the items the top navbar breadcrumb
   * Example: Pollito's Stuff > array[0].text > ... > array[n].text
   * setterParam: Array<{text: String, url: String}>
   */
  get_array: [],
  set_array: (array) => set((state) => ({ get_array: array })),
}))

//**The main middle container, the thing that usually has a quote
export const useQuoteContainer = create((set) => ({
  /**
   * if (quoteLines.length || quotee || redirect) == false, the quote container won't be displayed
   */

  /**
   * An array of Strings that makes the rows of the quote
   * setterParam: Array<String>
   */
  get_array: [],
  set_array: (array) => set((state) => ({ get_array: array })),

  /**
   * Set the quotee, the person who said the quote/source
   * setterParam: String
   */
  get_quotee: '',
  set_quotee: (text) => set((state) => ({ get_quotee: text })),

  /**
   * Set where the quote should redirect
   * setterParam: String
   */
  get_redirect: '/',
  set_redirect: (url) => set((state) => ({ get_redirect: url })),
}))

// **Go back button at the bottom left
export const useGoBackButton = create((set) => ({
  /**
   * Set where the 'Go Back' button should redirect
   * setterParam: String or null. If null, button won't be displayed
   */
  get_redirect: '/',
  set_redirect: (url) => set((state) => ({ get_redirect: url })),
}))
