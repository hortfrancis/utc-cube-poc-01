import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-32">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <p className="text-lg mb-8 max-w-2xl text-center">
        Get in touch with us to learn more about our projects and collaborations.
      </p>
      <Link to="/" className="text-blue-500 hover:text-blue-700">Back to Home</Link>
    </div>
  )
} 