import { Link } from 'react-router-dom'

export default function AugmentedReality() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-32">
      <h1 className="text-4xl font-bold mb-8">Augmented Reality</h1>
      <div className="max-w-2xl text-center space-y-6">
        <p className="text-lg">
          We create immersive Augmented Reality experiences that transform public spaces, engage communities, 
          and bring digital storytelling into the real world — both indoors and outdoors.
        </p>
        <p className="text-md text-gray-600">
          From large-scale seasonal events to enterprise innovation tools, our AR projects blend creative direction 
          with technical precision.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-left">
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Sammy's Christmas Adventure</h3>
            <p>
              A city-wide AR app in Ipswich where families followed Sammy the Reindeer on a magical 
              journey — featuring flying animations, interactive scenes, and festive storytelling.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">BT Manufacturing Showcase</h3>
            <p>
              A storytelling tool for BT's R&D centre, using AR to animate objects and explain manufacturing processes 
              through interactive 3D content — including a robot sheep made from steel wool!
            </p>
          </div>
        </div>
        <p className="text-md text-gray-600 mt-6">
          Interested in how AR can elevate your audience experience?
        </p>
        <Link
          to="/contact"
          className="inline-block mt-2 text-blue-500 hover:text-blue-700 font-medium"
        >
          Contact us to explore possibilities
        </Link>
      </div>
      <Link to="/" className="text-blue-400 hover:text-blue-600 mt-10 text-sm">Back to Home</Link>
    </div>
  )
}
