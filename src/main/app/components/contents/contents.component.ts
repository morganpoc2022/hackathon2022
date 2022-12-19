import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contents-component',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss'],
})
export class ContentsComponent implements OnInit {
  navItems;
  @Output() contentClickEvent: EventEmitter<any> = new EventEmitter(null);
  ngOnInit() {
    this.navItems = [
      { name: 'Introduction', id: 1 },
      { name: 'Chart Content 1', id: 2 },
      { name: 'Image Section 1', id: 3 },
      { name: 'Content Section 1', id: 4 },
      { name: 'Chart Content 2', id: 5 },
      { name: 'Image Section 2', id: 6 },
      { name: 'Image Section 3', id: 7 },
      { name: 'Content Section 2', id: 8 },
      { name: 'Image Section 4', id: 9 },
      { name: 'Summary', id: 10 },
    ];
  }
  contentClick(id) {
    this.contentClickEvent.emit(id);
  }
}
