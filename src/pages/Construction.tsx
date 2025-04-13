import { Link } from 'react-router-dom'

export default function Construction() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">Construction</h1>
      <div className="max-w-2xl text-center space-y-6">
        <p className="text-lg">
          Revolutionizing construction with digital technologies and innovative
          approaches to building design and implementation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Digital Twins</h3>
            <p>Real-time digital representations of construction projects</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">BIM Integration</h3>
            <p>Advanced building information modeling for efficient project management</p>
          </div>
        </div>
      </div>
      <Link to="/" className="text-blue-500 hover:text-blue-700 mt-8">Back to Home</Link>
    </div>
  )
} 