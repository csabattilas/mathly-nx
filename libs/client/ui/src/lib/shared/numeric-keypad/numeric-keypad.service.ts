import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NumericKeypadService {
  private readonly keySubject = new Subject<string>();

  public get key$(): Observable<string> {
    return this.keySubject.asObservable();
  }

  public pushKey(key: string): void {
    this.keySubject.next(key);
  }
}
