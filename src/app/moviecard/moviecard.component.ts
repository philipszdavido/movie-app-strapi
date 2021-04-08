import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviecard',
  template: `
    <div class="movie-card" routerLink="/movie/{{ movie.id }}">
      <div
        class="movie-card-img"
        style="background-image: url({{ movie.imageUrl }});"
      ></div>
      <div class="movie-card-footer">
        <div class="movie-card-name">
          <h3>{{ movie.name }}</h3>
        </div>
        <div class="movie-card-year">
          <span>Year</span><span>{{ movie.year }}</span>
        </div>
        <div class="movie-card-genre">
          <span>Genre:</span><span>{{ movie.genre }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .movie-card {
        border: 0px solid;
        width: 251px;
        height: 300px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        margin: 27px;
        cursor: pointer;
        background-color: rgba(255, 255, 255, 1);
      }
      .movie-card:hover {
        box-shadow: 0 20px 36px 0 rgba(0, 0, 0, 0.2);
      }
      .movie-card-footer {
        font-family: system-ui;
        padding: 15px;
        padding-bottom: 18px;
        padding-top: 0;
      }
      .movie-card-img {
        height: 250px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
      .movie-card-footer {
        border-radius: 5px;
      }
      .movie-card-name {
        color: black;
        font-family: system-ui;
      }
      .movie-card-name h3 {
        margin-bottom: 7px;
        margin-top: 2px;
      }
      .movie-card-year {
        display: flex;
        justify-content: space-between;
        font-weight: 500;
        color: darkgray;
        padding: 4px 0;
      }
      .movie-card-genre {
        display: flex;
        justify-content: space-between;
        font-weight: 500;
        color: darkgray;
      }
    `,
  ],
})
export class MoviecardComponent implements OnInit {
  @Input() movie: any;
  constructor() {}

  ngOnInit(): void {}
}
