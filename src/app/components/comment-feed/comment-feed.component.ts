import { Component, OnInit } from "@angular/core";

import { CommentService } from "./../../services/comment.service";

@Component({
  selector: "app-comment-feed",
  templateUrl: "./comment-feed.component.html",
  styleUrls: ["./comment-feed.component.css"]
})
export class CommentFeedComponent implements OnInit {
  comments: Comment[];
  errorMessage = "";

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.getAllComments();
  }

  getAllComments(){
    this.commentService.getAllComments().subscribe((res:any)=>{
      this.comments = res;
    });
  }

  resetCommentFeed() {
    this.commentService.resetComments().subscribe()
  }

  deleteComment(id){
    this.commentService.deleteCommentId(id).subscribe((res:any)=>{
      this.getAllComments();
    })
  }

}
