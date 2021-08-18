import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { I_User } from '../model/UserModel';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<I_User[]> {
    return this.http.get<I_User[]>('http://localhost:3000/serverUsers');
  }

  removeUserService(id: string): Observable<{}> {
    return this.http.delete(`http://localhost:3000/serverUsers/${id}`);
  }

  addUserService(data: I_User): Observable<I_User> {
    return this.http.post<I_User>(`http://localhost:3000/serverUsers`, data);
  }
}
