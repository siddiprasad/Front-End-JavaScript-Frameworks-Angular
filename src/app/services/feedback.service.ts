import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ProcessHTTPMsgService } from './process-httpmsg.service';

import { BaseURL } from '../shared/baseurl';
import { Feedback } from '../shared/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor( private http: HttpClient,
        private processHTTPMsgService: ProcessHTTPMsgService) { }

  postFeedback( feedback: Feedback): Observable<Feedback> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Feedback>(BaseURL + 'feedback', feedback, httpOptions)
      .pipe( catchError( this.processHTTPMsgService.handleError));

  }

}