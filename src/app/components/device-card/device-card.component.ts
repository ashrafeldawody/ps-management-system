import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PlaySession} from "../../types/play-session";
import * as moment from "moment/moment";
@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.css']
})
export class DeviceCardComponent implements OnInit,OnChanges {
  @Input() device: any;
  singleTimeList: any[];
  multiTimeList: any[];
  timer: any;
  remainingTime: number = 0;
  play_cost: number = 0;
  constructor() {
    this.singleTimeList = [
      {
        label: '00:30', icon: 'pi pi-clock', command: () => {
          this.startPlaySession(30)
        }
      },
      {
        label: '01:00', icon: 'pi pi-clock', command: () => {
          this.startPlaySession(60)
        }
      },
      {separator: true},
      {
        label: '01:30', icon: 'pi pi-clock', command: () => {
          this.startPlaySession(90)
        }
      },
      {
        label: '02:00', icon: 'pi pi-clock', command: () => {
          this.startPlaySession(120)
        }
      },
      {separator: true},
      {
        label: '02:30', icon: 'pi pi-clock', command: () => {
          this.startPlaySession(150)
        }
      },
      {
        label: '03:00', icon: 'pi pi-clock', command: () => {
          this.startPlaySession(180)
        }
      },
      {separator: true},
      {
        label: '03:30', icon: 'pi pi-clock', command: () => {
          this.startPlaySession(210)
        }
      },
      {
        label: '04:00', icon: 'pi pi-clock', command: () => {
          this.startPlaySession(240)
        }
      },
    ];
    this.multiTimeList = [
      {
        label: '00:30', icon: 'pi pi-clock', command: () => {
          this.startPlaySession(30, true)
        }
      },
      {
        label: '01:00', icon: 'pi pi-clock', command: () => {
          this.startPlaySession(60, true)
        }
      },
      {separator: true},
      {
        label: '01:30', icon: 'pi pi-clock', command: () => {
          this.startPlaySession(90, true)
        }
      },
      {
        label: '02:00', icon: 'pi pi-clock', command: () => {
          this.startPlaySession(120, true)
        }
      },
      {separator: true},
      {
        label: '02:30', icon: 'pi pi-clock', command: () => {
          this.startPlaySession(150, true)
        }
      },
      {
        label: '03:00', icon: 'pi pi-clock', command: () => {
          this.startPlaySession(180, true)
        }
      },
      {separator: true},
      {
        label: '03:30', icon: 'pi pi-clock', command: () => {
          this.startPlaySession(210, true)
        }
      },
      {
        label: '04:00', icon: 'pi pi-clock', command: () => {
          this.startPlaySession(240, true)
        }
      },
    ];
  }

  ngOnInit(): void {

  }

  startPlaySession(minutes: number, isMulti = false): void {
    this.device.play_sessions.push({
      start_time: new Date(),
      end_time: null,
      duration: minutes,
      isMulti: isMulti
    });
    this.timer = setInterval(() => {
      this.calculateRemainingTime();
      this.calculatePrice();
    }, 1000);
  }

  get isAvailable(): boolean {
    return this.activeSession === null;
  }

  get activeSession(): any {
    if (this.device.play_sessions && this.device.play_sessions.length > 0) {
      return this.device.play_sessions.find((s: PlaySession) => s.end_time === null);
    }
    return null
  }
  get first_session(): any {
    if (this.device.play_sessions && this.device.play_sessions.length > 0) {
      return this.device.play_sessions[0];
    }
    return null
  }

  calculateRemainingTime() {
    if (this.activeSession) {
      if (this.activeSession.duration === 0) {
        this.remainingTime = new Date().getTime() - this.activeSession.start_time.getTime();
      }else{
        this.remainingTime = this.activeSession.duration * 60 * 1000 - (new Date().getTime() - this.activeSession.start_time.getTime());
      }
    }
  }
  switchToMulti() {
    if(this.activeSession.duration > 0){
      let remainingTime = this.activeSession.duration * 60 * 1000 - (new Date().getTime() - this.activeSession.start_time.getTime());
      this.startPlaySession(remainingTime, true);
    }else{
      this.startPlaySession(0, true);
    }
    this.activeSession.end_time = new Date();

  }
  calculatePrice() {
    let price = 0;
    for(let session of this.device.play_sessions){
      let endTime = session.end_time || new Date();
      let diff = moment(endTime).diff(moment(session.start_time), 'seconds');
      let totalHours = diff / 60 / 60;
      if(session.isMulti){
        price += totalHours * this.device.multi_price;
      }else{
        price += totalHours * this.device.price;
      }
    }
    this.play_cost = Math.round(price * 4) / 4;

  }

  ngOnChanges(changes: SimpleChanges): void {

  }
}

