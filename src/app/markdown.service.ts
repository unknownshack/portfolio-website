// markdown.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as marked from 'marked';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {
  constructor(private http: HttpClient) {}

  getMarkdownContent(url: string): Observable<string> {
    return this.http.get(url, { responseType: 'text' });
  }

  parseMarkdown(content: string): string {
    return marked.parse(content);
  }
}
