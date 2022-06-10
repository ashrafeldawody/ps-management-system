import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Device} from "../../types/device";
import {DeviceService} from "../../services/device.service";

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  devices: Device[] = [];
  constructor(private deviceService: DeviceService) {
    this.deviceService.getAll().subscribe(r => {
      this.devices = r.docs.map(d => d.data());
    });
  }
  ngOnInit(): void {
  }

}
