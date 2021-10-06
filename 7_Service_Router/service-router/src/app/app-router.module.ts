import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimelinesComponent} from './thuc_hanh_1/timelines/timelines.component';
import {RouterModule, Routes} from '@angular/router';
import {YoutubePlaySongComponent} from './thuc_hanh_2/youtube-play-song/youtube-play-song.component';
import {SongDetailComponent} from './thuc_hanh_2/song-detail/song-detail.component';
import {ListProductComponent} from './thuc_hanh_3/list-product/list-product.component';
import {CreateProductComponent} from './thuc_hanh_3/create-product/create-product.component';
import {ListWordComponent} from './bai_tap_1/list-word/list-word.component';
import {DetailWordComponent} from './bai_tap_1/detail-word/detail-word.component';
import {EditProductComponent} from './thuc_hanh_3/edit-product/edit-product.component';
import {DeleteProductComponent} from './thuc_hanh_3/delete-product/delete-product.component';


const router: Routes = [
  {path: 'timelines', component: TimelinesComponent},
  {path: 'playSong', component: YoutubePlaySongComponent},
  {path: 'playSong/:id', component: SongDetailComponent},
  {path: 'product', component: ListProductComponent},
  {path: 'product/create', component: CreateProductComponent},
  {path: 'product/edit/:id', component: EditProductComponent},
  {path: 'product/delete/:id', component: DeleteProductComponent},
  {path: 'translate', component: ListWordComponent},
  {path: 'translate/:name', component: DetailWordComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(router)
  ]
})
export class AppRouterModule { }
