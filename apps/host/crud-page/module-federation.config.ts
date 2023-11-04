import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'crud-page',
  exposes: {
    './Module': 'apps/host/crud-page/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
