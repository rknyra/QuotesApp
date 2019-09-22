import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quotes: Quote[] = [
    {quote:'They say a person needs just three things to be truly happy in this world: someone to love, something to do, and something to hope for.',author:'Tom Bodett',submittedBy:'Stl SuperG', date: new Date(2019,9,14)},
    {quote:'Wine is constant proof that God loves us and loves to see us happy.',author:'Benjamin Franklin',submittedBy:'RK Nyra', date: new Date(2019,9,14)},
    {quote:'If you think women are the weaker sex, try pulling the blanket back to your side',author:'Stuart Turner',submittedBy:'Judd Knight', date: new Date(2019,9,14)},
    {quote:'Have you noticed that all the people in favor of birth control are already born?',author:'Benny Hill',submittedBy:'Lisa Kempton', date: new Date(2019,9,14)},
    {quote:'Have you noticed that all the people in favor of birth control are already born?',author:'Benny Hill',submittedBy:'Lisa Kempton', date: new Date(2019,9,14)},
  ];

showForm: boolean = false

  constructor() { }

  ngOnInit() {
  }

  addQuote(){
    this.showForm = true
  }
  hideForm(){
    this.showForm = false
  }
  submitData(quote){

    quote.date = new Date;
    this.quotes.push(quote)
  }
}
