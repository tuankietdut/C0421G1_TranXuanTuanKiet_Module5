import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TimelinesComponent } from './thuc_hanh_1/timelines/timelines.component';
import { YoutubePlaySongComponent } from './thuc_hanh_2/youtube-play-song/youtube-play-song.component';
import {AppRouterModule} from './app-router.module';
import {RouterModule} from '@angular/router';
import { SongDetailComponent } from './thuc_hanh_2/song-detail/song-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ListWordComponent } from './bai_tap_1/list-word/list-word.component';

import {ListProductComponent} from './thuc_hanh_3/list-product/list-product.component';
import {CreateProductComponent} from './thuc_hanh_3/create-product/create-product.component';
import {DetailWordComponent} from './bai_tap_1/detail-word/detail-word.component';
import { EditProductComponent } from './thuc_hanh_3/edit-product/edit-product.component';
import { DeleteProductComponent } from './thuc_hanh_3/delete-product/delete-product.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    YoutubePlaySongComponent,
    SongDetailComponent,
    ListProductComponent,
    CreateProductComponent,
    ListWordComponent,
    DetailWordComponent,
    EditProductComponent,
    DeleteProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
