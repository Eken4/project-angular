import { Component, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  public searchWord: string = '';
  @Output() public searchEvent = new EventEmitter<string>();

  public formSearch = new FormGroup({
    search: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
    this.formSearch.valueChanges.subscribe((value) => {
      if(typeof value.search === 'string') {
        this.searchProducts(value.search);
      }
    });
  }

  searchProducts(value: string) {
    console.log(value);
    this.searchEvent.emit(value);
  }

  // redirectToCatalog() {
  //   this.searchEvent.emit(this.searchTerm);
  //   this.router.navigate(['catalog']);
  // }
}
