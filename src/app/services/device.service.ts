import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Device} from "../types/device";
import {PlaySession} from "../types/play-session";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private db: AngularFirestore) { }
  getAll() {
    return this.db.collection<Device>("devices").get();
  }
  get(id: string) {
    return this.db.collection<Device>("devices").doc(id).get();
  }
  add(device: Device) {
    return this.db.collection<Device>("devices").add(device);
  }
  update(id: string, device: Device) {
    return this.db.collection<Device>("devices").doc(id).update(device);
  }
  delete(id: string) {
    return this.db.collection<Device>("devices").doc(id).delete();
  }
  addSession(id: string, session: PlaySession) {
    //return this.db.collection<Device>("devices").doc(id).set({play_sessions: [session]}, {merge: true});
  }
}
