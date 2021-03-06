import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './modules/material/material.module';
import { CardComponent } from './components/card/card.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { OtherdetailcardComponent } from './components/otherdetailcard/otherdetailcard.component';
import { SubscriptiondetailsComponent } from './components/subscriptiondetails/subscriptiondetails.component';
import { CategoryconversionComponent } from './components/categoryconversion/categoryconversion.component';
import { AdditionalmodalComponent } from './components/additionalmodal/additionalmodal.component';
import { ClubcontactdetailsComponent } from './components/clubcontactdetails/clubcontactdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    TabsComponent,
    OtherdetailcardComponent,
    SubscriptiondetailsComponent,
    CategoryconversionComponent,
    AdditionalmodalComponent,
    ClubcontactdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
