import { Link } from 'react-router-dom'

export default function AugmentedReality() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">Augmented Reality</h1>
      <div className="max-w-2xl text-center space-y-6">
        <p className="text-lg">
          Transforming urban spaces through immersive digital experiences. Our AR solutions
          bridge the gap between physical and digital worlds.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Interactive City Guides</h3>
            <p>Navigate urban spaces with AR-enhanced directions and information</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Digital Overlays</h3>
            <p>Visualize future developments and historical context in real-time</p>
          </div>
        </div>
      </div>
      <Link to="/" className="text-blue-500 hover:text-blue-700 mt-8">Back to Home</Link>
    </div>
  )
} 