import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './about-pageweb/navbar/navbar.component';
import { AllUsersComponent } from './about-user/all-users/all-users.component';
import { SaveUserComponent } from './about-user/save-user/save-user.component';
import { ContactComponent } from './about-pageweb/contact/contact.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { DetailsProductComponent } from './about-product/details-product/details-product.component';
import { ListProductsComponent } from './about-product/list-products/list-products.component';
import { SaveProductComponent } from './about-product/save-product/save-product.component';
import { UpdateProductComponent } from './about-product/update-product/update-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatStepperModule } from "@angular/material/stepper";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { authInterceptorProviders } from './interceptors/authorization.interceptor';
import { ProductsWomanComponent } from './about-product/products-woman/products-woman.component';
import { ProductsMenComponent } from './about-product/products-men/products-men.component';
import { ProductsChildrenComponent } from './about-product/products-children/products-children.component';
import { DetailsUserComponent } from './about-user/details-user/details-user.component';
import { CartComponent } from './about-pageweb/cart/cart.component';
import { HomeComponent } from './about-pageweb/home/home.component';
import { ListproductAdminComponent } from './about-product/listproduct-admin/listproduct-admin.component';
import { AboutUsComponent } from './about-pageweb/about-us/about-us.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllUsersComponent,
    SaveUserComponent,
    ContactComponent,
    AuthorizationComponent,
    DetailsProductComponent,
    ListProductsComponent,
    SaveProductComponent,
    UpdateProductComponent,
    ProductsWomanComponent,
    ProductsMenComponent,
    ProductsChildrenComponent,
    DetailsUserComponent,
    CartComponent,
    HomeComponent,
    ListproductAdminComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, /** offre les Gestion de l'état asynchrone , Création dynamique des formulaires, Validation avancée, Suivi des états et des erreurs , Gestion des groupes .... */
    HttpClientModule,  /**  Offre les classes pour consummer une service Web  GET POST DELETE UPDATE.. */
    MatSnackBarModule, BrowserAnimationsModule ,
    MatFormFieldModule,
    MatCardModule,
    MatStepperModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatChipsModule,
    MatGridListModule,
    MatProgressBarModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatRippleModule,  
    MatFormFieldModule,
    MatNativeDateModule,  
    MatSnackBarModule,
    MatSelectModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
