import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplianceOversightComponent } from 'app/compliance-oversight/compliance-oversight.component';
import { ContactComponent } from 'app/contact/contact.component';
import { ContactSuccess } from 'app/contact/contact.success';
import { HomeComponent } from 'app/home/home.component';
import { LegislationComponent } from 'app/legislation/legislation.component';
import { ProcessComponent } from 'app/process/process.component';
import { ProjectComponent } from 'app/project/project.component';
import { NewsComponent } from 'app/news/news.component';
import { MainMapComponent } from 'app/map/main-map/main-map.component';

const routes: Routes = [
  {
    path: 'compliance-oversight',
    component: ComplianceOversightComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'contact_success',
    component: ContactSuccess
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'legislation',
    component: LegislationComponent
  },
  {
    path: 'process',
    component: ProcessComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'map',
    component: MainMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
