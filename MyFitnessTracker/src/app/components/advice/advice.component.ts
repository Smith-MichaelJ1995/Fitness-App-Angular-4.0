import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-service/data.service';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss']
})
export class AdviceComponent implements OnInit {

  posts:Post[];

  constructor(private dataService:DataService,public userService: UserService)
  {
      console.log('Constructor ran...');
  }

  ngOnInit() {
    console.log('NG on init ran..');

    this.dataService.getPosts().subscribe((posts) => {
         console.log(posts);
         this.posts = Array.of(posts);
    });

  }


}

interface Post{
  author: string,
  description: string,
  publishedAt: string,
  source: {
     id:string,
     name:string
  },
  title: string,
  url: string,
  urlToImage: string
}
