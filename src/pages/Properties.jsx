import React, { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function PropertyCard({ property }) {
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <img
          src={property.main_image_url}
          alt={property.name}
          className="w-full h-80 object-cover"
        />
      </div>
      <h3 className="mt-2 text-xs font-mono text-gray-800 text-center">
        {property.name}
      </h3>
    </div>
  );
}

export default function PropertiesPage() {
  // Sample data for 9 panels
  const sampleProperties = [
    { id: 1, name: "Normal Heights", main_image_url: "https://ik.imagekit.io/zj1hqcf2l/Madison.png?updatedAt=1753318637012" },
    { id: 2, name: "La Jolla", main_image_url: "https://ik.imagekit.io/zj1hqcf2l/robinhood.png?" },
    { id: 3, name: "Golden Hill", main_image_url: "https://ik.imagekit.io/zj1hqcf2l/IMG_0017%20(1).jpg?" },
    { id: 4, name: "Bay Park", main_image_url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6d99cac5b_IMG_0551.png" },
    
    { id: 6, name: "Miramar", main_image_url: "https://ik.imagekit.io/zj1hqcf2l/MAKETORY0720-183_1_750x500.jpg?" },
    { id: 7, name: "Bankers Hill", main_image_url: "https://ik.imagekit.io/zj1hqcf2l/bankers%20hill.jpeg?updatedAt=1755042945178" },
    { id: 8, name: "Grant Hill (Coming soon) ", main_image_url: "https://ik.imagekit.io/zj1hqcf2l/Screenshot%202025-07-23%20at%202.38.13%E2%80%AFPM%20(1).png?" },
    { id: 9, name: "Grant Hill (Coming soon)", main_image_url: "https://ik.imagekit.io/zj1hqcf2l/Screenshot%202025-07-23%20at%203.13.43%E2%80%AFPM.png?" },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {sampleProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}
