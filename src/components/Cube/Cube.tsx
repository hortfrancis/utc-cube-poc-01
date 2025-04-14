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
  const lastTimestampRef = useRef<number>(0)
  const totalRotationRef = useRef<number>(0)
  
  // Rotation speed factor (lower = slower)
  const ROTATION_SPEED = 0.25
  // Degrees per second for animation
  const DEGREES_PER_SECOND = 36 // 360 degrees / 10 seconds

  // Reset animation after 3 seconds of inactivity
  const resetAnimation = () => {
    setIsTransitioning(true)
    
    // Normalize the rotation to the closest multiple of 360
    const normalizedRotation = totalRotationRef.current % 360
    const targetRotation = normalizedRotation > 180 ? normalizedRotation - 360 : normalizedRotation
    
    // Set the rotation to the normalized value
    setRotationX(-33)
    setRotationY(targetRotation)
    
    // Reset the total rotation to match the normalized value
    totalRotationRef.current = targetRotation
    
    // Wait for transition to complete before starting animation
    timeoutRef.current = window.setTimeout(() => {
      setIsTransitioning(false)
      setIsAnimating(true)
      lastTimestampRef.current = performance.now()
    }, 1000) // Match this with CSS transition duration
  }

  // Update rotation during animation
  const updateAnimationRotation = (timestamp: number) => {
    if (!isAnimating) return
    
    // Calculate time elapsed since last frame
    const elapsedTime = timestamp - lastTimestampRef.current
    lastTimestampRef.current = timestamp
    
    // Calculate rotation increment based on elapsed time
    const rotationIncrement = (DEGREES_PER_SECOND * elapsedTime) / 1000
    
    // Update total rotation
    totalRotationRef.current += rotationIncrement
    
    // Apply rotation
    setRotationX(-33)
    setRotationY(totalRotationRef.current)
    
    // Continue animation
    animationFrameRef.current = requestAnimationFrame(updateAnimationRotation)
  }

  // Start animation when isAnimating becomes true
  useEffect(() => {
    if (isAnimating) {
      lastTimestampRef.current = performance.now()
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
    
    const newRotationY = initialRotationY + deltaX * ROTATION_SPEED
    setRotationY(newRotationY)
    setRotationX(initialRotationX - deltaY * ROTATION_SPEED)
    
    // Update total rotation to match the current rotation
    totalRotationRef.current = newRotationY
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
        <CubeFace backgroundColour="#3c10ff" textColour="#d1edf3" className="top">
          Augmented <br /> Reality
        </CubeFace>
        <CubeFace backgroundColour="#ffc109" textColour="#ff0974" className="front">
          Smart Cities
        </CubeFace>
        <CubeFace backgroundColour="#FF0000" textColour="#fff" className="left">
          Pop-Up
        </CubeFace>
        <CubeFace backgroundColour="#32CD32" textColour="#0000FF" className="right">
          Construction
        </CubeFace>
        <CubeFace backgroundColour="#d9f40e" textColour="#ca00cd" className="back">
          Heritage
        </CubeFace>
        <CubeFace backgroundColour="#FFFFFF" textColour="#333333" className="bottom">
          <span className="text-default">🙂</span>
        </CubeFace>
      </div>
    </div>
  )
}
