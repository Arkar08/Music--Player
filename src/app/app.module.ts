import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SingleLayoutComponent } from './layout/single-layout/single-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { GenresComponent } from './pages/genres/genres.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { RecentPlayComponent } from './pages/recent-play/recent-play.component';
import { RecentCardComponent } from './component/recent-card/recent-card.component';
import { TopPlaylistCardComponent } from './component/top-playlist-card/top-playlist-card.component';
import { TrendingComponent } from './component/trending/trending.component';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleLayoutComponent,
    HomeComponent,
    GenresComponent,
    ArtistsComponent,
    AlbumsComponent,
    FavouritesComponent,
    RecentPlayComponent,
    RecentCardComponent,
    TopPlaylistCardComponent,
    TrendingComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
