"use client";

import { useTerrains } from '@/hooks/use-terrains';
import TerrainCard from '@/components/terrain-card';
import TerrainFilters from '@/components/terrain-filters';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardHeader, CardContent } from "@/components/ui/card"; // Import Card components
import { Mountain } from "lucide-react";

export default function Home() {
  const {
    terrains,
    regions,
    loading,
    error,
    setFilters,
    setSort,
  } = useTerrains();

  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
          <Mountain className="w-8 h-8" />
          Chilean Terrains Catalog
        </h1>
        <p className="text-muted-foreground">
          Find the perfect piece of land in Chile.
        </p>
      </header>

      <TerrainFilters
        regions={regions}
        onFilterChange={setFilters}
        onSortChange={setSort}
      />

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertTitle>Error Loading Data</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {loading && (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {Array.from({ length: 6 }).map((_, index) => (
             <CardSkeleton key={index} />
           ))}
         </div>
      )}

      {!loading && !error && terrains.length === 0 && (
         <div className="text-center text-muted-foreground py-10">
            No terrains found matching your criteria.
         </div>
      )}

      {!loading && !error && terrains.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {terrains.map((terrain) => (
            <TerrainCard key={terrain.id} terrain={terrain} />
          ))}
        </div>
      )}
    </main>
  );
}


// Skeleton loader for the TerrainCard
const CardSkeleton = () => (
  <Card className="w-full shadow-md">
    <CardHeader>
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-1/2 mt-1" />
    </CardHeader>
    <CardContent>
      <div className="space-y-2 mb-4">
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
      <Skeleton className="h-40 w-full" />
       <div className="mt-4">
         <Skeleton className="h-6 w-20 rounded-full" />
       </div>
    </CardContent>
  </Card>
);
