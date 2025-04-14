import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-32 bg-white text-default">
      <h1 
        className="text-4xl mb-8 text-primary" 
        style={{ fontVariationSettings: '"wght" 800, "CASL" 0.5, "slnt" -5, "CRSV" 1' }}
      >
        About Us
      </h1>
      <p className="text-lg mb-8 max-w-2xl text-center">
        We are a creative technology company focused on building innovative solutions
        for urban environments.
      </p>
      <Link to="/" className="text-blue-500 hover:text-blue-700">Back to Home</Link>
    </div>
  )
} 