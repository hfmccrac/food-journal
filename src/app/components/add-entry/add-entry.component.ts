import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs';
import {Entry} from '../../Entry'

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  @Output() onAddEntry: EventEmitter<Entry> = new EventEmitter();
  text: string;
  day: string;
  yucky: boolean = false;
  showAddEntry: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddEntry = value));
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text){
      alert('Please add an entry!');
      return;
    }

    const newEntry = {
      text: this.text,
      day: this.day,
      yucky: this.yucky
    }

    this.onAddEntry.emit(newEntry)

    this.text = '';
    this.day = '';
    this.yucky = false;

  }
}
