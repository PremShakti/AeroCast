import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './pages/contact/contact.component';
import { DaycardComponent } from './components/daycard/daycard.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { SpinerComponent } from './components/spiner/spiner.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    DaycardComponent,
    SpinerComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule, BrowserAnimationsModule,MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
