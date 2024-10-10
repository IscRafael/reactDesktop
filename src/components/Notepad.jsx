import { useState } from 'react'

const Notepad = () => {
  const [text, setText] = useState('')

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center bg-gray-200 p-2">
        <select className="mr-2">
          <option>Helvetica</option>
          <option>Arial</option>
          <option>Times New Roman</option>
        </select>
        <button className="mx-1 px-2 py-1 bg-white">B</button>
        <button className="mx-1 px-2 py-1 bg-white">I</button>
        <button className="mx-1 px-2 py-1 bg-white">U</button>
      </div>
      <textarea
        className="flex-grow p-2 resize-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Some rich text goes here. Give it a try!"
      />
    </div>
  )
}

export default Notepad