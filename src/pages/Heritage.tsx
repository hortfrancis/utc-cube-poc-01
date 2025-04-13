import { Link } from 'react-router-dom'

export default function Heritage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">Heritage</h1>
      <div className="max-w-2xl text-center space-y-6">
        <p className="text-lg">
          Preserving and celebrating cultural heritage through digital innovation,
          ensuring historical significance meets modern technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Digital Preservation</h3>
            <p>3D scanning and documentation of historical sites and artifacts</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Interactive Heritage</h3>
            <p>Engaging digital experiences that bring history to life</p>
          </div>
        </div>
      </div>
      <Link to="/" className="text-blue-500 hover:text-blue-700 mt-8">Back to Home</Link>
    </div>
  )
} 