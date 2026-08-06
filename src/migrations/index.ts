import * as migration_20260803_113405 from './20260803_113405';
import * as migration_20260805_092629 from './20260805_092629';
import * as migration_20260805_095350 from './20260805_095350';
import * as migration_20260805_101329 from './20260805_101329';
import * as migration_20260805_141108 from './20260805_141108';

export const migrations = [
  {
    up: migration_20260803_113405.up,
    down: migration_20260803_113405.down,
    name: '20260803_113405',
  },
  {
    up: migration_20260805_092629.up,
    down: migration_20260805_092629.down,
    name: '20260805_092629',
  },
  {
    up: migration_20260805_095350.up,
    down: migration_20260805_095350.down,
    name: '20260805_095350',
  },
  {
    up: migration_20260805_101329.up,
    down: migration_20260805_101329.down,
    name: '20260805_101329',
  },
  {
    up: migration_20260805_141108.up,
    down: migration_20260805_141108.down,
    name: '20260805_141108'
  },
];
