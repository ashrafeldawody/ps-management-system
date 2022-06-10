import {PlaySession} from "./play-session";

export interface Device {
  id: string;
  name: string;
  type: string;
  price: number;
  multi_price: number;
  play_sessions: PlaySession[];

}
