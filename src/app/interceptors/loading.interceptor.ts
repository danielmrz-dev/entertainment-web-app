import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { finalize, retry } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService)

  loadingService.showLoading();

  return next(req).pipe(
    retry(2),
    finalize(() => {
      loadingService.hideLoading();
    })
  );
};
