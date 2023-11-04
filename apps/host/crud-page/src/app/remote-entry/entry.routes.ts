import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { TablePageComponent } from '../components/table-page/table-page.component';
import { FormUserComponent } from '../components/form-user/form-user.component';

export const remoteRoutes: Route[] = [
  { path: '', component: TablePageComponent },
  {
    path: 'detail',
    component: FormUserComponent,
  },
  {
    path: 'add',
    component: FormUserComponent,
  },
];
