import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddmemberComponent } from './addmember/addmember.component';
import { EditmemberComponent } from './editmember/editmember.component';
import { MemberlistComponent } from './memberlist/memberlist.component';

@NgModule({
  declarations: [
    AppComponent,
    AddmemberComponent,
    EditmemberComponent,
    MemberlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
