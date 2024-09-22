import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {RouterModule} from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatLabel} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule,MatTabGroup} from '@angular/material/tabs';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MenuComponent } from './menu/menu.component';
import {RajasthanComponent} from './rajasthan/rajasthan.component'
import {DelhiComponent} from './delhi/delhi.component'

import {MatGridListModule} from '@angular/material/grid-list';
import { ReadmoreComponent } from './readmore/readmore.component';
import { AdvComponent } from './adv/adv.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HimachalComponent } from './himachal/himachal.component';
import { UttarakhandComponent } from './uttarakhand/uttarakhand.component';
import { JkComponent } from './jk/jk.component';
import { RegistrationComponent } from './registration/registration.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';

import { GALLERY_CONFIG, GalleryConfig } from 'ng-gallery';
import { GalleryModule, GalleryItem, ImageItem } from 'ng-gallery';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoaComponent } from './goa/goa.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FeedbackComponent } from './feedback/feedback.component'
import { HttpClientModule } from '@angular/common/http';
import { HotelsComponent } from './hotels/hotels.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RajasthanComponent,
    DelhiComponent,
    ReadmoreComponent,
    AdvComponent,
    HimachalComponent,
    UttarakhandComponent,
    JkComponent,
    RegistrationComponent,
    FooterComponent,
    HomeComponent,
    PackagesComponent,
    GoaComponent,
    FeedbackComponent,
    HotelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDividerModule,
    MatLabel,
    MatTooltipModule,
    MatSidenavModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatGridListModule,
    SlickCarouselModule,
    MatSelectModule,
    MatTabsModule,
    MatTabGroup,
    GalleryModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatStepperModule,
    MatButtonToggleModule,
    MatRadioModule
  ],

  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    {
      provide: GALLERY_CONFIG,
      useValue: {
        autoHeight: true,
        imageSize: 'cover'
      } as GalleryConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

