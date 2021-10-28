import { Component, OnInit } from '@angular/core';
import articlesJSON from "../../../assets/articulos.json"

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: any = [];

  constructor() { }

  // async getArticles() {
  //   const data = await JSON.parse(articlesJSON)
  //   this.articles = data
  // }

  ngOnInit(): void {
    this.articles = articlesJSON
  }

}
