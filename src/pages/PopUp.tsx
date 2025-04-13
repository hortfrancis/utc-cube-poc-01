import { Link } from 'react-router-dom'

export default function PopUp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">Pop-up Spaces</h1>
      <div className="max-w-2xl text-center space-y-6">
        <p className="text-lg">
          Creating dynamic, temporary spaces that transform urban environments
          and engage communities through innovative design and technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Interactive Installations</h3>
            <p>Engaging public spaces that respond to visitor interaction</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Temporary Exhibitions</h3>
            <p>Curated experiences that showcase urban innovation</p>
          </div>
        </div>
      </div>
      <Link to="/" className="text-blue-500 hover:text-blue-700 mt-8">Back to Home</Link>
    </div>
  )
} 