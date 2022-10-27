import { HttpService } from '@nestjs/axios';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RestAPIManagerService {
  constructor(private httpService: HttpService) {
    this.httpService.axiosRef.defaults.headers.common['Authorization'] =
      'Bearer QVBJX0tFWTo4MWViNjJlOWMwNzdkM2I5OTNlMjUxYjc1OWY0ZmUxYzo1ZTMwYTdiYzY1MjU2MTlmYzhlZTQ0YmY3OTZiMzRhZA==';
    this.httpService.axiosRef.defaults.baseURL =
      'https://api-sandbox.circle.com';
  }
  get<T>(url: string, config?): Observable<AxiosResponse<T, any>> {
    // Removing trailing ?
    if (url.endsWith('?')) {
      url = url.substring(0, url.length - 1);
    }
    return this.httpService.get<T>(url, config);
  }
  post<T>(url: string, data: any, config?): Observable<AxiosResponse<T, any>> {
    return this.httpService.post<T>(url, data, config);
  }
  put<T>(url: string, data: any, config?): Observable<AxiosResponse<T, any>> {
    return this.httpService.put<T>(url, data, config);
  }
  delete<T>(): Observable<AxiosResponse<T, any>> {
    return null;
  }
}
