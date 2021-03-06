import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { NintendoComponent } from './views/nintendo/nintendo.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { PlaystationComponent } from './views/playstation/playstation.component';
import { XboxComponent } from './views/xbox/xbox.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "playstation", component: PlaystationComponent},
  {path: "xbox", component: XboxComponent},
  {path: "nintendo", component: NintendoComponent},
  {path: "login", component: LoginComponent},
  {path: "404", component: NotFoundComponent},
  {path: "**", redirectTo: "404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
