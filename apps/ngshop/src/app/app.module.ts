import { UiModule } from './../../../../libs/ui/src/lib/ui.module';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicFormComponent } from './pages/basic-form/basic-form.component';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';
import {MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule} from 'mdb-angular-ui-kit/validation';








const routes: Routes = [{path: '', component: HomePageComponent},
{path:'products', component: ProductListComponent},{path: 'basicform', component: BasicFormComponent}]

@NgModule({
  declarations: [AppComponent, HomePageComponent, ProductListComponent, HeaderComponent, FooterComponent, BasicFormComponent],
  imports: [
    BrowserModule,
     RouterModule.forRoot(routes),
     UiModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      MatInputModule,
      MatSelectModule,
      MatButtonModule,
      MatCheckboxModule,
      MatChipsModule,
      MatDatepickerModule,
      MatTabsModule,
      MatNativeDateModule,
      MatIconModule,
      MdbAccordionModule,
      MdbCarouselModule,
      MdbCheckboxModule,
      MdbCollapseModule,
      MdbDropdownModule,
      MdbFormsModule,
      MdbModalModule,
      MdbPopoverModule,
      MdbRadioModule,
      MdbRangeModule,
      MdbRippleModule,
      MdbScrollspyModule,
      MdbTabsModule,
      MdbTooltipModule,
      MdbValidationModule,
      MdbTabsModule,
     

    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
