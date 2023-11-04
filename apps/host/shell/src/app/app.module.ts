import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './routes/app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from './service/data/data.service';
import { HttpClientModule } from '@angular/common/http';
import { GraphDummyComponent } from './components/graph-dummy/graph-dummy.component';

@NgModule({
  declarations: [AppComponent, GraphDummyComponent],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
