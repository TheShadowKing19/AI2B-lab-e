import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Task} from "./task";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  readonly baseUrl = 'http://localhost:49478'
  constructor(
    private http: HttpClient
  ) { }

  public index(archived = false): Observable<Task[]> {
    const url = this.baseUrl + '/todos';
    return this.http.get<Task[]>(url, {
      params: {
        archived: archived,
        _sort: 'id',
        _order: 'desc',
      }
    })
  }

  public post(task: Task) {
    return this.http.post<Task>(`${this.baseUrl}` + '/todos', task)
  }

  public put(task: Task) {
    return this.http.put<Task>(`${this.baseUrl}/todos/${task.id}`, task)
  }

  public delete(task: Task) {
    return this.http.delete<Task>(`${this.baseUrl}/todos/${task.id}`)
  }
}
