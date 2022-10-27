import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { response } from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import ApiResponse from 'src/utils/HelperClasses/ApiResponse';

@Injectable()
export default class ResponseHandlerInterceptor<T> implements NestInterceptor<T, ApiResponse<T>>  {
  intercept(context: ExecutionContext, next: CallHandler):  Observable<ApiResponse<T>>  {
    return next.handle()
    .pipe(
      map(data => {
        let resposne = context.switchToHttp().getResponse()
        resposne.status(data?.statusCode)
        return data
      }
    ))
  }
}