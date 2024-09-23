import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-card',
  templateUrl: './recent-card.component.html',
  styleUrls: ['./recent-card.component.css']
})
export class RecentCardComponent implements OnInit {
  @Input() img_Url :any;
  @Input() songName:String = ''
  @Input() artists:String = ''
  constructor() { }

  ngOnInit(): void {
    this.artists = 'hlwan paing'
    this.songName = 'hello world'
    this.img_Url = 'hello'
  }

}
