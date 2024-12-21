import React from 'react';
import { Quote } from 'lucide-react';

export default function Quotes() {
  const quotes = [
    {
      text: "Anushri's smile lights up any room she walks into. Her kindness and creativity inspire us all.",
      author: "- Her Baby Boy"
    },
    {
      text: "A beautiful soul who brings joy and laughter wherever she goes. Happy 26th!",
      author: "- College Squad"
    },
    {
      text: "Here's to the amazing memories we've shared and the countless more to come!",
      author: "- The Office Crew"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">
          Words About Birthday Girl
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className="w-8 h-8 text-pink-400 mb-4" />
              <p className="text-gray-700 italic mb-4">{quote.text}</p>
              <p className="text-purple-600 font-medium">{quote.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}