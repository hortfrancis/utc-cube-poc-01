import './Cube.css'
import { useState, useEffect, useRef } from 'react'
import CubeFace from './CubeFace'

export default function Cube() {
  const [isAnimating, setIsAnimating] = useState(true)
  const [rotationX, setRotationX] = useState(-33)
  const [rotationY, setRotationY] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0)
  const [initialRotationX, setInitialRotationX] = useState(-33)
  const [initialRotationY, setInitialRotationY] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const cubeRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<number | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const animationStartTimeRef = useRef<number | null>(null)
  
  // Rotation speed factor (lower = slower)
  const ROTATION_SPEED = 0.25

  // Animation duration in milliseconds
  const ANIMATION_DURATION = 10000 // 10 seconds

  // Reset animation after 3 seconds of inactivity
  const resetAnimation = () => {
    setIsTransitioning(true)
    setRotationX(-33)
    setRotationY(0)
    
    // Wait for transition to complete before starting animation
    timeoutRef.current = window.setTimeout(() => {
      setIsTransitioning(false)
      setIsAnimating(true)
      animationStartTimeRef.current = Date.now()
    }, 1000) // Match this with CSS transition duration
  }

  // Update rotation during animation
  const updateAnimationRotation = () => {
    if (!isAnimating || animationStartTimeRef.current === null) return
    
    const elapsedTime = Date.now() - animationStartTimeRef.current
    const progress = (elapsedTime % ANIMATION_DURATION) / ANIMATION_DURATION
    
    // Calculate rotation based on animation progress
    // This matches the CSS animation: rotateX(-33deg) rotateY(0deg) to rotateX(-33deg) rotateY(360deg)
    setRotationX(-33)
    setRotationY(progress * 360)
    
    // Continue animation
    animationFrameRef.current = requestAnimationFrame(updateAnimationRotation)
  }

  // Start animation when isAnimating becomes true
  useEffect(() => {
    if (isAnimating) {
      animationStartTimeRef.current = Date.now()
      animationFrameRef.current = requestAnimationFrame(updateAnimationRotation)
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isAnimating])

  // Handle mouse down event
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setIsAnimating(false)
    setIsTransitioning(false)
    setStartX(e.clientX)
    setStartY(e.clientY)
    
    // Use current rotation values as initial values for manual control
    setInitialRotationX(rotationX)
    setInitialRotationY(rotationY)

    // Clear any existing timeout
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
    }
  }

  // Handle mouse move event
  const handleMouseMove = (e: MouseEvent | React.MouseEvent) => {
    if (!isDragging) return
    
    const deltaX = e.clientX - startX
    const deltaY = e.clientY - startY
    
    setRotationY(initialRotationY + deltaX * ROTATION_SPEED)
    setRotationX(initialRotationX - deltaY * ROTATION_SPEED)
  }

  // Handle mouse up event
  const handleMouseUp = () => {
    setIsDragging(false)
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
    }
    
    // Set new timeout to reset animation
    timeoutRef.current = window.setTimeout(resetAnimation, 3000)
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  // Add and remove event listeners
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    } else {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging])

  return (
    <div className="scene">
      <div
        ref={cubeRef}
        className={`cube relative w-full h-full select-none ${isTransitioning ? 'transitioning' : ''}`}
        style={{ 
          transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <CubeFace colour="rgb(234 179 8)" className="top">
          Augmented <br /> Reality
        </CubeFace>
        <CubeFace colour="rgb(59 130 246)" className="front">
          Smart Cities
        </CubeFace>
        <CubeFace colour="rgb(239 68 68)" className="left">
          Pop-Up
        </CubeFace>
        <CubeFace colour="rgb(168 85 247)" className="right">
          Construction
        </CubeFace>
        <CubeFace colour="rgb(34 197 94)" className="back">
          Heritage
        </CubeFace>
        <CubeFace colour="rgb(249 115 22)" className="bottom">
          🙂
        </CubeFace>
      </div>
    </div>
  )
}
