import React from 'react'

interface CubeFaceProps {
  backgroundColour?: string
  textColour?: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function CubeFace({ backgroundColour = '#FFFFFF', textColour = '#000000', children, className = '', onClick }: CubeFaceProps) {
  return (
    <div 
      className={`cube-face ${className} absolute w-full h-full flex items-center justify-center text-white font-bold cursor-pointer`}
      style={{ backgroundColor: backgroundColour }}
      onClick={onClick}
    >
      <div className="text-center" style={{ fontVariationSettings: '"wght" 700, "CASL" 0.5, "slnt" -5, "CRSV" 1', color: textColour }}>
        {children}
      </div>
    </div>
  )
} 