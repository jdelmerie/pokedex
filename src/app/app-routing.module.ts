import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', component: ListComponent },
  { path: '404', component: NotFoundComponent, },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
