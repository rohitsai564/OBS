import { Component, OnInit } from '@angular/core';
import { Book } from '../Model/book.model';
import { HomeService } from '../Service/home.service';

@Component({
  selector: 'app-bookshome',
  templateUrl: './bookshome.component.html',
  styleUrls: ['./bookshome.component.css']
})
export class BookshomeComponent implements OnInit {
book:Book[];
  constructor(private homeservice:HomeService) { }

  ngOnInit(): void {
    this.homeservice.getAllBooks()
    next:(data)=>{
      this.book=data;

    }
  }

}
