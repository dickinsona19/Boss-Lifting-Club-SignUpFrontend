
import { Instagram, Facebook } from 'lucide-react';

const MeetTheOwners = () => {
  return (
<section className="mb-24">
          <h2 className="font-serif text-4xl mb-12 text-center">Meet the Owners</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="aspect-square rounded-lg overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883"
                  alt="Owner 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl mb-2">John "Iron" Davidson</h3>
              <p className="text-neutral-600 mb-4">Former Special Forces & Strength Coach</p>
              <div className="flex justify-center gap-4">
                <Instagram className="w-5 h-5" />
                <Facebook className="w-5 h-5" />
              </div>
            </div>
            <div className="text-center">
              <div className="aspect-square rounded-lg overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1567013127542-490d757e51fc"
                  alt="Owner 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl mb-2">Mike "The Beast" Thompson</h3>
              <p className="text-neutral-600 mb-4">Pro Powerlifter & Performance Specialist</p>
              <div className="flex justify-center gap-4">
                <Instagram className="w-5 h-5" />
                <Facebook className="w-5 h-5" />
              </div>
            </div>
          </div>
        </section>
  )
}

export default MeetTheOwners