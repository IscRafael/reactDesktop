import { useState } from 'react'

const AccordionWindow = () => {
  const [activeSection, setActiveSection] = useState(null)
  const sections = [
    { title: 'Online Users', content: 'List of online users' },
    { title: 'Friends', content: 'List of friends' },
    { title: 'Chat', content: 'Chat interface' },
  ]

  return (
    <div className="h-full flex flex-col">
      {sections.map((section, index) => (
        <div key={index} className="border-b">
          <button
            className="w-full text-left px-4 py-2 bg-gray-200 hover:bg-gray-300"
            onClick={() => setActiveSection(activeSection === index ? null : index)}
          >
            {section.title}
          </button>
          {activeSection === index && (
            <div className="p-4">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default AccordionWindow