import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [

    { path: '' , component: HomeComponent},
    {path: 'contacto' , component: ContactoComponent},
    {path: 'projects' , component: ProjectsComponent},
    {path: 'certifiaciones', component: CertificationsComponent},
    {path: 'About', component: AboutComponent},
    {path: '**', redirectTo: ''} 
];
