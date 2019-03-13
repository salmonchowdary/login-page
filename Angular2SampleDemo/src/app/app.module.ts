import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PatientService } from './model/patient.service';


import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login.component';
import { DashboardComponent } from './DashBoard/dashboard.component';
import { LogoutComponent } from './Logout/logout.component';


const appRoutes: Routes = [
    { path: 'Login', component: LoginComponent },
    { path: 'Dashboard', component: DashboardComponent },
    { path: 'Dashboard/:id', component: DashboardComponent },
    { path: 'Logout', component: LogoutComponent },
    { path: '', redirectTo: '/Login', pathMatch: 'full' },

    
];


@NgModule({
    imports: [BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [AppComponent,
        LoginComponent,
        DashboardComponent,
        LogoutComponent
    ],
    providers: [PatientService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
