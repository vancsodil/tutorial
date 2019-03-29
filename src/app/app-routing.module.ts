import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentsComponent } from './components/students/students.component';
import { LoginComponent } from './components/login/login.component';
import { FrameComponent } from './components/frame/frame.component';
import { LoginGuard } from './guard/login.guard';
import { LogoutGuard } from './guard/logout.guard';
import { UnitsComponent } from './components/units/units.component';
import { GroupsComponent } from './components/groups/groups.component';

const routes: Routes = [
  { path: "login", component: LoginComponent, canActivate: [LogoutGuard] },
  { path: "", component: FrameComponent, canActivate: [LoginGuard], children: [
    { path: "", component: DashboardComponent },
    { path: "students", component: StudentsComponent },
    { path: "units", component: UnitsComponent},
    { path: "groups", component: GroupsComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
