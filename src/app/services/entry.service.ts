import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import {Observable} from 'rxjs'
import {Entry} from '../Entry';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  private apiUrl = 'http://localhost:5000/entries'

  constructor(private http:HttpClient) { }

  getEntries(): Observable<Entry[]> {
    return this.http.get<Entry[]>(this.apiUrl)
  }

  deleteEntry(entry: Entry): Observable<Entry> {
    const url = `${this.apiUrl}/${entry.id}`;
    return this.http.delete<Entry>(url);
  }

  updateEntryYucky(entry: Entry): Observable<Entry> {
    const url = `${this.apiUrl}/${entry.id}`;
    return this.http.put<Entry>(url, entry, httpOptions);

  }

  addEntry(entry: Entry): Observable<Entry> {
    return this.http.post<Entry>(this.apiUrl, entry, httpOptions);
  }

}
