import { Component, OnInit } from '@angular/core';
import {ModelSongService} from '../../service/model-song.service';
import {ModelSong} from '../../interface/model-song';

@Component({
  selector: 'app-youtube-play-song',
  templateUrl: './youtube-play-song.component.html',
  styleUrls: ['./youtube-play-song.component.css']
})
export class YoutubePlaySongComponent implements OnInit {
  playList: ModelSong[] = [];
  constructor(private songService: ModelSongService) {
    this.playList = this.songService.playlist;
  }

  ngOnInit(): void {
  }

}
