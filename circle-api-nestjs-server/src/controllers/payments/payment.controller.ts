import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common"
import ApiResponse from "../../utils/HelperClasses/ApiResponse"
import { PaymentService } from "./Payment.service"
import IPaymentRequest from "src/DTO/Payment/PaymentRequestDTO"
import ResponseHelper from "../../utils/HelperClasses/ResponseHelper"
import IPaymentResponse from "src/DTO/Payment/IPaymentResponseDTO"
import ICapturePaymentDTO from "src/DTO/Payment/ICapturePaymentDTO"
import PaymentsRequestDTO from "src/DTO/Payment/PaymentsRequestDTO"
import PaymentsResponseDTO from "src/DTO/Payment/PaymentsResponseDTO"
import PaymentCancelRequestDTO from "src/DTO/Payment/PaymentCancelRequestDTO"
import PaymentRefundRequestDTO from "src/DTO/Payment/PaymentRefundRequestDTO"
import { MessagePattern } from '@nestjs/microservices';

@Controller('payment')
export class PaymentController {

    constructor(private paymentService: PaymentService) {
    }
    @MessagePattern('/all')
    async getAll(paymentFilter: PaymentsRequestDTO): Promise<ApiResponse<PaymentsResponseDTO>> {
        try {
            return await this.paymentService.getAll(paymentFilter)
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse<PaymentsResponseDTO>('Errro', e)
        }
    }
    @MessagePattern('/get/:id')
    async get(id: string): Promise<ApiResponse<IPaymentResponse>> {
        try {
            const msg = await this.paymentService.getPayment(id)

            return msg
        }
        catch (e: any) {

            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
    @MessagePattern('/create')
    async payment(payment: IPaymentRequest) {
        try {
            const msg = await this.paymentService.create(payment)

            return msg
        }
        catch (e: any) {
            return e
        }
    }
    @MessagePattern('/capture')
    async capture(capture: ICapturePaymentDTO) {
        try {
            const msg = await this.paymentService.capture(capture)

            return msg
        }
        catch (e: any) {

            return e
        }
    }
    @MessagePattern('/cancel')
    async cancel(cancel: PaymentCancelRequestDTO) {
        try {
            const msg = await this.paymentService.cancel(cancel)
            return msg
        }
        catch (e: any) {

            return e
        }
    }
    @MessagePattern('/refund')
    async refund(refund: PaymentRefundRequestDTO) {
        try {
            const msg = await this.paymentService.cancel(refund)
            return msg
        }
        catch (e: any) {

            return e
        }
    }
}