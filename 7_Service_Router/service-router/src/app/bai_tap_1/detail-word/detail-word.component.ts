import { Component, OnInit } from '@angular/core';
import {TranslateService} from '../../service/translate.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-detail-word',
  templateUrl: './detail-word.component.html',
  styleUrls: ['./detail-word.component.css']
})
export class DetailWordComponent implements OnInit {
  mean: string;
  word: string;
  constructor(private translateService: TranslateService, activeRouter: ActivatedRoute, router: Router) {
    activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.word = paramMap.get('name');
      console.log(this.word);
      this.mean = this.translateService.getMean(this.word);
    });
  }

  ngOnInit(): void {

  }


}
