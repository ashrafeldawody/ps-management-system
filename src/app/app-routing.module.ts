import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DevicesComponent} from "./pages/devices/devices.component";

const routes: Routes = [
  {
    path: 'devices',
    component: DevicesComponent
  },
  {
    path: 'cafe',
    component: DevicesComponent
  },
  {
    path: 'revenue',
    component: DevicesComponent
  },
  {
    path: 'dashboard',
    component: DevicesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
