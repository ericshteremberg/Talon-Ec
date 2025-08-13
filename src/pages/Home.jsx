
import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-lg font-mono uppercase tracking-widest text-gray-500 mb-6">
            About
          </h2>
          <p className="text-base leading-7 text-gray-600 mb-12">
          Talon Holdings is a San Diego–based real estate firm specializing in multifamily development and property management. With over 10 years of experience, we deliver end-to-end value through a fully integrated approach focused on performance, efficiency, and community impact.
          </p>
          <Link 
            to={createPageUrl('Properties')} 
            className="inline-flex items-center bg-black text-white px-8 py-3 text-sm font-mono uppercase tracking-wider hover:bg-gray-800 transition-colors"
          >
            Our Portfolio
            <ArrowRight className="ml-3 h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 flex justify-center">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6d99cac5b_IMG_0551.png"
          alt="Talon Holdings Property Rendering"
          className="w-1/2 object-cover"
        />
      </div>
    </div>
  );
}
