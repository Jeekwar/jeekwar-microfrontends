import { catchError, Observable } from 'rxjs';

export class Perform<T> {
  data: T | undefined;
  isLoading = false;
  hasErorr = false;
  private action$ = Observable<T> | undefined;

  load(action$: Observable<T>): void {
    this.isLoading = true;
    this.hasErorr = false;
    this.action$ = action$;
    this.action$
      .pipe(
        catchError(() => {
          this.data = undefined;
          this.isLoading = false;
          this.hasErorr = true;
        })
      )
      .subscribe((data: T) => {
        this.data = data;
        this.isLoading = false;
        this.hasErorr = false;
      });
  }
}
