import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './views/articles/articles.component';
import { EnterpriseComponent } from './views/enterprise/enterprise.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "empresas/nombre-empresa", component: EnterpriseComponent
  },
  {
    path: "articulos/articulo", component: ArticlesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
