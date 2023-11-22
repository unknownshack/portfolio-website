import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AngularIntroductionComponent } from './angular-introduction/angular-introduction.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'angular-introduction', component: AngularIntroductionComponent },
  //{ path: 'component2', component: Component2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
