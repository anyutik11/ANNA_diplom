import { Component } from '@angular/core';
import { IMyRecomendation, MyRecomendationService } from '../services/my-recomendation.service';
import { forkJoin } from 'rxjs';
import { AiRecomendationService } from '../services/ai-recomendation.service';
import { GeneralRecomendationService } from '../services/general-recomendation.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  header = "AI Recomendations";
  recomendations: IMyRecomendation[] = [];
  private myRecomendations: IMyRecomendation[] = [];
  private aiRecomendations: IMyRecomendation[] = [];
  private allRecomendations: IMyRecomendation[] = [];
  

  constructor(
    private aiRecomendationService: AiRecomendationService,
  ) {
  }

  ngOnInit(): void {
    this.header = "AI Recomendations";
    
    forkJoin({
      ai: this.aiRecomendationService.list(),
    })    
    .subscribe({
      next: (res) => {
        this.aiRecomendations = res.ai;
        this.recomendations = this.aiRecomendations;
      }
    })
  }


}
