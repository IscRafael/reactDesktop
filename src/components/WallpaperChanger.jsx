import React, { useState } from 'react'

const wallpapers = [
  { name: 'Wood', url: 'https://img.freepik.com/free-photo/brown-wooden-textured-flooring-background_53876-128746.jpg' },
  { name: 'Abstract', url: 'https://img.freepik.com/free-vector/abstract-background-with-squares_23-2148995948.jpg' },
  { name: 'Nature', url: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' },
  { name: 'Geometric', url: 'https://img.freepik.com/free-vector/abstract-geometric-wireframe-background_52683-59421.jpg' },
  { name: 'Gradient', url: 'https://img.freepik.com/free-vector/vibrant-summer-ombre-background-vector_53876-105765.jpg' },
]

const WallpaperChanger = ({ changeWallpaper }) => {
  const [selectedWallpaper, setSelectedWallpaper] = useState(wallpapers[0])

  const handleWallpaperChange = (wallpaper) => {
    setSelectedWallpaper(wallpaper)
    changeWallpaper(wallpaper.url)
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Wallpaper Changer</h2>
      <div className="grid grid-cols-2 gap-4">
        {wallpapers.map((wallpaper) => (
          <div
            key={wallpaper.name}
            className={`cursor-pointer border-2 p-2 rounded ${
              selectedWallpaper.name === wallpaper.name ? 'border-blue-500' : 'border-gray-300'
            }`}
            onClick={() => handleWallpaperChange(wallpaper)}
          >
            <img src={wallpaper.url} alt={wallpaper.name} className="w-full h-24 object-cover mb-2" />
            <p className="text-center">{wallpaper.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WallpaperChanger