import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Entry} from '../../Entry';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-entry-item',
  templateUrl: './entry-item.component.html',
  styleUrls: ['./entry-item.component.css']
})
export class EntryItemComponent implements OnInit {
  @Input() entry: Entry;
  @Output() onDeleteEntry: EventEmitter<Entry> = new EventEmitter();
  @Output() onToggleYucky: EventEmitter<Entry> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {}

  onDelete(entry) {
    this.onDeleteEntry.emit(entry);
  }

  onToggle(entry) {
    this.onToggleYucky.emit(entry);
  }


}
