"use client";

import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Filter, ArrowDownUp } from "lucide-react";
import type { Region } from '@/services/terrain-catalog';

interface TerrainFiltersProps {
  regions: Region[];
  onFilterChange: (filters: any) => void;
  onSortChange: (sortBy: string, sortOrder: 'asc' | 'desc') => void;
}

const TerrainFilters: FC<TerrainFiltersProps> = ({ regions, onFilterChange, onSortChange }) => {
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [minArea, setMinArea] = useState<string>('');
  const [maxArea, setMaxArea] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('price');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Avoid hydration mismatch for default sort order which might differ
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);


  const handleApplyFilters = () => {
    const filters = {
      minPrice: minPrice ? parseFloat(minPrice) : undefined,
      maxPrice: maxPrice ? parseFloat(maxPrice) : undefined,
      minArea: minArea ? parseFloat(minArea) : undefined,
      maxArea: maxArea ? parseFloat(maxArea) : undefined,
      regionId: selectedRegion ? parseInt(selectedRegion) : undefined,
    };
    // Remove undefined values
    const activeFilters = Object.fromEntries(Object.entries(filters).filter(([_, v]) => v !== undefined));
    onFilterChange(activeFilters);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    if (isClient) {
      onSortChange(value, sortOrder);
    }
  };

  const handleOrderChange = (value: 'asc' | 'desc') => {
     setSortOrder(value);
     if (isClient) {
       onSortChange(sortBy, value);
     }
  };

  useEffect(() => {
     // Apply sort initially on client mount
     if (isClient) {
        onSortChange(sortBy, sortOrder);
     }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClient]);


  return (
    <Card className="mb-6 shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-primary" />
          Filter & Sort Terrains
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Region Filter */}
          <div>
            <Label htmlFor="region">Region</Label>
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger id="region">
                <SelectValue placeholder="Select Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Regions</SelectItem>
                {regions.map((region) => (
                  <SelectItem key={region.id} value={String(region.id)}>
                    {region.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price Filters */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="min-price">Min Price ($)</Label>
              <Input
                id="min-price"
                type="number"
                placeholder="e.g., 50000"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="max-price">Max Price ($)</Label>
              <Input
                id="max-price"
                type="number"
                placeholder="e.g., 300000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>

          {/* Area Filters */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="min-area">Min Area (m²)</Label>
              <Input
                id="min-area"
                type="number"
                placeholder="e.g., 500"
                value={minArea}
                onChange={(e) => setMinArea(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="max-area">Max Area (m²)</Label>
              <Input
                id="max-area"
                type="number"
                placeholder="e.g., 5000"
                value={maxArea}
                onChange={(e) => setMaxArea(e.target.value)}
              />
            </div>
          </div>

          {/* Sorting Options */}
          <div className="grid grid-cols-2 gap-2">
             <div>
                <Label htmlFor="sort-by">Sort By</Label>
                <Select value={isClient ? sortBy : 'price'} onValueChange={handleSortChange} disabled={!isClient}>
                  <SelectTrigger id="sort-by">
                    <SelectValue placeholder="Select Attribute" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price">Price</SelectItem>
                    <SelectItem value="area">Area</SelectItem>
                    <SelectItem value="region">Region</SelectItem>
                     {/* Add other sortable attributes if needed */}
                  </SelectContent>
                </Select>
             </div>
             <div>
                <Label htmlFor="sort-order">Order</Label>
                <Select value={isClient ? sortOrder : 'asc'} onValueChange={(value: 'asc' | 'desc') => handleOrderChange(value)} disabled={!isClient}>
                  <SelectTrigger id="sort-order">
                     <SelectValue placeholder="Select Order" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value="asc">Ascending</SelectItem>
                     <SelectItem value="desc">Descending</SelectItem>
                  </SelectContent>
                </Select>
             </div>
          </div>

        </div>
        <Button onClick={handleApplyFilters} className="w-full md:w-auto">
          Apply Filters
        </Button>
      </CardContent>
    </Card>
  );
};

export default TerrainFilters;
