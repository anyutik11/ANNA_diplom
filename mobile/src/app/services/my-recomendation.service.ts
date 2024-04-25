import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

export interface IMyRecomendation {
  id: string;
  name: string;
  subTitle: string;
  detail: string;
}



@Injectable({
  providedIn: 'root'
})
export class MyRecomendationService {
  controller = 'MyRecomendation';

  constructor(private httpClient: HttpClient, private authService: AuthService ) { }

  list(): Observable<IMyRecomendation[]> {
    if (environment.fakeServer) {
      return of([
        { id: 'id01', name: 'Первая рекомендация', subTitle: 'Растяжка', detail: 'Делать зарядку по утрам, каждый день и в выходные' },
        { id: 'id02', name: 'Вторая рекомендация', subTitle: 'Растяжка', detail: 'Делать две зарядки по утрам, каждый день и в выходные' },
        { id: 'id03', name: 'Третья рекомендация', subTitle: 'Растяжка', detail: 'Делать три зарядки по утрам, каждый день и в выходные' },
        { id: 'id04', name: 'Четвертая рекомендация', subTitle: 'Сила', detail: 'Делать четыре зарядки по утрам, каждый день и в выходные' },
        { id: 'id05', name: 'Пятая рекомендация', subTitle: 'Сила', detail: 'Делать пять зарядки по утрам, каждый день и в выходные' },
        { id: 'id06', name: 'Шестая рекомендация', subTitle: 'Сила', detail: 'Делать шесть зарядки по утрам, каждый день и в выходные' },
        { id: 'id07', name: 'Седьмая рекомендация', subTitle: 'Реакция', detail: 'Делать семь зарядки по утрам, каждый день и в выходные' },
        { id: 'id08', name: 'Восьмая рекомендация', subTitle: 'Реакция', detail: 'Делать восемь зарядки по утрам, каждый день и в выходные' },
      ]);
    } else {
      return this.httpClient.post<IMyRecomendation[]>(`${environment.host}/${this.controller}/list`, this.authService.authDto)
        .pipe(
          map((res: IMyRecomendation[]) => res),
        );
    }

  }

}
