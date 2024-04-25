import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { IMyRecomendation } from './my-recomendation.service';

@Injectable({
  providedIn: 'root'
})
export class AiRecomendationService {
  controller = 'AiRecomendation';

  constructor(private httpClient: HttpClient, private authService: AuthService ) { }

  list(): Observable<IMyRecomendation[]> {
    if (environment.fakeServer) {
    return of([
      { id: 'id11', name: 'AI Первая рекомендация', subTitle: 'Растяжка', detail: 'Делать зарядку по утрам, каждый день и в выходные' },
      { id: 'id12', name: 'AI Вторая рекомендация', subTitle: 'Растяжка', detail: 'Делать две зарядки по утрам, каждый день и в выходные' },
      { id: 'id13', name: 'AI Третья рекомендация', subTitle: 'Растяжка', detail: 'Делать три зарядки по утрам, каждый день и в выходные' },
      { id: 'id14', name: 'AI Четвертая рекомендация', subTitle: 'Сила', detail: 'Делать четыре зарядки по утрам, каждый день и в выходные' },
      { id: 'id15', name: 'AI Пятая рекомендация', subTitle: 'Сила', detail: 'Делать пять зарядки по утрам, каждый день и в выходные' },
      { id: 'id16', name: 'AI Шестая рекомендация', subTitle: 'Сила', detail: 'Делать шесть зарядки по утрам, каждый день и в выходные' },
      { id: 'id17', name: 'AI Седьмая рекомендация', subTitle: 'Реакция', detail: 'Делать семь зарядки по утрам, каждый день и в выходные' },
      { id: 'id18', name: 'AI Восьмая рекомендация', subTitle: 'Реакция', detail: 'Делать восемь зарядки по утрам, каждый день и в выходные' },
    ]);
    } else {
      return this.httpClient.post<IMyRecomendation[]>(`${environment.host}/${this.controller}/list`, this.authService.authDto)
        .pipe(
          map((res: IMyRecomendation[]) => res),
        );
    }

  }

}