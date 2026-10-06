import { AtlasItem, AtlasDataset } from '../types/atlas';

/**
 * Universal Data Ingestion & Transformation Engine for 3D Globe Atlas
 * 
 * Supports:
 * 1. Exporting Atlas datasets to standard GeoJSON FeatureCollection format.
 * 2. Ingesting arbitrary GeoJSON Point features with properties into AtlasItem[].
 * 3. Ingesting official UNESCO World Heritage Open Data (JSON / CSV dumps).
 * 4. Normalizing third-party APIs (e.g. Overpass / OpenStreetMap, Wikidata, National Parks).
 */

export interface GeoJSONPointFeature {
  type: 'Feature';
  geometry: {
    type: 'Point';
    coordinates: [number, number]; // [longitude, latitude] in WGS84
  };
  properties: Record<string, any>;
}

export interface GeoJSONFeatureCollection {
  type: 'FeatureCollection';
  features: GeoJSONPointFeature[];
}

/**
 * Converts AtlasItems into standard GeoJSON Point FeatureCollection
 */
export function exportToGeoJSON(items: AtlasItem[]): GeoJSONFeatureCollection {
  return {
    type: 'FeatureCollection',
    features: items.map((item) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [item.longitude, item.latitude],
      },
      properties: {
        id: item.id,
        name: item.name,
        city: item.city,
        country: item.country,
        region: item.region,
        tier: item.tier,
        websiteUrl: item.websiteUrl,
        description: item.description,
        yearLabel: item.yearLabel,
        yearValue: item.yearValue,
        categoryLabel: item.categoryLabel,
        categoryValue: item.categoryValue,
        statLabel: item.statLabel,
        statValue: item.statValue,
        historicSignificance: item.historicSignificance,
        highlights: item.highlights,
      },
    })),
  };
}

/**
 * Ingests GeoJSON FeatureCollection into typed AtlasItem[]
 */
export function importFromGeoJSON(
  geoJson: GeoJSONFeatureCollection,
  defaults?: Partial<AtlasItem>
): AtlasItem[] {
  return geoJson.features
    .filter((f) => f.geometry && f.geometry.type === 'Point' && Array.isArray(f.geometry.coordinates))
    .map((feature, idx) => {
      const [lng, lat] = feature.geometry.coordinates;
      const props = feature.properties || {};

      return {
        id: props.id || props.id_no || `item-${idx}`,
        name: props.name || props.site || props.title || 'Untitled Landmark',
        city: props.city || props.location || '',
        country: props.country || props.states_name_en || '',
        region: props.region || 'Europe',
        latitude: lat,
        longitude: lng,
        tier: (props.tier as 1 | 2 | 3 | 4) || defaults?.tier || 2,
        websiteUrl: props.websiteUrl || props.http_url || props.url || '',
        description: props.description || props.short_description_en || '',
        yearLabel: props.yearLabel || defaults?.yearLabel || 'Inscribed',
        yearValue: props.yearValue || props.date_inscribed || props.inauguratedYear,
        categoryLabel: props.categoryLabel || defaults?.categoryLabel || 'Category',
        categoryValue: props.categoryValue || props.category || '',
        statLabel: props.statLabel || defaults?.statLabel,
        statValue: props.statValue || props.area_hectares,
        historicSignificance: props.historicSignificance || props.justification,
        highlights: props.highlights || [],
      };
    });
}

/**
 * UNESCO Open Data Ingestion Helper
 * Parses raw JSON exported directly from UNESCO World Heritage Centre (whc.unesco.org)
 */
export function ingestUnescoRawData(unescoRecords: any[]): AtlasItem[] {
  return unescoRecords.map((rec) => {
    // Map UNESCO regions to AtlasRegion
    let region: AtlasItem['region'] = 'Europe';
    const rawRegion = (rec.region_en || '').toLowerCase();
    if (rawRegion.includes('latin') || rawRegion.includes('america')) region = 'Americas';
    if (rawRegion.includes('asia') || rawRegion.includes('pacific')) region = 'Asia-Pacific';
    if (rawRegion.includes('arab') || rawRegion.includes('africa')) region = 'Middle East & Africa';

    // Tier heuristic based on criteria / iconic status
    let tier: 1 | 2 | 3 | 4 = 2;
    if (rec.category === 'Natural') tier = 3;
    if (rec.danger === '1') tier = 4;

    return {
      id: `unesco-${rec.id_no || rec.id}`,
      name: rec.site || rec.name_en || 'UNESCO Site',
      city: rec.states_name_en || '',
      country: rec.states_name_en || '',
      region,
      latitude: parseFloat(rec.latitude) || 0,
      longitude: parseFloat(rec.longitude) || 0,
      tier,
      websiteUrl: rec.http_url || `https://whc.unesco.org/en/list/${rec.id_no}`,
      description: rec.short_description_en || '',
      yearLabel: 'Inscribed',
      yearValue: parseInt(rec.date_inscribed, 10) || undefined,
      categoryLabel: 'Category',
      categoryValue: `${rec.category || 'Cultural'} Site (${rec.criteria_txt || ''})`,
      statLabel: 'Area',
      statValue: rec.area_hectares ? `${rec.area_hectares} ha` : undefined,
      historicSignificance: rec.justification || rec.secondary_dates,
    };
  });
}
