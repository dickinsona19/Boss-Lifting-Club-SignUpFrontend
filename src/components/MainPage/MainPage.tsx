import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import WhoWeAre from './WhoWeAre';
import WhereWeAre from './WhereWeAre';
import Footer from './Footer';

import CallToAction from './CallToAction';
const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-100 pt-16">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          {/* Left Column - Product Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-sm tracking-wider mb-2">CLT_V2</h2>
              {/* <h1 className="text-4xl tracking-wider mb-2 font-bold">Boss Lifting Club</h1> */}
              <h1 className="font-serif text-4xl mb-4">CLT Lifting Club</h1>
              <p className="text-neutral-600">
                Revolutionary gym equipment and community designed for maximum performance and efficiency.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl mb-2">Advanced Materials</h3>
                <p className="text-sm text-neutral-600">
                  Premium-grade equipment built with aerospace-grade materials
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">Community Support</h3>
                <p className="text-sm text-neutral-600">
                  Join a community of like-minded individuals for motivation and support
                </p>
              </div>
            </div>

            {/* Ready to Equip Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-serif text-2xl mb-6">Ready to Train</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-4 border-b border-neutral-100">
                  <div className="flex gap-4">
                    
                    <div className="w-16 h-16 bg-neutral-100 rounded relative">
                      <Check className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black" />
                    </div>
                    <div>
                      <h3 className="font-medium">Special Offer</h3>
                      <p className="text-sm text-neutral-600">Sign up now and enjoy a lifetime discount, plus your first month is on us</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$89.99/M</p>
                    <p className="text-sm text-neutral-600">First month free!</p>
                  </div>
                </div>

                <div className="flex items-center justify-center py-4 border-b border-neutral-100 bg-neutral-200 opacity-50">
                  <div className="text-center">
                    <h3 className="font-medium">COMING SOON</h3>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="flex justify-between text-sm mb-4">
                    <span>Total</span>
                    <span className="font-medium">$89.99/M</span>
                  </div>
                  <button onClick={()=>navigate("/signup")} className="w-full bg-black text-white py-3 rounded hover:bg-neutral-800 transition-colors">
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-square bg-neutral-200 rounded-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Strong Man Lifting"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Feature Callouts */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/4 left-0 transform -translate-x-1/2">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h3 className="font-serif text-sm">Premium Equipment</h3>
                  <p className="text-xs text-neutral-600">Military-grade durability</p>
                </div>
              </div>
              <div className="absolute bottom-1/4 right-0 transform translate-x-1/2">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <h3 className="font-serif text-sm">Community</h3>
                  <p className="text-xs text-neutral-600">Supportive Fitness Network</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Who We Are Section */}
        <WhoWeAre/>

        {/* Where We Are Section */}
        <WhereWeAre/>
        {/* Call to Action */}
        <CallToAction/>

        {/* Meet the Owners */}
        {/* <MeetTheOwners/> */}
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default MainPage