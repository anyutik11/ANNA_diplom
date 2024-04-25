import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { IMyRecomendation } from './my-recomendation.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralRecomendationService {
  controller = 'GeneralRecomendation';

  constructor(private httpClient: HttpClient, private authService: AuthService ) { }

  list(): Observable<IMyRecomendation[]> {
    if (environment.fakeServer) {
    return of([
      { id: 'id21', name: 'All Первая рекомендация', subTitle: 'Растяжка', detail: 'Делать зарядку по утрам, каждый день и в выходные' },
      { id: 'id22', name: 'All Вторая рекомендация', subTitle: 'Растяжка', detail: 'Делать две зарядки по утрам, каждый день и в выходные' },
      { id: 'id23', name: 'All Третья рекомендация', subTitle: 'Растяжка', detail: 'Делать три зарядки по утрам, каждый день и в выходные' },
      { id: 'id24', name: 'All Четвертая рекомендация', subTitle: 'Сила', detail: 'Делать четыре зарядки по утрам, каждый день и в выходные' },
      { id: 'id25', name: 'All Пятая рекомендация', subTitle: 'Сила', detail: 'Делать пять зарядки по утрам, каждый день и в выходные' },
      { id: 'id26', name: 'All Шестая рекомендация', subTitle: 'Сила', detail: 'Делать шесть зарядки по утрам, каждый день и в выходные' },
      { id: 'id27', name: 'All Седьмая рекомендация', subTitle: 'Реакция', detail: 'Делать семь зарядки по утрам, каждый день и в выходные' },
      { id: 'id28', name: 'All Восьмая рекомендация', subTitle: 'Реакция', detail: 'Делать восемь зарядки по утрам, каждый день и в выходные' },
    ]);
    } else {
      return this.httpClient.post<IMyRecomendation[]>(`${environment.host}/${this.controller}/list`, this.authService.authDto)
        .pipe(
          map((res: IMyRecomendation[]) => res),
        );
    }

  }

}