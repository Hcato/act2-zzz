import { Component } from '@angular/core';
import { Character } from '../models/character';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent {
  charactersArray : Character[] = [
    {
      id:1,
      firstname:'Burnice',
      lastname:'White',
      location:'Hijos de calidón',
      img: 'burnicepag.webp',
      minimg:'iconburnice.png',
      state: 'Burn'
    },
    {
      id:2,
      firstname:'Caesar',
      lastname:'King',
      location:'Hijos de calidón',
      img: 'caesar3.png',
      minimg:'iconburnice.png',
      state: 'Caes'
    },
    {
      id:3,
      firstname:'Lucy',
      lastname:'',
      location:'Hijos de calidón',
      img: 'lucy2.png',
      minimg:'iconburnice.png',
      state: 'Lucy'
    }
  ]
  Index: number = 0; 

nextCharacter() {
  if (this.Index < this.charactersArray.length - 1) {
    this.Index++;
  }
}

prevCharacter() {
  if (this.Index > 0) {
    this.Index--;
  }
}
setCharacter(index: number) {
  this.Index = index;
}
}
