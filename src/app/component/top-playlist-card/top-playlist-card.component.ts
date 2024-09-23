import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-playlist-card',
  templateUrl: './top-playlist-card.component.html',
  styleUrls: ['./top-playlist-card.component.css']
})
export class TopPlaylistCardComponent implements OnInit {
  @Input() img_Url:any;
  @Input() albums:String = '';
  @Input() songs:number = 0;
  @Input() times:any;
  constructor() { }

  ngOnInit(): void {
  }

}
