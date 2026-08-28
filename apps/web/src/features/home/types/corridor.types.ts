export interface DestinationCorridor {
  id: string;
  name: string;
  shortName?: string;
  shortNameBn?: string;
  countryCode: string;
  isoId: string;
  city: string;
  region: string;
  coordinates: [number, number]; // [Longitude, Latitude]
  deployedCount: number;
  activeOpenings: number;
  processingDays: string;
  topSectors: string[];
}

export interface HoveredCountryInfo {
  name: string;
  isoId: string;
  corridor?: DestinationCorridor;
}

export interface CountryPathItem {
  key: string;
  id: string;
  name: string;
  corridor?: DestinationCorridor;
  path: string;
}

export interface DestinationPoint extends DestinationCorridor {
  px: number;
  py: number;
  pathData: string;
}

export interface OriginPoint {
  x: number;
  y: number;
}
