import { Injectable } from '@angular/core';
import {ModelSong} from '../interface/model-song';

@Injectable({
  providedIn: 'root'
})
export class ModelSongService {
  playlist: ModelSong[] = [
    {
      id: 'CX11yw6YL1w',
      name: 'Céline Dion - Ashes (from the Deadpool 2 Motion Picture Soundtrack)'
    },
    {
      id: 'HBYirj2c_jw',
      name: 'Deadpool 2 - Take on Me'
    },
    {
      id: 'N6O2ncUKvlg',
      name: 'Nelly - Just A Dream'
    },
    {
      id: 'uelHwf8o7_U',
      name: 'Eminem - Love The Way You Lie ft. Rihanna'
    },
    {
      id: 'WpYeekQkAdc',
      name: 'The Black Eyed Peas - Where Is The Love?'
    }
    ];
  findSongById(id: string){
    return this.playlist[this.playlist.findIndex((index) => index.id === id)];
  }
  constructor() { }
}
