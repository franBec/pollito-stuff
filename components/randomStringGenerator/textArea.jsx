import { useState } from 'react'

const TextArea = ({
  count,
  text,
  handleTextAreaOnChange,
  triggerAchievement,
}) => {
  const [stack, updateStack] = useState([])

  const checkForLoremCombination = (e) => {
    if (
      JSON.stringify([e.code, stack[0]]) ===
      JSON.stringify(['Space', 'ControlLeft'])
    ) {
      triggerAchievement()
    }
    updateStack([e.code, stack[0]])
  }

  return (
    <>
      <p className="py-2 text-xl font-medium">Text length: {count}</p>
      <textarea
        className="h-60 w-full border border-white bg-black bg-opacity-20 p-2 text-lg font-medium"
        placeholder="You can also write stuff here!"
        onChange={(e) => handleTextAreaOnChange(e)}
        onKeyDown={(e) => checkForLoremCombination(e)}
        value={text}
      ></textarea>
    </>
  )
}

export default TextArea
