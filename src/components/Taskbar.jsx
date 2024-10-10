import React, { useState, useEffect } from 'react'

const Taskbar = ({ windows, activeWindow, minimizedWindows, toggleWindowMinimize, toggleStartMenu }) => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-blue-700 to-blue-900 flex items-center px-2 shadow-lg">
      <button 
        className="px-4 py-2 bg-blue-600 text-white font-bold rounded-sm mr-2 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200 shadow-md"
        onClick={toggleStartMenu}
      >
        Start
      </button>
      <div className="flex-1 flex items-center overflow-x-auto space-x-1 px-2">
        {windows.map(window => (
          <div
            key={window.id}
            className={`flex items-center px-3 py-1 text-sm text-white cursor-pointer rounded-sm transition-colors duration-200 ${
              activeWindow === window.id ? 'bg-blue-500 shadow-inner' : 
              minimizedWindows.includes(window.id) ? 'bg-blue-800 hover:bg-blue-700' : 
              'bg-blue-900 hover:bg-blue-800'
            }`}
            onClick={() => toggleWindowMinimize(window.id)}
          >
            <span className="mr-2 text-lg">{window.icon}</span>
            <span className="truncate max-w-xs">{window.name}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center ml-2 bg-blue-800 px-3 py-1 rounded-sm shadow-inner">
        <span className="text-white text-sm">{currentTime.toLocaleTimeString()}</span>
      </div>
    </div>
  )
}

export default Taskbar