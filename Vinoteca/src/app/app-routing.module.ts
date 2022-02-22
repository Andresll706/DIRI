import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WinesComponent} from "./wines/wines.component";
import { ProductComponent} from "./product/product.component";
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'wines',
    component: WinesComponent,
    pathMatch: 'full'
  },
  {
    path: 'wines/:searchProducts',
    component: WinesComponent,
    pathMatch: 'full'
  },
  {
    path: 'products/:productId',
    component: ProductComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
