import { useState } from 'react'

const StartMenu = ({ isOpen, onClose, openWindow }) => {
  const menuItems = [
    { id: 'about', name: 'About Ext JS', icon: '🔍' },
    { id: 'grid', name: 'Grid Window', icon: '📊' },
    { id: 'tab', name: 'Tab Window', icon: '🗂️' },
    { id: 'accordion', name: 'Accordion Window', icon: '🪗' },
    { id: 'notepad', name: 'Notepad', icon: '📝' },
    { id: 'more', name: 'More items', icon: '➕' },
  ]

  const [showSettings, setShowSettings] = useState(false)

  if (!isOpen) return null

  return (
    <div className="absolute bottom-12 left-0 w-64 bg-white shadow-lg rounded-t-lg overflow-hidden">
      <div className="bg-blue-600 p-2 text-white">
        <span className="font-bold">Don Griffin</span>
      </div>
      <div className="flex">
        <div className="w-3/4 p-2">
          {menuItems.map(item => (
            <div
              key={item.id}
              className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => {
                openWindow(item)
                onClose()
              }}
            >
              <span className="mr-2">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <div className="w-1/4 bg-gray-100 p-2">
          <div
            className="flex flex-col items-center p-2 hover:bg-gray-200 cursor-pointer"
            onClick={() => setShowSettings(!showSettings)}
          >
            <span className="text-2xl mb-1">⚙️</span>
            <span className="text-sm">Settings</span>
          </div>
          <div
            className="flex flex-col items-center p-2 hover:bg-gray-200 cursor-pointer mt-2"
            onClick={() => {
              // Implement logout functionality
              console.log('Logout clicked')
            }}
          >
            <span className="text-2xl mb-1">🚪</span>
            <span className="text-sm">Logout</span>
          </div>
        </div>
      </div>
      {showSettings && (
        <div className="border-t p-2">
          <div className="p-2 hover:bg-gray-200 cursor-pointer">
            <span>Change wallpaper</span>
          </div>
          <div className="p-2 hover:bg-gray-200 cursor-pointer">
            <span>Customize taskbar</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default StartMenu