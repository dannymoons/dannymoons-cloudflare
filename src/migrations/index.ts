import * as migration_20250929_111647 from './20250929_111647';
import * as migration_20260731_130827 from './20260731_130827';
import * as migration_20260731_130934 from './20260731_130934';

export const migrations = [
  {
    up: migration_20250929_111647.up,
    down: migration_20250929_111647.down,
    name: '20250929_111647',
  },
  {
    up: migration_20260731_130827.up,
    down: migration_20260731_130827.down,
    name: '20260731_130827',
  },
  {
    up: migration_20260731_130934.up,
    down: migration_20260731_130934.down,
    name: '20260731_130934'
  },
];
