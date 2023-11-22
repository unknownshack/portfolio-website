import { Component, OnInit } from '@angular/core';
import { MarkdownService } from '../markdown.service';

@Component({
  selector: 'app-angular-introduction',
  templateUrl: './angular-introduction.component.html',
  styleUrls: ['./angular-introduction.component.css']
})
export class AngularIntroductionComponent {
  markdownContent: string = "";

  constructor(private markdownService: MarkdownService) {}

  ngOnInit() {
    const markdownFileUrl = '../../assets/markdown/Angular Navigation and Routing.md';

    this.markdownService.getMarkdownContent(markdownFileUrl)
      .subscribe((content: string) => {
        this.markdownContent = this.markdownService.parseMarkdown(content);
      });
  }
}
