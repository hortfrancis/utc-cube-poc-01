import { Link } from 'react-router-dom'

export default function SmartCities() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">Smart Cities</h1>
      <div className="max-w-2xl text-center space-y-6">
        <p className="text-lg">
          Building the cities of tomorrow with intelligent infrastructure and data-driven
          solutions for sustainable urban living.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">IoT Integration</h3>
            <p>Connected sensors and devices for efficient city management</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
            <p>Real-time insights for improved urban planning and services</p>
          </div>
        </div>
      </div>
      <Link to="/" className="text-blue-500 hover:text-blue-700 mt-8">Back to Home</Link>
    </div>
  )
} 