const Desktop = ({ openWindow }) => {
  const apps = [
    { id: 'notepad', name: 'Notepad', icon: '📝' },
    { id: 'tab', name: 'Tab Window', icon: '🗂️' },
    { id: 'accordion', name: 'Accordion Window', icon: '🪗' },
    { id: 'wallpaper', name: 'Wallpaper Changer', icon: '🖼️' },
  ]

  return (
    <div className="absolute inset-0 p-4 grid grid-cols-6 gap-4 content-start">
      {apps.map(app => (
        <div
          key={app.id}
          className="flex flex-col items-center cursor-pointer hover:bg-white hover:bg-opacity-20 p-2 rounded"
          onClick={() => openWindow(app)}
        >
          <div className="text-4xl mb-1">{app.icon}</div>
          <div className="text-white text-sm">{app.name}</div>
        </div>
      ))}
    </div>
  )
}

export default Desktop