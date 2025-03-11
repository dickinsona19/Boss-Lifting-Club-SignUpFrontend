
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <section className="bg-neutral-900 text-white rounded-2xl p-12 mb-24 text-center">
    <h2 className="font-serif text-4xl mb-6">Ready to Transform?</h2>
    <p className="text-lg mb-8 max-w-2xl mx-auto">
      Join the elite community of Boss Lifting Club. Limited memberships available for our grand opening.
    </p>
    <Link to="/signup" className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-neutral-100 transition-colors">
      Secure Your Spot
    </Link>
  </section>
  )
}

export default CallToAction