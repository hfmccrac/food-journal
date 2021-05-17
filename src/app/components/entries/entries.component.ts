import { Component, OnInit } from '@angular/core';
import {EntryService} from '../../services/entry.service'
import {Entry} from '../../Entry';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {
  entries: Entry[] = [];

  constructor(private entryService: EntryService) {}

  ngOnInit(): void {
    this.entryService.getEntries().subscribe((entries) => (this.entries = entries));
  }

  deleteEntry(entry: Entry) {
    this.entryService.deleteEntry(entry).subscribe(() => (this.entries = this.entries.filter(t => t.id !== entry.id)));
  }

  toggleYucky(entry: Entry) {
    entry.yucky = !entry.yucky;
  this.entryService.updateEntryYucky(entry).subscribe();
  }

  addEntry(entry: Entry) {
    this.entryService.addEntry(entry).subscribe((entry) => (this.entries.push(entry)));
  }

}
