import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'users',
    children: [
      { path: 'list', component: UserListComponent }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
  // { path: 'users' component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
