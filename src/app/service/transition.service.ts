import { ITransition } from './../../interface/transistionInterface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransitionService {
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {}

  getTransition(): Observable<ITransition[]> {
    return this.httpClient.get<ITransition[]>(this.url);
  }

  addTransition(transition: ITransition): Observable<ITransition> {
    return this.httpClient.post<ITransition>(this.url, { ...transition });
  }
}
