import { Link } from 'react-router-dom'

export default function AugmentedReality() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-32 bg-white text-default">
      <h1 
        className="text-4xl mb-8 text-primary" 
        style={{ fontVariationSettings: '"wght" 800, "CASL" 0.5, "slnt" -5, "CRSV" 1' }}
      >
        Augmented Reality
      </h1>
      <div className="max-w-2xl text-center space-y-6">
        <p className="text-lg">
          We create immersive Augmented Reality experiences that transform public spaces, engage communities, 
          and bring digital storytelling into the real world — both indoors and outdoors.
        </p>
        <p className="text-md text-default">
          From large-scale seasonal events to enterprise innovation tools, our AR projects blend creative direction 
          with technical precision.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-left">
          <div className="p-4 border rounded-lg shadow-sm border-gray-600">
            <h3 
              className="text-xl mb-2 text-primary" 
              style={{ fontVariationSettings: '"wght" 800, "CASL" 0.5, "slnt" -5, "CRSV" 1' }}
            >
              Sammy's Christmas Adventure
            </h3>
            <p className="text-default">
              A city-wide AR app in Ipswich where families followed Sammy the Reindeer on a magical 
              journey — featuring flying animations, interactive scenes, and festive storytelling.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm border-gray-600">
            <h3 
              className="text-xl mb-2 text-primary" 
              style={{ fontVariationSettings: '"wght" 800, "CASL" 0.5, "slnt" -5, "CRSV" 1' }}
            >
              BT Manufacturing Showcase
            </h3>
            <p className="text-default">
              A storytelling tool for BT's R&D centre, using AR to animate objects and explain manufacturing processes 
              through interactive 3D content — including a robot sheep made from steel wool!
            </p>
          </div>
        </div>
        <p className="text-md text-default mt-6">
          Interested in how AR can elevate your audience experience?
        </p>
        <Link
          to="/contact"
          className="inline-block mt-2 text-offset hover:text-primary text-2xl"
          style={{ fontVariationSettings: '"wght" 900, "CASL" 1, "slnt" -15, "CRSV" 1' }}
        >
          Contact us to explore possibilities
        </Link>
      </div>
      <Link to="/" className="text-blue-400 hover:text-blue-600 mt-10 text-sm">Back to Home</Link>
    </div>
  )
}
