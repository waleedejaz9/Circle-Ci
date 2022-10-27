import { HttpStatus } from '@nestjs/common';
import Feedback from './Feedback';

export default class ApiResponse<T> {
  constructor(
    message: string,
    response: T,
    statusCode: number,
    feedbacks: Feedback[],
  ) {
    this.message = message;

    // Doing this because Axios contains 'data' property which contains the actual resposne.
    //And we also have a property which wraps that response. So to avoid poluting the response I did that....
    const { data } = response as any;
    this.data = data ? data : response;

    if (statusCode >= 400) {
      this.success = false;
    } else {
      this.success = true;
    }
    this.statusCode = statusCode;
    this.feedbacks = feedbacks;
  }

  public statusCode: number = HttpStatus.OK;
  public data: T;
  public message: string = '';
  public feedbacks: Feedback[];
  public success: boolean;
}
