import React from 'react'

const Wallpaper = ({ wallpaperUrl }) => {
  return (
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${wallpaperUrl})` }}
    />
  )
}

export default Wallpaper