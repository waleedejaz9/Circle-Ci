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

@Controller('payment')
export class PaymentController {

    constructor(private paymentService: PaymentService) {
    }
    @Get()
    async getAll
    (@Query('source') source: string, @Query('settlementId') settlementId: string, @Query('type') type: string[],
    @Query('status') status: string, @Query('from') from: Date, @Query('to') to: Date, @Query('pageBefore') pageBefore: string,
    @Query('pageAfter') pageAfter: string, @Query('pageSize') pageSize: number
    ): Promise<ApiResponse<PaymentsResponseDTO>> {
        try {
            var paymentFilter = new PaymentsRequestDTO()
            paymentFilter.source = source
            paymentFilter.settlementId = settlementId
            paymentFilter.type = type
            paymentFilter.status = status
            paymentFilter.from = from
            paymentFilter.to = to
            paymentFilter.pageBefore = pageBefore
            paymentFilter.pageAfter = pageAfter
            paymentFilter.pageSize = pageSize
            return await this.paymentService.getAll(paymentFilter)
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse<PaymentsResponseDTO>('Errro', e)
        }
    }

    @Get(':id')
    async get(@Param('id') id: string): Promise<ApiResponse<IPaymentResponse>> {
        try {
            const msg = await this.paymentService.getPayment(id)
 
            return msg
        }
        catch (e: any) {
            
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }

    @Post()
    async payment(@Body() payment: IPaymentRequest) {
        try {
            const msg = await this.paymentService.create(payment)
 
            return msg
        }
        catch (e: any) {            
            return e
        }
    }

    @Post('/capture')
    async capture(@Body() capture: ICapturePaymentDTO) {
        try {
            const msg = await this.paymentService.capture(capture)
 
            return msg
        }
        catch (e: any) {
            
            return e
        }
    } 

    @Post('/cancel')
    async cancel(@Body() cancel: PaymentCancelRequestDTO) {
        try {
            const msg = await this.paymentService.cancel(cancel)
            return msg
        }
        catch (e: any) {
            
            return e
        }
    }

    @Post('/refund')
    async refund(@Body() refund: PaymentRefundRequestDTO) {
        try {
            const msg = await this.paymentService.cancel(refund)
            return msg
        }
        catch (e: any) {
            
            return e
        }
    }  
}