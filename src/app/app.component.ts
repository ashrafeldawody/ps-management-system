import { Component } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireList, AngularFireObject} from "@angular/fire/compat/database";
import * as moment from "moment";
import {enableIndexedDbPersistence} from "@angular/fire/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pscafeApp';

  constructor(private db: AngularFirestore){
    moment.locale('ar-sa');
    db.persistenceEnabled$.subscribe(r => {
      console.log(r);
    })

    // this.db.collection<any>("devices").doc("3").set({
    //   name: "جهاز 3",
    //   type: "بلايستيشن 4",
    //   price: 10,
    //   multi_price: 15,
    //   play_sessions: []
    // }).then(r => console.log('success'));

  }
}
