import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ListProductsComponent } from './about-product/list-products/list-products.component';
import { AllUsersComponent } from './about-user/all-users/all-users.component';
import { ContactComponent } from './about-pageweb/contact/contact.component';
import { SaveProductComponent } from './about-product/save-product/save-product.component';
import { authGuard } from './guards/auth.guard';
import { NavbarComponent } from './about-pageweb/navbar/navbar.component';
import { ProductsWomanComponent } from './about-product/products-woman/products-woman.component';
import { ProductsChildrenComponent } from './about-product/products-children/products-children.component';
import { ProductsMenComponent } from './about-product/products-men/products-men.component';
import { SaveUserComponent } from './about-user/save-user/save-user.component';
import { DetailsUserComponent } from './about-user/details-user/details-user.component';
import { DetailsProductComponent } from './about-product/details-product/details-product.component';
import { CartComponent } from './about-pageweb/cart/cart.component';
import { HomeComponent } from './about-pageweb/home/home.component';
import { AdminGuard } from './guards/admin.guard';
import { ListproductAdminComponent } from './about-product/listproduct-admin/listproduct-admin.component';
import { UpdateProductComponent } from './about-product/update-product/update-product.component';
import { AboutUsComponent } from './about-pageweb/about-us/about-us.component';
import { codeActivateComponent } from './about-user/codeActivate/codeActivatereset-password.component';
import { ResetPasswordComponent } from './about-user/reset-password/reset-password.component';



const routes: Routes = [
  { path : '', redirectTo: 'login', pathMatch: 'full'  },
  { path : 'login'         , component : AuthorizationComponent},
  { path : 'listproducts'  ,component: ListProductsComponent,canActivate:[authGuard]},
  { path : 'listusers'     ,component : AllUsersComponent,canActivate:[authGuard,AdminGuard]},
  { path : 'contact'       ,component : ContactComponent,canActivate:[authGuard]},
  { path : 'save-product'  ,component:SaveProductComponent,canActivate:[authGuard,AdminGuard]},
  { path : 'navbar'        , component: NavbarComponent ,canActivate:[authGuard]},
  { path : 'products-women',component:ProductsWomanComponent,canActivate:[authGuard]},
  { path : 'products-children',component:  ProductsChildrenComponent,canActivate:[authGuard]},
  { path : 'products-men'  ,component:ProductsMenComponent,canActivate:[authGuard]},
  { path : 'save-user'     , component: SaveUserComponent},
  { path : 'details-user/:id' , component: DetailsUserComponent,canActivate:[authGuard]},
  { path : 'details-product/:id',component:DetailsProductComponent,canActivate:[authGuard]},
  { path : 'cart'          , component: CartComponent,canActivate:[authGuard]},
  { path : 'home'          ,component:HomeComponent,canActivate:[authGuard]},
  { path : 'listproductsAdmin' , component : ListproductAdminComponent,canActivate:[authGuard,AdminGuard]},
  { path : 'updateProduct/:id' , component:UpdateProductComponent,canActivate:[authGuard,AdminGuard]},
  { path : 'about-us',component:AboutUsComponent,canActivate:[authGuard]},
  { path : 'codeActivate', component:codeActivateComponent},
  { path : 'resetPassword',component:ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Location]
})
export class AppRoutingModule { }
