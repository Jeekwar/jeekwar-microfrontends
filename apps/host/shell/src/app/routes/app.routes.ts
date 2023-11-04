import { GraphDummyComponent } from '../components/graph-dummy/graph-dummy.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'crud-page',
    loadChildren: () =>
      import('crud-page/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: GraphDummyComponent,
  },
];
