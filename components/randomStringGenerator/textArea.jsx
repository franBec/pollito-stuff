import { useState } from 'react'

const TextArea = ({ count, text, handleTextAreaOnChange, triggerLorem }) => {
  const [stack, updateStack] = useState([])

  const checkForLoremCombination = (e) => {
    if (
      JSON.stringify([e.code, stack[0]]) ===
      JSON.stringify(['Space', 'ControlLeft'])
    ) {
      triggerLorem()
    }
    updateStack([e.code, stack[0]])
  }

  return (
    <>
      <p className="py-2 text-xl font-medium">Text length: {count}</p>
      <textarea
        className="h-48 w-full bg-black bg-opacity-10 text-lg font-medium"
        placeholder="You can also write stuff here!"
        onChange={(e) => handleTextAreaOnChange(e)}
        onKeyDown={(e) => checkForLoremCombination(e)}
        value={text}
      ></textarea>
    </>
  )
}

export default TextArea
