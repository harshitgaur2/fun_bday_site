import React from 'react';
import j1 from '../assets/j1.png';
import j2 from '../assets/j2.png';
import j3 from '../assets/j3.png';
import j4 from '../assets/j4.png';
import j6 from '../assets/j6.png';
import j7 from '../assets/j7.png';
import j8 from '../assets/j8.png';
import j9 from '../assets/j9.png';
import j10 from '../assets/j10.png';
import j11 from '../assets/j11.png';

import v1 from '../assets/v1.mp4';


export default function Gallery() {
  const photos = [
    j9,
    j1,
    j2,
    j3,
    j4,
    j6,
    j7,
    j8,
    j10,
    j11
  ];

  return (
    <section className="py-20 px-4 bg-white/80">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">
        Memories Through The Years
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photo, index) => (
          <div key={index} className="group relative aspect-square overflow-hidden rounded-lg shadow-lg">
            <img
              src={photo}
              alt={`Birthday memory ${index + 1}`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}