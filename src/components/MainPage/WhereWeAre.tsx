
import { MapPin, Mail} from 'lucide-react';

const WhereWeAre = () => {
  return (
    <section className="mb-24">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="font-serif text-4xl mb-6">Where We Are</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 mt-1" />
            <div>
              <h3 className="font-medium mb-2">Main Facility</h3>
              <p className="text-neutral-600">3100 South Boulevard, Charlotte NC, 28203</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 mt-1" />
            <div>
              <h3 className="font-medium mb-2">Contact</h3>
              <p className="text-neutral-600">support@bossliftingclub.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="aspect-video rounded-lg overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1574680376345-b2995af0324f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Gym Interior"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
  )
}

export default WhereWeAre