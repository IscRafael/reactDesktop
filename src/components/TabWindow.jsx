import { useState } from 'react'

const TabWindow = () => {
  const [activeTab, setActiveTab] = useState(0)
  const tabs = ['Tab Text 1', 'Tab Text 2', 'Tab Text 3', 'Tab Text 4']

  return (
    <div className="h-full flex flex-col">
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex-grow p-4">
        Something useful would be in here.
      </div>
    </div>
  )
}

export default TabWindow