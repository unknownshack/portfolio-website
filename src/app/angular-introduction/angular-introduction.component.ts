import { Component, OnInit } from '@angular/core';
import { MarkdownService } from '../markdown.service';
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-angular-introduction',
  templateUrl: './angular-introduction.component.html',
  styleUrls: ['./angular-introduction.component.css']
})
export class AngularIntroductionComponent {
  markdownContent: string = "";
  markdownPath = '../../assets/markdown/';
  markdownFileUrl = '../../assets/markdown/Angular Navigation and Routing.md';

  constructor(private markdownService: MarkdownService, private route: ActivatedRoute) {}

  ngOnInit() {
    let fileName = this.route.snapshot.queryParamMap.get('file');
    this.markdownFileUrl = this.markdownPath + fileName;
    this.markdownService.getMarkdownContent(this.markdownFileUrl)
      .subscribe((content: string) => {
        this.markdownContent = this.markdownService.parseMarkdown(content);
      });
  }
}
