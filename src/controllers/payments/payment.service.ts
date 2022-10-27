import { Injectable } from "@nestjs/common";
import Payment from '../../utils/Models/Payment';
import {InjectModel} from 'nestjs-typegoose';
import {ReturnModelType} from '@typegoose/typegoose';
import { DataService } from "../../utils/Services/DataService";
import IPaymentRequest from "../../DTO/Payment/IPaymentRequestDTO";
import IPaymentResponse from "../../DTO/Payment/IPaymentResponseDTO";
import ApiResponse from "../../utils/HelperClasses/ApiResponse";
import ICapturePaymentDTO from "src/DTO/Payment/ICapturePaymentDTO";
import PaymentsRequestDTO from "src/DTO/Payment/PaymentsRequestDTO";
import PaymentsResponseDTO from "src/DTO/Payment/PaymentsResponseDTO";
import PaymentCancelRequestDTO from "src/DTO/Payment/PaymentCancelRequestDTO";
import PaymentCancelResponseDTO from "src/DTO/Payment/PaymentCancelResponseDTO";
import PaymentRefundResponseDTO from "src/DTO/Payment/PaymentRefundResponseDTO";
import PaymentRefundRequestDTO from "src/DTO/Payment/PaymentRefundRequestDTO";

@Injectable()
export class PaymentService {

    constructor(
        @InjectModel(Payment) private readonly paymentModel: ReturnModelType<typeof Payment>,
        private dataService: DataService
        ) {

    }

    /**
     * Get Payment through circle api
     * @param {id} string Get particular Payment
     * @returns {IPaymentResponse} response from circle api
     */
    async getPayment(id: string): Promise<ApiResponse<IPaymentResponse>> {
        try {
            let result = await this.dataService.getPayment(id);
            return result
        } catch(e: any) {

            return e
        }
    }

    /**
     * Get Payment through circle api
     * @param {payments} PaymentsRequestDTO Get particular Payment
     * @returns {IPaymentResponse} response from circle api
     */
     async getAll(payments: PaymentsRequestDTO): Promise<ApiResponse<PaymentsResponseDTO>> {
        try {
            let result = await this.dataService.getAllPayment(payments);
            return result
        } catch(e: any) {

            return e
        }
    }
    
    /**
     * Create Payment through circle api
     * @param {IPaymentRequest} payment
     * @returns {IPaymentResponse} response from circle api
     */
    async create(payment: IPaymentRequest): Promise<ApiResponse<IPaymentResponse>> {
        try {
            let result = await this.dataService.createPayment(payment);
            await this.storePayment(result.data)
            return result
        } catch(e: any) {

            return e
        }
    }
    
    /**
     * Capture Payment through circle api
     * @param {ICapturePaymentDTOt} capture
     * @returns {IPaymentResponse} response from circle api
     */
     async capture(capture: ICapturePaymentDTO): Promise<ApiResponse<string>> {
        try {
            let result = await this.dataService.capturePayment(capture);
            return result
        } catch(e: any) {
            return e
        }
    }
    
    /**
     * Cancel Payment through circle api
     * @param {PaymentCancelRequestDTO} cancel
     * @returns {PaymentCancelResponseDTO} response from circle api
     */
     async cancel(cancel: PaymentCancelRequestDTO): Promise<ApiResponse<PaymentCancelResponseDTO>> {
        try {
            let result = await this.dataService.cancelPayment(cancel);
            return result
        } catch(e: any) {
            return e
        }
    }
    
    /**
     * Refund Payment through circle api
     * @param {PaymentRefundRequestDTO} cancel
     * @returns {PaymentRefundResponseDTO} PaymentRefundResponseDTO response from circle api
     */
     async refund(refund: PaymentRefundRequestDTO): Promise<ApiResponse<PaymentRefundResponseDTO>> {
        try {
            let result = await this.dataService.refundPayment(refund);
            return result
        } catch(e: any) {
            return e
        }
    }

    /**
     * Store Payment in DB after getting success from circle api
     * @param {Payment} payment
     */
    async storePayment(payment: Payment) {
        try {
            const createdPayment = new this.paymentModel(payment);
            let r = await createdPayment.save();
            return r
        } catch(e: any) {

        }
    }
}