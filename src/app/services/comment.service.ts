import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_PREFIX = "/api";

@Injectable({
  providedIn: "root"
})
export class CommentService {

  constructor(private http: HttpClient) { }

  /**
   * Reset comments back to original state.
   */
  resetComments(): Observable<any> {
    return this.http.post(`${API_PREFIX}/reset-comments`, {});
  }

  getAllComments(){
    return this.http.get(`${API_PREFIX}/comments`);
  }

  deleteCommentId(id){
    return this.http.delete(`${API_PREFIX}/comments/${id}`);
  }
}
