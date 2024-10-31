import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private apiUrl = 'http://localhost:5000/api/projects';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addProject(project: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, project);
  }
}