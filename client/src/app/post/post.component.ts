import { Component, OnInit } from '@angular/core';

/**SERVICES */
import { AppService } from './../app.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [AppService]
})
export class PostComponent implements OnInit {
  dataPost:any = [];
  constructor(
    private _appService: AppService
  ) { 
    this.getDataPost();
  }

  ngOnInit() {
  }

  getDataPost() {
    this._appService.getDataPost().subscribe(
      result => {
        this.dataPost = result;

      }, err => {
        console.log(err);
      }
    );
  }

  createPost(input:HTMLInputElement) {
    this._appService.createPost().subscribe(
      result => {
        // this.dataPost.unshift({
        //   title: input.value,
        //   id    : result.id
        // });
        // input.value = ''; 
      }, err => {
        console.log(err);
      }
    )
  }

}
