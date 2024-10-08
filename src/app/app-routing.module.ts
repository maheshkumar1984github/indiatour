import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RajasthanComponent } from './rajasthan/rajasthan.component';
import { DelhiComponent } from './delhi/delhi.component';
import { HimachalComponent } from './himachal/himachal.component';
import { UttarakhandComponent } from './uttarakhand/uttarakhand.component';
import { JkComponent } from './jk/jk.component';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { GoaComponent } from './goa/goa.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
{path: 'rajasthan', component: RajasthanComponent},
{path: 'delhi', component: DelhiComponent},
{path: 'himachal', component: HimachalComponent},
{path: 'uttarakhand', component: UttarakhandComponent},
{path: 'jk', component: JkComponent},
{path: 'home', component: HomeComponent},
{path: 'packages', component: PackagesComponent},
{path: 'goa', component: GoaComponent},
{path: 'feedback', component: FeedbackComponent},
{path: '', component: HomeComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
