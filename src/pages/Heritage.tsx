import { Link } from 'react-router-dom'

export default function Heritage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-32">
      <h1 className="text-4xl font-bold mb-8">Heritage</h1>
      <div className="max-w-2xl text-center space-y-6">
        <p className="text-lg">
          We use digital storytelling to reconnect communities with their heritage — blending film, animation, 
          3D reconstruction and sound to reimagine the past for modern audiences.
        </p>
        <p className="text-md text-gray-600">
          Our work brings lost architecture, historical figures, and forgotten stories back to life — creating 
          memorable experiences rooted in deep research and creative craft.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-left">
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Tracing the Footprint</h3>
            <p>
              A commissioned film for the Wolsey 550 anniversary, digitally reconstructing Cardinal Wolsey’s 
              16th-century college in Ipswich. Combining drone footage, actors, animation, and a bespoke soundtrack.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Immersive Heritage Storytelling</h3>
            <p>
              From urban legends to lost landmarks, we collaborate with heritage organisations to deliver 
              powerful, emotive narratives that connect people to place.
            </p>
          </div>
        </div>
        <p className="text-md text-gray-600 mt-6">
          Want to digitally bring your story to life?
        </p>
        <Link
          to="/contact"
          className="inline-block mt-2 text-blue-500 hover:text-blue-700 font-medium"
        >
          Start your heritage project with us
        </Link>
      </div>
      <Link to="/" className="text-blue-400 hover:text-blue-600 mt-10 text-sm">Back to Home</Link>
    </div>
  )
}
