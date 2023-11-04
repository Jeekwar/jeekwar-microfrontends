import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { TablePageComponent } from '../components/table-page/table-page.component';
import { DataService } from '../services/data-table/data-table.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormUserComponent } from '../components/form-user/form-user.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../app.state';
import { ToastrModule, provideToastr } from 'ngx-toastr';

@NgModule({
  declarations: [RemoteEntryComponent, FormUserComponent],
  imports: [
    ToastrModule.forRoot(), // ToastrModule added
    ReactiveFormsModule,
    TablePageComponent,
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(remoteRoutes),
    StoreModule.forRoot(reducers),
  ],
  providers: [DataService],
})
export class RemoteEntryModule {}
