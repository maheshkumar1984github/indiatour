import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RajasthanComponent } from './rajasthan/rajasthan.component';
import { DelhiComponent } from './delhi/delhi.component';
import { HimachalComponent } from './himachal/himachal.component';
import { UttarakhandComponent } from './uttarakhand/uttarakhand.component';
import { JkComponent } from './jk/jk.component';

const routes: Routes = [
{path: 'rajasthan', component: RajasthanComponent},
{path: 'delhi', component: DelhiComponent},
{path: 'himachal', component: HimachalComponent},
{path: 'uttarakhand', component: UttarakhandComponent},
{path: 'jk', component: JkComponent},
{path: '', component: DelhiComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
