import { Component, OnInit } from '@angular/core';
import {TranslateService} from '../../service/translate.service';
import {Translate} from '../../interface/translate';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-word',
  templateUrl: './list-word.component.html',
  styleUrls: ['./list-word.component.css']
})
export class ListWordComponent implements OnInit {
  words: Translate[];
  constructor(private wordService: TranslateService, private router: Router) { }

  ngOnInit(): void {
    this.words = this.wordService.wordArr;
  }

  navigation(word: string) {
    this.router.navigate(['translate', word]);
  }
}
