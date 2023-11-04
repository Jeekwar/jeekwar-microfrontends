import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'graph-remote',
  exposes: {
    './Module': 'apps/host/graph-remote/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
