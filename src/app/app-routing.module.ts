import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PitchSpaceComponent } from './pitch-space/pitch-space.component';
import { PlayerSpaceComponent } from './player-space/player-space.component';
import { RoomComponent } from './room/room.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
 
  {path:'', component:PlayerSpaceComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'playerSpace',component:PlayerSpaceComponent,},
  {path:'playerSpace/:roomId', component:RoomComponent},
  {path:'pitchSpace',component:PitchSpaceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
