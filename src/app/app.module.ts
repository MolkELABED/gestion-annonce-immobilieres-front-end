import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditAnnonceComponent } from './edit-annonce/edit-annonce.component';
import { AddAnnonceComponent } from './add-annonce/add-annonce.component';
import { DetailAnnonceComponent } from './detail-annonce/detail-annonce.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { AnnonceComponent } from './annonce/annonce.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EditAnnonceComponent,
    AddAnnonceComponent,
    DetailAnnonceComponent,
    NavBarComponent,
    AnnonceComponent,
    DetailAnnonceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
