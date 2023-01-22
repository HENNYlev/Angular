import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmallRecpieComponent } from './small-recpie/small-recpie.component';
import { AllRecpieComponent } from './all-recpie/all-recpie.component';
import { TimePipe } from './time.pipe';
import { AddComponent } from './add/add.component';
import { EnteringComponent } from './entering/entering.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DeteilsComponent } from './deteils/deteils.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DatePipe } from './date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SmallRecpieComponent,
    AllRecpieComponent,
    TimePipe,
    AddComponent,
    EnteringComponent,
    LoginComponent,
    HomeComponent,
    DeteilsComponent,
    NavbarComponent,
    FooterComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
