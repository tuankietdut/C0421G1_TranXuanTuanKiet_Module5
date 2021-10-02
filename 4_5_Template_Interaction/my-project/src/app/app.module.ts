import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameCardComponent } from './interaction_5/name-card/name-card.component';
import { ProgressBarComponent } from './interaction_5/progress-bar/progress-bar.component';
import { ArticleComponent } from './template_4/article/article.component';
import {FormsModule} from '@angular/forms';
import { LikeComponent } from './template_4/like/like.component';
import { NavbarComponent } from './template_4/navbar/navbar.component';
import { FooterComponent } from './template_4/footer/footer.component';
import { CountDownComponent } from './interaction_5/count-down/count-down.component';
import { RatingBarComponent } from './interaction_5/rating-bar/rating-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    ProgressBarComponent,
    ArticleComponent,
    LikeComponent,
    NavbarComponent,
    FooterComponent,
    CountDownComponent,
    RatingBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
