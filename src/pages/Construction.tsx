import { Link } from 'react-router-dom'

export default function Construction() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-32 bg-white text-default">
      <h1 
        className="text-4xl mb-8 text-primary" 
        style={{ fontVariationSettings: '"wght" 800, "CASL" 0.5, "slnt" -5, "CRSV" 1' }}
      >
        Construction
      </h1>
      <div className="max-w-2xl text-center space-y-6">
        <p className="text-lg">
          Through our Construct.AR program, we help design and construction teams harness 
          Augmented and Mixed Reality to improve planning, communication, and on-site decision-making.
        </p>
        <p className="text-md text-default">
          With our roots in architectural practice, we partner with leading platforms like Trimble 
          to deliver real-time insights on active construction sites — from clash detection to asset tracking.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-left">
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 
              className="text-xl mb-2 text-primary" 
              style={{ fontVariationSettings: '"wght" 800, "CASL" 0.5, "slnt" -5, "CRSV" 1' }}
            >
              Construct.AR Deployment
            </h3>
            <p>
              Supporting AEC teams with AR models accessible on iPads and HoloLens devices — enabling layout planning,
              risk mitigation, and remote collaboration between office and site.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 
              className="text-xl mb-2 text-primary" 
              style={{ fontVariationSettings: '"wght" 800, "CASL" 0.5, "slnt" -5, "CRSV" 1' }}
            >
              Live Project Examples
            </h3>
            <p>
              Our tools have been used on major UK builds including Norwich Castle Museum and City College 
              Norwich's Digi-Tech Factory — empowering teams to make smarter, faster decisions.
            </p>
          </div>
        </div>
        <p className="text-md text-default mt-6">
          Ready to bring spatial computing to your build site?
        </p>
        <Link
          to="/contact"
          className="inline-block mt-2 text-offset hover:text-primary font-medium text-2xl"
          style={{ fontVariationSettings: '"wght" 900, "CASL" 1, "slnt" -15, "CRSV" 1' }}
        >
          Talk to us about Construct.AR
        </Link>
      </div>
      <Link to="/" className="text-blue-400 hover:text-blue-600 mt-10 text-sm">Back to Home</Link>
    </div>
  )
}
