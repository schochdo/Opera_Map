/**
 * Shared GeoJSON Cache for 3D Cartographic Globe
 * 
 * Deduplicates network fetches and JSON.parse operations between
 * GlobeContinents.tsx and CountryBorders.tsx, preventing redundant
 * 5.2 MB payload transfers and main-thread CPU spikes during startup.
 */

let countriesPromise: Promise<any> | null = null;
let lakesPromise: Promise<any> | null = null;
let statesPromise: Promise<any> | null = null;

export function fetchCountriesGeoJSON(): Promise<any> {
  if (!countriesPromise) {
    countriesPromise = fetch('/data/ne_50m_countries.geojson')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .catch((err) => {
        console.warn('Failed to load ne_50m_countries.geojson:', err);
        countriesPromise = null;
        return null;
      });
  }
  return countriesPromise;
}

export function fetchLakesGeoJSON(): Promise<any> {
  if (!lakesPromise) {
    lakesPromise = fetch('/data/ne_50m_lakes.geojson')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .catch((err) => {
        console.warn('Failed to load ne_50m_lakes.geojson:', err);
        lakesPromise = null;
        return null;
      });
  }
  return lakesPromise;
}

export function fetchStatesGeoJSON(): Promise<any> {
  if (!statesPromise) {
    statesPromise = fetch('/data/ne_50m_admin_1_states_provinces_lines.geojson')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .catch((err) => {
        console.warn('Failed to load ne_50m_admin_1_states_provinces_lines.geojson:', err);
        statesPromise = null;
        return null;
      });
  }
  return statesPromise;
}
