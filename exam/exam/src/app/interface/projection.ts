import {Movie} from "./movie";

export interface Projection {
  id?: number;
  codeProject?: string;
  movie?: Movie;
  startDay?: string;
  quantity?: number;
}
