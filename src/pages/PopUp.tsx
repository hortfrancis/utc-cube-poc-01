import { Link } from 'react-router-dom'

export default function PopUp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-32 bg-white text-default">
      <h1 
        className="text-4xl mb-8 text-primary" 
        style={{ fontVariationSettings: '"wght" 800, "CASL" 0.5, "slnt" -5, "CRSV" 1' }}
      >
        Pop-up Spaces
      </h1>
      <div className="max-w-2xl text-center space-y-6">
        <p className="text-lg">
          Our POP.XR platform reimagines high street spaces as immersive, temporary brand experiences — 
          merging physical design with interactive 3D content to reshape retail engagement.
        </p>
        <p className="text-md text-default">
          Designed to support hybrid shopping and community storytelling, POP.XR is the world's first 
          phygital pop-up showcase — funded by Innovate UK and recognised at Liverpool ONE's 
          Global Retail Innovation competition.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-left">
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 
              className="text-xl mb-2 text-primary" 
              style={{ fontVariationSettings: '"wght" 800, "CASL" 0.5, "slnt" -5, "CRSV" 1' }}
            >
              POP.XR Showcase
            </h3>
            <p>
              A modular pop-up environment combining touchpoints, interactive screens, and 
              mobile AR — empowering brands to build emotional connections through shared experience.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 
              className="text-xl mb-2 text-primary" 
              style={{ fontVariationSettings: '"wght" 800, "CASL" 0.5, "slnt" -5, "CRSV" 1' }}
            >
              Retail Storytelling
            </h3>
            <p>
              Designed for public space activation, POP.XR helps transform underused locations into 
              vibrant hubs of digital storytelling and community connection.
            </p>
          </div>
        </div>
        <p className="text-md text-default mt-6">
          Ready to activate your space with POP.XR?
        </p>
        <Link
          to="/contact"
          className="inline-block mt-2 text-offset hover:text-primary font-medium text-2xl"
          style={{ fontVariationSettings: '"wght" 900, "CASL" 1, "slnt" -15, "CRSV" 1' }}
        >
          Let's build your phygital experience
        </Link>
      </div>
      <Link to="/" className="text-blue-400 hover:text-blue-600 mt-10 text-sm">Back to Home</Link>
    </div>
  )
}
