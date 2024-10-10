import { useState, useEffect, useRef } from 'react'
import Draggable from 'react-draggable'

const Window = ({ id, name, icon, content, isActive, isMinimized, onClose, onMinimize, onMaximize, setActiveWindow, zIndex }) => {
  const [isMaximized, setIsMaximized] = useState(false)
  const [size, setSize] = useState({ width: 600, height: 400 })
  const [position, setPosition] = useState({ x: 50, y: 50 })
  const nodeRef = useRef(null)

  useEffect(() => {
    if (isMaximized) {
      setSize({ width: window.innerWidth, height: window.innerHeight - 48 }) // 48 is taskbar height + some padding
      setPosition({ x: 0, y: 0 })
    } else {
      setSize({ width: 600, height: 400 })
    }
  }, [isMaximized])

  const handleMaximize = () => {
    setIsMaximized(!isMaximized)
    onMaximize(id)
  }

  if (isMinimized) {
    return null
  }

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".window-header"
      bounds="parent"
      position={position}
      onStop={(e, data) => setPosition({ x: data.x, y: data.y })}
      disabled={isMaximized}
    >
      <div
        ref={nodeRef}
        className={`absolute bg-white shadow-lg rounded-lg overflow-hidden ${isActive ? 'ring-2 ring-blue-500' : ''}`}
        style={{ width: size.width, height: size.height, zIndex }}
        onClick={setActiveWindow}
      >
        <div className="window-header bg-gray-800 text-white px-4 py-2 flex justify-between items-center cursor-move">
          <div className="flex items-center">
            <span className="mr-2 text-xl">{icon}</span>
            <span className="font-semibold">{name}</span>
          </div>
          <div className="flex space-x-2">
            <button className="focus:outline-none hover:bg-gray-700 rounded p-1" onClick={onMinimize}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
            <button className="focus:outline-none hover:bg-gray-700 rounded p-1" onClick={handleMaximize}>
              {isMaximized ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v2h2a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-2H4a2 2 0 01-2-2V6a2 2 0 012-2h2V4zm2 6v6h8V6H6v4zm6-6v2h2V4h-2z" clipRule="evenodd"></path></svg>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 2v10h12V6H4z" clipRule="evenodd"></path></svg>
              )}
            </button>
            <button className="focus:outline-none hover:bg-red-600 rounded p-1" onClick={onClose}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </div>
        </div>
        <div className="p-4 overflow-auto" style={{ height: 'calc(100% - 40px)' }}>
          {content}
        </div>
      </div>
    </Draggable>
  )
}

export default Window