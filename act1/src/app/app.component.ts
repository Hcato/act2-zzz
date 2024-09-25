import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { ModalComponent } from './modal/modal.component';
import { HomeComponent } from "./home/home.component";
import { CharactersComponent } from "./characters/characters.component";
import { NewsComponent } from "./news/news.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, ModalComponent, HomeComponent, CharactersComponent, NewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'act1';
}
