"use client";

import type { FC } from 'react';
import Image from 'next/image';

interface MapPlaceholderProps {
  lat: number;
  lng: number;
  zoom?: number;
}

const MapPlaceholder: FC<MapPlaceholderProps> = ({ lat, lng, zoom = 10 }) => {
  // In a real app, you might fetch a static map image or use an interactive map library
  const mapImageUrl = `https://picsum.photos/400/200?random=${lat},${lng}`; // Using picsum as placeholder

  return (
    <div className="mt-2 border rounded-md overflow-hidden">
      <Image
        // In a real app, provide a more meaningful alt text or use a map library
        alt={`Map showing location at ${lat}, ${lng}`}
        src={mapImageUrl}
        width={400}
        height={200}
        className="w-full h-auto object-cover"
        data-ai-hint="map landscape"
      />
       <p className="text-xs text-muted-foreground p-2">Location: {lat.toFixed(4)}, {lng.toFixed(4)}</p>
    </div>
  );
};

export default MapPlaceholder;
