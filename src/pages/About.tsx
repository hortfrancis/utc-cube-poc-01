import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-32">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <p className="text-lg mb-8 max-w-2xl text-center">
        We are a creative technology company focused on building innovative solutions
        for urban environments.
      </p>
      <Link to="/" className="text-blue-500 hover:text-blue-700">Back to Home</Link>
    </div>
  )
} 