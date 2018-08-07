import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: Http) { }

  findAll(): Observable <User[]> {
    return this.http.get(this.apiUrl)
      .pipe(
        map((res: Response) => res.json()),
        catchError((error: any) => error.json().error || 'Server error')
      );
  }

  findById(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url)
        .pipe(
          map((res: Response) => res.json()),
          catchError((error: any) => error.json().error || 'Server error')
        );
  }

  saveUser(user: User): Observable<User> {
    return this.http.post(this.apiUrl, user)
      .pipe(
          map((res: Response) => res.json()),
          catchError((error: any) => error.json().error || 'Server error')
      );
  }

  deleteUserById(user: User | number): Observable<boolean> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `this.${this.apiUrl}/${id}`;

    return this.http.delete(url, httpOptions).pipe(
      tap(_ => console.log(`delete hero id=${id}`)),
      catchError((error: any) => error.json().error || 'Server error')
    )
  }

  updateUser(user: User): Observable<User> {
    return this.http.post(this.apiUrl, user)
      .pipe(
          map((res: Response) => res.json()),
          catchError((error: any) => error.json().error || 'Server error')
      );
  }

}
