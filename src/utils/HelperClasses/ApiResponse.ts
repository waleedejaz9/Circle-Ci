import { HttpStatus } from "@nestjs/common";
import Feedback from "./Feedback";

export default class ApiResponse<T> {
    
    constructor(message: string, data: T, statusCode: number, feedbacks: Feedback[]) {
        this.message = message;
        this.data = data;
        
        if (statusCode >= 400) {
            this.success = false;
        } else {
            this.success = true;
        }
        this.statusCode = statusCode;
        this.feedbacks = feedbacks;
    }

    public statusCode: number = HttpStatus.OK
    public data: T
    public message: string = ''
    public feedbacks: Feedback[]
    public success: boolean
}