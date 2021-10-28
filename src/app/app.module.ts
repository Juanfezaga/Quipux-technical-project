import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './views/home/home.component';
import { EnterpriseComponent } from './views/enterprise/enterprise.component';
import { ArticlesComponent } from './views/articles/articles.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    EnterpriseComponent,
    ArticlesComponent,
    NavbarComponent,
    ArticleItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
