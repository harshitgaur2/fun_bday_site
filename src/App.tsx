import React from 'react';
import { MapPin, Gift, Video, Heart } from 'lucide-react';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Quotes from './components/Quotes';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-purple-100 to-pink-100">
      <Banner />
      <Gallery />
      <Quotes />

      {/* Video Section */}
      <section className="py-20 px-4 bg-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-8 flex items-center justify-center gap-2">
            <Video className="w-8 h-8" />
            Last Year's Highlights
          </h2>
          <div className="aspect-video rounded-lg shadow-lg overflow-hidden bg-black">
          <iframe src="https://player.vimeo.com/video/1041424070?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="720" height="1280" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="v2"></iframe>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 bg-white/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-12 flex items-center justify-center gap-2">
            <MapPin className="w-8 h-8" />
            Join The Celebration
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-pink-600 mb-4">Plum Coffee and Cocktails</h3>
            <p className="text-gray-700 mb-4">1st Floor, N Block, 86, Connaught Cir, Block N, Connaught Place N Block, 86, Connaught Cir, Connaught Place, New Delhi, Delhi 110001</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.990300530489!2d77.2196259!3d28.630052799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd36c4e4bfc1%3A0x91d67afdbab09470!2sPlum%20Coffee%20and%20Cocktails!5e0!3m2!1sen!2sin!4v1734814947289!5m2!1sen!2sin" width="600" height="450" loading="lazy"></iframe>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-pink-100 to-purple-100">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-8 flex items-center justify-center gap-2">
            <Gift className="w-8 h-8" />
            RSVP
          </h2>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
            Count Me In!
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-purple-700">
        <div className="flex items-center justify-center gap-2">
          <Heart className="w-4 h-4" />
          <p>Can't wait to celebrate with you!</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
