import { Route } from '@angular/router';
import { FormUserComponent } from './components/form-user/form-user.component';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./remote-entry/entry.module').then((m) => m.RemoteEntryModule),
  },
];
