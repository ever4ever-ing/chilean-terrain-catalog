"use client";

import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Maximize, DollarSign } from "lucide-react";
import type { Terrain } from '@/services/terrain-catalog';
import MapPlaceholder from './map-placeholder';

interface TerrainCardProps {
  terrain: Terrain;
}

const TerrainCard: FC<TerrainCardProps> = ({ terrain }) => {
  return (
    <Card className="w-full shadow-md hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="text-lg">Terrain ID: {terrain.id}</CardTitle>
        <CardDescription className="flex items-center gap-1 pt-1">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          {terrain.region.name}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2">
            <Maximize className="w-4 h-4 text-primary" />
            <span className="text-sm">Area: {terrain.area.toLocaleString()} m²</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-primary" />
            <span className="text-sm">Price: ${terrain.price.toLocaleString()}</span>
          </div>
          {/* Display other attributes dynamically if needed */}
          {Object.entries(terrain)
            .filter(([key]) => !['id', 'region', 'area', 'price', 'lat', 'lng'].includes(key))
            .map(([key, value]) => (
              <div key={key} className="flex items-center gap-2">
                 {/* Add generic icon or specific icons based on key */}
                <span className="text-sm capitalize">{key}: {String(value)}</span>
              </div>
            ))}
        </div>
        <MapPlaceholder lat={terrain.lat} lng={terrain.lng} />
        <div className="mt-4">
          <Badge variant="secondary">{terrain.region.name}</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default TerrainCard;
