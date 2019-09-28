import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BirdComponent } from './bird/bird.component';
import { HomeComponent } from './home/home.component';
import { BirdListComponent } from './bird-list/bird-list.component';
import { BirdService } from './bird.service';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'birds', component: BirdListComponent },
  { path: 'addBird', component: BirdComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]; 

@NgModule({
  declarations: [
    AppComponent,
    BirdComponent,
    HomeComponent,
    BirdListComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,  RouterModule.forRoot(appRoutes)
  ],
  providers: [BirdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
