import ApiResponse from "./ApiResponse";
import Feedback from "./Feedback";
export default class ResponseHelper<T> {
    public static CreateResponse<T>(message: string, data?: T, statusCode?: number, feedbacks?: Feedback[]){
        return new ApiResponse<T>(message, data, statusCode, feedbacks);
    }
}