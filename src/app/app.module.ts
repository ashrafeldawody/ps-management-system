import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule, FIREBASE_OPTIONS} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {AngularFirestore, AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {FirestoreModule, getFirestore, provideFirestore} from "@angular/fire/firestore";
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {SharedModule} from "primeng/api";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {SplitButtonModule} from "primeng/splitbutton";
import { DevicesComponent } from './pages/devices/devices.component';
import { DeviceCardComponent } from './components/device-card/device-card.component';
import {CardModule} from "primeng/card";
import {StyleClassModule} from "primeng/styleclass";
import {ChipsModule} from "primeng/chips";
import {ChipModule} from "primeng/chip";
import {RatingModule} from "primeng/rating";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DeviceService} from "./services/device.service";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {TableModule} from "primeng/table";
import { FormatSecondsPipe } from './format-seconds.pipe';
@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    DeviceCardComponent,
    FormatSecondsPipe,
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AngularFirestoreModule.enablePersistence({experimentalForceOwningTab: true}),
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    SharedModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    CardModule,
    StyleClassModule,
    ChipsModule,
    ChipModule,
    RatingModule,
    BrowserAnimationsModule,
    OverlayPanelModule,
    TableModule
  ],
  providers: [
    AngularFirestore,
    DeviceService,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
