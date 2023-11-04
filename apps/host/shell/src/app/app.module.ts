import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './routes/app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from './service/data/data.service';
import { HttpClientModule } from '@angular/common/http';
import { GraphDummyComponent } from './components/graph-dummy/graph-dummy.component';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { ToastrModule, provideToastr } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, GraphDummyComponent],
  imports: [
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [DataService, provideAnimations(), provideToastr()],
  bootstrap: [AppComponent],
})
export class AppModule {}
