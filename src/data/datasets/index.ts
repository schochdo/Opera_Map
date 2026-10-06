import { AtlasDataset } from '../../types/atlas';
import { OPERA_DATASET } from './operaDataset';
import { UNESCO_DATASET } from './unescoDataset';

export const DATASET_REGISTRY: Record<string, AtlasDataset> = {
  opera: OPERA_DATASET,
  unesco: UNESCO_DATASET,
};

export const AVAILABLE_DATASETS = [
  { id: 'opera', label: '🎭 Opera Houses', count: OPERA_DATASET.items.length },
  { id: 'unesco', label: '🏛️ UNESCO World Heritage', count: UNESCO_DATASET.items.length },
];

export function getDataset(id: string): AtlasDataset {
  return DATASET_REGISTRY[id] || OPERA_DATASET;
}
