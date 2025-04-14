import React from 'react'

interface CubeFaceProps {
  colour: string
  children: React.ReactNode
  className?: string
}

export default function CubeFace({ colour, children, className = '' }: CubeFaceProps) {
  return (
    <div 
      className={`cube-face ${className} absolute w-full h-full flex items-center justify-center text-white font-bold`}
      style={{ backgroundColor: colour }}
    >
      <div className="text-center">
        {children}
      </div>
    </div>
  )
} 