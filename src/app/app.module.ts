import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BannerComponent } from './shared/components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    NavComponent,
    FooterComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
