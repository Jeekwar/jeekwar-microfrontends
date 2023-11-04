import { GraphDummyComponent } from '../components/graph-dummy/graph-dummy.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'graph-remote',
    loadChildren: () =>
      import('graph-remote/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: GraphDummyComponent,
  },
];
