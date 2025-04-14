import { Link } from 'react-router-dom'

export default function SmartCities() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-32 bg-white text-default">
      <h1 
        className="text-4xl mb-8 text-primary" 
        style={{ fontVariationSettings: '"wght" 800, "CASL" 0.5, "slnt" -5, "CRSV" 1' }}
      >
        Smart Cities
      </h1>
      <div className="max-w-2xl text-center space-y-6">
        <p className="text-lg">
          Our Urban AR platform helps city stakeholders engage communities with interactive, 
          real-time data overlays — making complex urban systems visible, tangible, and inspiring.
        </p>
        <p className="text-md text-default">
          Whether installed on physical scale models or experienced through mobile devices, 
          our Smart City tools fuse digital storytelling with civic innovation — connecting people, place, and policy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-left">
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 
              className="text-xl mb-2 text-primary" 
              style={{ fontVariationSettings: '"wght" 800, "CASL" 0.5, "slnt" -5, "CRSV" 1' }}
            >
              Urban AR for BT
            </h3>
            <p>
              A live engagement tool deployed on a model of London at BT's Adastral Park, showcasing IoT 
              solutions, sustainability initiatives, and data layers to VIPs and visitors.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 
              className="text-xl mb-2 text-primary" 
              style={{ fontVariationSettings: '"wght" 800, "CASL" 0.5, "slnt" -5, "CRSV" 1' }}
            >
              Civic Experience Design
            </h3>
            <p>
              From transport networks to environmental data, we design modular AR templates that can be 
              customized for any city to enhance public understanding and stakeholder dialogue.
            </p>
          </div>
        </div>
        <p className="text-md text-default mt-6">
          Want to bring your city to life through Urban AR?
        </p>
        <Link
          to="/contact"
          className="inline-block mt-2 text-offset hover:text-primary font-medium text-2xl"
          style={{ fontVariationSettings: '"wght" 900, "CASL" 1, "slnt" -15, "CRSV" 1' }}
        >
          Let's talk smart city engagement
        </Link>
      </div>
      <Link to="/" className="text-blue-400 hover:text-blue-600 mt-10 text-sm">Back to Home</Link>
    </div>
  )
}
