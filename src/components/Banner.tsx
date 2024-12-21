import React from 'react';
import { PartyPopper, Clock } from 'lucide-react';
import Confetti from './Confetti';
import j9 from '..assets/j9.jpg';

export default function Banner() {
  return (
    <header className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
      <Confetti />
      <div className="relative z-10 space-y-8">
        <div className="relative">
          <PartyPopper className="w-20 h-20 mx-auto text-pink-500 animate-bounce" />
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-ping" />
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-bounce" />
        </div>
        <div className="space-y-4">
          <p className="text-2xl text-purple-600 animate-fade-in">You're invited to</p>
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 animate-gradient font-serif">
            Anushri's 26th
          </h1>
        </div>
        <p className="text-2xl md:text-3xl text-purple-700 font-light animate-fade-in-up">
          Join us for a night of celebration!
        </p>
        <div className="flex items-center justify-center space-x-4 text-pink-700 animate-fade-in-up delay-300">
          <Clock className="w-6 h-6" />
          <p className="text-xl">December 26, 2024 • 6:00 PM</p>
        </div>
        <div className="flex gap-4 justify-center animate-fade-in-up delay-500">
          <span className="px-6 py-2 bg-pink-100 rounded-full text-pink-600 animate-float">✨ Music</span>
          <span className="px-6 py-2 bg-purple-100 rounded-full text-purple-600 animate-float delay-100">🎂 Cake</span>
          <span className="px-6 py-2 bg-pink-100 rounded-full text-pink-600 animate-float delay-200">🎉 Fun</span>
        </div>
      </div>
    </header>
  );
}