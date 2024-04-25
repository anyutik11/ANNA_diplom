import { Component, OnInit, ViewChild } from '@angular/core';
import { IMyRecomendation, MyRecomendationService } from '../services/my-recomendation.service';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  @ViewChild(IonModal) modal: IonModal|undefined;

  
  myRecomendations: IMyRecomendation[] = [];

  constructor(
    private myRecomendationService: MyRecomendationService
  ) {
  }

  ngOnInit(): void {
    this.myRecomendationService.list()
    .subscribe({
      next: (lst) => {
        this.myRecomendations = lst;
      }
    })
  }



  
  direction = '';
  title = '';
  description = '';

  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }

  add() {
    this.modal?.dismiss(this.direction, 'confirm');
  }

  onWillDismiss(event: Event) {
    /*
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
    */
  }


}
