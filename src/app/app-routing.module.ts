import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleLayoutComponent } from './layout/single-layout/single-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { GenresComponent } from './pages/genres/genres.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { RecentPlayComponent } from './pages/recent-play/recent-play.component';

const routes: Routes = [
  {
    path:'',
    component:SingleLayoutComponent,
    children:[
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'genres',
        component:GenresComponent
      },
      {
        path:'artists',
        component:ArtistsComponent
      },
      {
        path:'albums',
        component:AlbumsComponent
      },
      {
        path:'favourites',
        component:FavouritesComponent
      },
      {
        path:'recently-plays',
        component:RecentPlayComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
