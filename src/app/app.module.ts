import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { SafarisComponent } from './pages/safaris/safaris.component';
import { ExcursionsComponent } from './pages/excursions/excursions.component';
import { SchedaEscursioniComponent } from './components/scheda-escursioni/scheda-escursioni.component';
import { SchedaEscursioniComponentInsideComponent } from './components/scheda-escursioni-component-inside/scheda-escursioni-component-inside.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    SafarisComponent,
    ExcursionsComponent,
    SchedaEscursioniComponent,
    SchedaEscursioniComponentInsideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
