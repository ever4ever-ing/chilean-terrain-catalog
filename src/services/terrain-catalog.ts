/**
 * Represents a geographical region in Chile.
 */
export interface Region {
  /**
   * The name of the region.
   */
  name: string;
  /**
   * The unique identifier for the region.
   */
  id: number;
}

/**
 * Represents a terrain with its attributes.
 */
export interface Terrain {
  /**
   * The unique identifier for the terrain.
   */
  id: number;
  /**
   * The region where the terrain is located.
   */
  region: Region;
  /**
   * The area of the terrain in square meters.
   */
  area: number;
  /**
   * The price of the terrain in USD.
   */
  price: number;
    /**
   * The latitude of the terrain.
   */
  lat: number;
  /**
   * The longitude of the terrain.
   */
  lng: number;
  /**
   * Other attributes of the terrain.
   */
  [key: string]: any;
}

/**
 * Asynchronously retrieves a list of terrains.
 *
 * @param filters An object containing filters to apply to the terrain list.
 * @param sortBy The attribute to sort the terrains by.
 * @param sortOrder The order to sort the terrains in (asc or desc).
 * @returns A promise that resolves to an array of Terrain objects.
 */
export async function getTerrains(
  filters: any,
  sortBy: string,
  sortOrder: 'asc' | 'desc'
): Promise<Terrain[]> {
  // TODO: Implement this by calling an API.

  return [
    {
      id: 1,
      region: { id: 1, name: 'Metropolitana' },
      area: 1000,
      price: 100000,
      lat: -33.4489,
      lng: -70.6693,
    },
    {
      id: 2,
      region: { id: 2, name: 'Valparaiso' },
      area: 2000,
      price: 200000,
      lat: -33.0456,
      lng: -71.6197,
    },
  ];
}
