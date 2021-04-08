import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovielistComponent } from './movielist/movielist.component';
import { MovieviewComponent } from './movieview/movieview.component';

const routes: Routes = [
  {
    path: '',
    component: MovielistComponent,
  },
  {
    path: 'movie/:id',
    component: MovieviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
