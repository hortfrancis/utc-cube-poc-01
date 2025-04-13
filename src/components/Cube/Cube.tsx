import './Cube.css'

export default function Cube() {

  return (
    <div className="scene">
      <div
        className='cube relative w-full h-full'>
        {/* Top face */}
        <div className="cube-face top absolute w-full h-full bg-yellow-500 flex items-center justify-center text-white font-bold">
          <div className="text-center">
            Augmented <br /> Reality
          </div>
        </div>
        {/* Front face */}
        <div className="cube-face front absolute w-full h-full bg-blue-500 flex items-center justify-center text-white font-bold">
          <div className="text-center">
            Smart Cities
          </div>
        </div>
        {/* Left face */}
        <div className="cube-face left absolute w-full h-full bg-red-500 flex items-center justify-center text-white font-bold">
          <div className="text-center">
            Pop-Up
          </div>
        </div>
        {/* Right face */}
        <div className="cube-face right absolute w-full h-full bg-purple-500 flex items-center justify-center text-white font-bold">
          <div className="text-center">
            Construction
          </div>
        </div>
        {/* Back face */}
        <div className="cube-face back absolute w-full h-full bg-green-500 flex items-center justify-center text-white font-bold">
          <div className="text-center">
            Heritage
          </div>
        </div>
        {/* Bottom face */}
        <div className="cube-face bottom absolute w-full h-full bg-orange-500 flex items-center justify-center text-white font-bold">
          <div className="text-center">
            🙂
          </div>
        </div>
      </div>
    </div>
  )
}
