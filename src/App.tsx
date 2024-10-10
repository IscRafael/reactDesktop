import { useState } from 'react'
import Wallpaper from './components/Wallpaper'
import Desktop from './components/Desktop'
import Taskbar from './components/Taskbar'
import Window from './components/Window'
import TabWindow from './components/TabWindow'
import AccordionWindow from './components/AccordionWindow'
import Notepad from './components/Notepad'
import StartMenu from './components/StartMenu'
import WallpaperChanger from './components/WallpaperChanger'

function App() {
  const [openWindows, setOpenWindows] = useState([])
  const [activeWindow, setActiveWindow] = useState(null)
  const [minimizedWindows, setMinimizedWindows] = useState([])
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false)
  const [wallpaperUrl, setWallpaperUrl] = useState('https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner.jpg?w=1380&t=st=1684786207~exp=1684786807~hmac=13f89de5852e6bf9c9f28d8f3b7c5bfb8d6cec7b3d8b0b3f4d9b9b0b3f4d9b9b0')

  const openWindow = (app) => {
    if (!openWindows.some(window => window.id === app.id)) {
      const newWindow = {
        ...app,
        content: getWindowContent(app.id),
        zIndex: openWindows.length + 1
      }
      setOpenWindows([...openWindows, newWindow])
      setActiveWindow(newWindow.id)
      setMinimizedWindows(minimizedWindows.filter(id => id !== newWindow.id))
    } else {
      toggleWindowMinimize(app.id)
    }
  }

  const getWindowContent = (id) => {
    switch (id) {
      case 'notepad':
        return <Notepad />
      case 'tab':
        return <TabWindow />
      case 'accordion':
        return <AccordionWindow />
      case 'wallpaper':
        return <WallpaperChanger changeWallpaper={setWallpaperUrl} />
      default:
        return <div>Default content for {id}</div>
    }
  }

  const closeWindow = (id) => {
    setOpenWindows(openWindows.filter(window => window.id !== id))
    setMinimizedWindows(minimizedWindows.filter(windowId => windowId !== id))
    if (activeWindow === id) {
      setActiveWindow(null)
    }
  }

  const toggleWindowMinimize = (id) => {
    if (minimizedWindows.includes(id)) {
      setMinimizedWindows(minimizedWindows.filter(windowId => windowId !== id))
      setActiveWindow(id)
    } else {
      setMinimizedWindows([...minimizedWindows, id])
      setActiveWindow(null)
    }
  }

  const maximizeWindow = (id) => {
    // Implement maximize functionality
  }

  const bringToFront = (id) => {
    setOpenWindows(windows => {
      const window = windows.find(w => w.id === id)
      const otherWindows = windows.filter(w => w.id !== id)
      return [...otherWindows, { ...window, zIndex: windows.length }]
    })
    setActiveWindow(id)
  }

  const toggleStartMenu = () => {
    setIsStartMenuOpen(!isStartMenuOpen)
  }

  return (
    <div className="h-screen overflow-hidden">
      <Wallpaper wallpaperUrl={wallpaperUrl} />
      <Desktop openWindow={openWindow} />
      {openWindows.map(window => (
        <Window
          key={window.id}
          {...window}
          isActive={activeWindow === window.id}
          isMinimized={minimizedWindows.includes(window.id)}
          onClose={() => closeWindow(window.id)}
          onMinimize={() => toggleWindowMinimize(window.id)}
          onMaximize={() => maximizeWindow(window.id)}
          setActiveWindow={() => bringToFront(window.id)}
        />
      ))}
      <Taskbar 
        windows={openWindows} 
        activeWindow={activeWindow} 
        minimizedWindows={minimizedWindows}
        toggleWindowMinimize={toggleWindowMinimize}
        toggleStartMenu={toggleStartMenu}
      />
      <StartMenu 
        isOpen={isStartMenuOpen} 
        onClose={() => setIsStartMenuOpen(false)} 
        openWindow={openWindow}
      />
    </div>
  )
}

export default App