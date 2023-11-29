import { Component, OnInit } from '@angular/core';
import { MarkdownService } from '../markdown.service';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-angular-introduction',
  templateUrl: './angular-introduction.component.html',
  styleUrls: ['./angular-introduction.component.css']
})
export class AngularIntroductionComponent {
  markdownContent: string = "";
  markdownPath = '../../assets/markdown/';
  markdownFileUrl = '../../assets/markdown/Angular Navigation and Routing.md';
  pdfUrl = "../../assets/pdf/Collections_in_NET.pdf"

  pdfPath: SafeResourceUrl = '';

  constructor(private http: HttpClient,private sanitizer: DomSanitizer, private markdownService: MarkdownService, private route: ActivatedRoute) {}

  ngOnInit() {
    let fileName = this.route.snapshot.queryParamMap.get('file');
    this.markdownFileUrl = this.markdownPath + fileName;
    this.markdownService.getMarkdownContent(this.markdownFileUrl)
      .subscribe((content: string) => {
        this.markdownContent = this.markdownService.parseMarkdown(content);
      });

    // this.http.get('../../assets/html/Collections_in_NET.html', {responseType: 'text'}).subscribe(
    //   (data) => {
    //     this.markdownContent = data;
    //   },
    //   (error) => {
    //     console.error('Error loading HTML content:', error);
    //   }
    // );

    // this.http.get(this.pdfUrl, { responseType: 'arraybuffer' }).subscribe(
    //   (data: ArrayBuffer) => {
    //     const blob = new Blob([data], { type: 'application/pdf' });
    //     const url = URL.createObjectURL(blob);
    //     this.pdfPath = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    //   },
    //   (error) => {
    //     console.error('Error loading PDF:', error);
    //   }
    // );
  }
}
