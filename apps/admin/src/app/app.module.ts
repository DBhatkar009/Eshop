import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { InputTextModule } from 'primeng/inputtext';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { SidebarModule } from 'primeng/sidebar';

const UX_MODULE = [BrowserAnimationsModule, CardModule, ButtonModule, ToolbarModule, TableModule, InputTextModule, MatButtonModule, MatInputModule, SidebarModule];

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'categories',
        component: CategoriesListComponent
      },
      {
        path: 'categories/form',
        component: CategoriesFormComponent
      },
    ]
  }
];

@NgModule({
  declarations: [AppComponent, DashboardComponent, ShellComponent, SidebarComponent, CategoriesListComponent, CategoriesFormComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    ...UX_MODULE,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
