"use client";

import { useState, useEffect, useCallback } from 'react';
import { getTerrains, type Terrain, type Region } from '@/services/terrain-catalog';
import { useToast } from '@/hooks/use-toast';

interface UseTerrainsResult {
  terrains: Terrain[];
  regions: Region[];
  loading: boolean;
  error: string | null;
  filters: any;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  setFilters: (filters: any) => void;
  setSort: (sortBy: string, sortOrder: 'asc' | 'desc') => void;
  refetch: () => void;
}

export function useTerrains(): UseTerrainsResult {
  const [terrains, setTerrains] = useState<Terrain[]>([]);
  const [regions, setRegions] = useState<Region[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<any>({});
  const [sortBy, setSortBy] = useState<string>('price');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const { toast } = useToast();

  const fetchTerrains = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // TODO: Fetch actual regions list if available from API or define statically
      const staticRegions: Region[] = [
         { id: 1, name: 'Metropolitana' },
         { id: 2, name: 'Valparaiso' },
         // Add more regions as needed
      ];
       setRegions(staticRegions);

      const data = await getTerrains(filters, sortBy, sortOrder);
      setTerrains(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch terrains';
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      console.error("Failed to fetch terrains:", err);
    } finally {
      setLoading(false);
    }
  }, [filters, sortBy, sortOrder, toast]);

  useEffect(() => {
    fetchTerrains();
  }, [fetchTerrains]); // Depend on the memoized fetchTerrains function

  const handleSetFilters = (newFilters: any) => {
    setFilters(newFilters);
    // Fetching is triggered by the useEffect hook watching `filters`
  };

  const handleSetSort = (newSortBy: string, newSortOrder: 'asc' | 'desc') => {
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
    // Fetching is triggered by the useEffect hook watching `sortBy` and `sortOrder`
  };

  return {
    terrains,
    regions,
    loading,
    error,
    filters,
    sortBy,
    sortOrder,
    setFilters: handleSetFilters,
    setSort: handleSetSort,
    refetch: fetchTerrains, // Expose refetch function
  };
}
