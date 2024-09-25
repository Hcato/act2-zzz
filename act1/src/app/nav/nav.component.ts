import { Component, HostListener } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  image1 = 'volume_1.png'
  image2 = 'volume_2.png'
  actualimg = this.image1
  reference = 'Zenless_Zone_Zero_logo.png' 
  logonav = 'Zenless_Zone_Zero_logo.png'
  scrolling : number = 300;
  logoVisible : boolean = true;

  mutemusic(){
    this.actualimg = this.actualimg === this.image1 ? this.image2 : this.image1;
  }
  isModalVisible = false;

  openModal() {
    this.isModalVisible = true;
  }
  @HostListener('window:scroll',[])
  windowScroll(){
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition > this.scrolling && scrollPosition < 340) {
      if (scrollPosition > 330 && this.logonav == this.reference || scrollPosition < 700 && this.logonav == this.reference) {
        this.switchlogo(); 
      }
    }
    if (scrollPosition < 20) {
      if (this.logonav != this.reference) {
        this.switchlogo();
      }
    }
    if (scrollPosition > 660 && this.logonav == this.reference) {
      this.switchlogo();
    }
  }
  switchlogo(){
    this.logoVisible = !this.logoVisible
    if (!this.logoVisible) {
      this.logonav = 'logoalt.png'
    }
    else{
      this.logonav = this.reference
      this.logoVisible = true;
    }
  }
}
