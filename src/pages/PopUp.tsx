import { Link } from 'react-router-dom'

export default function PopUp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 pt-32">
      <h1 className="text-4xl font-bold mb-8">Pop-up Spaces</h1>
      <div className="max-w-2xl text-center space-y-6">
        <p className="text-lg">
          Our POP.XR platform reimagines high street spaces as immersive, temporary brand experiences — 
          merging physical design with interactive 3D content to reshape retail engagement.
        </p>
        <p className="text-md text-gray-600">
          Designed to support hybrid shopping and community storytelling, POP.XR is the world’s first 
          phygital pop-up showcase — funded by Innovate UK and recognised at Liverpool ONE’s 
          Global Retail Innovation competition.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-left">
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">POP.XR Showcase</h3>
            <p>
              A modular pop-up environment combining touchpoints, interactive screens, and 
              mobile AR — empowering brands to build emotional connections through shared experience.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Retail Storytelling</h3>
            <p>
              Designed for public space activation, POP.XR helps transform underused locations into 
              vibrant hubs of digital storytelling and community connection.
            </p>
          </div>
        </div>
        <p className="text-md text-gray-600 mt-6">
          Ready to activate your space with POP.XR?
        </p>
        <Link
          to="/contact"
          className="inline-block mt-2 text-blue-500 hover:text-blue-700 font-medium"
        >
          Let’s build your phygital experience
        </Link>
      </div>
      <Link to="/" className="text-blue-400 hover:text-blue-600 mt-10 text-sm">Back to Home</Link>
    </div>
  )
}
