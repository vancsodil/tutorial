import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentsComponent } from './components/students/students.component';
import { FrameComponent } from './components/frame/frame.component';
import { LoginComponent } from './components/login/login.component';
import { PartnerService } from './services/partner.service';
import { LogoutGuard } from './guard/logout.guard';
import { LoginGuard } from './guard/login.guard';
import { ApiService } from './services/api.service';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { UnitsComponent } from './components/units/units.component';
import { GroupsComponent } from './components/groups/groups.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StudentaddComponent } from './components/students/studentadd/studentadd.component';
import { DomService } from './services/dom.service';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentsComponent,
    FrameComponent,
    LoginComponent,
    UnitsComponent,
    GroupsComponent,
    StudentaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PartnerService, LoginGuard, LogoutGuard, ApiService, DomService, ModalService],
  bootstrap: [AppComponent],
  entryComponents: [StudentaddComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
