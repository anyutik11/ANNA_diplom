import { Component } from '@angular/core';
import { IMyRecomendation, MyRecomendationService } from '../services/my-recomendation.service';
import { forkJoin } from 'rxjs';
import { AiRecomendationService } from '../services/ai-recomendation.service';
import { GeneralRecomendationService } from '../services/general-recomendation.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  header = "AI Recomendations";
  recomendations: IMyRecomendation[] = [];
  private myRecomendations: IMyRecomendation[] = [];
  private aiRecomendations: IMyRecomendation[] = [];
  private allRecomendations: IMyRecomendation[] = [];
  

  constructor(
    private myRecomendationService: MyRecomendationService,
    private aiRecomendationService: AiRecomendationService,
    private generalRecomendationService: GeneralRecomendationService,
  ) {
  }

  ngOnInit(): void {
    forkJoin({
      my: this.myRecomendationService.list(),
      all: this.generalRecomendationService.list(),
      ai: this.aiRecomendationService.list(),
    })    
    .subscribe({
      next: (res) => {
        this.myRecomendations = res.my;
        this.aiRecomendations = res.ai;
        this.allRecomendations = res.all;

        this.onRadioValueChanged({ detail: { value: 'ai'}});
      }
    })
  }

  onRadioValueChanged(event: any) {
    console.log('onRadioValueChanged', event.detail.value);
    switch (event.detail.value) {
      case 'ai':
        this.header = "AI Recomendations";
        this.recomendations = this.aiRecomendations;
        break;
      case 'all':
        this.header = "All Recomendations";
        this.recomendations = this.allRecomendations;
        break;
      case 'my':
        this.header = "My Recomendations";
        this.recomendations = this.myRecomendations;
        break;
    }
  }


}
