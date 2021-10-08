import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IPost, Post } from 'app/entities/post/post.model';
import { PostService } from 'app/entities/post/service/post.service';
import { HttpResponse } from '@angular/common/http';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    
    posts: Post[] = [];
    

    constructor(
        private postService: PostService, 
        private router: Router
    ) {}

    ngOnInit(): void {
        this.loadAll();
    }

    loadAll(): void {
        //this.isLoading = true;
    
        this.postService.query().subscribe(
            (res: HttpResponse<IPost[]>) => {
            //    this.isLoading = false;
                this.posts = res.body ?? [];
            },
            () => {
                //this.isLoading = false;
            }
        );
      }

}
