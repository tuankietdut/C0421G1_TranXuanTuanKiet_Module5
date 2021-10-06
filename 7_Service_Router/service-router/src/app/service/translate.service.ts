import { Injectable } from '@angular/core';
import {Translate} from '../interface/translate';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  wordArr: Translate[] = [
    {word : 'name', mean: 'ho ten'},
    {word : 'age', mean: 'tuoi'},
    {word : 'date of birth', mean: 'ngay sinh'},
    {word : 'address', mean: 'dia chi'},
    {word : 'dog', mean: 'cho'},
    {word : 'cat', mean: 'meo'},
    {word : 'sheep', mean: 'cuu'}
  ];
  getMean(word: string){
    return  this.wordArr.find((value: Translate) => value.word === word).mean;
  }

  constructor() { }
}
