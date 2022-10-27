import { Injectable } from '@nestjs/common';
import Payment from '../../utils/Models/Payment';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { DataService } from '../../utils/Services/DataService';
import IPaymentRequest from '../../DTO/Payment/PaymentRequestDTO';
import IPaymentResponse from '../../DTO/Payment/IPaymentResponseDTO';
import ApiResponse from '../../utils/HelperClasses/ApiResponse';
import ICapturePaymentDTO from 'src/DTO/Payment/ICapturePaymentDTO';
import PaymentsRequestDTO from 'src/DTO/Payment/PaymentsRequestDTO';
import PaymentsResponseDTO from 'src/DTO/Payment/PaymentsResponseDTO';
import PaymentCancelRequestDTO from 'src/DTO/Payment/PaymentCancelRequestDTO';
import PaymentCancelResponseDTO from 'src/DTO/Payment/PaymentCancelResponseDTO';
import PaymentRefundResponseDTO from 'src/DTO/Payment/PaymentRefundResponseDTO';
import PaymentRefundRequestDTO from 'src/DTO/Payment/PaymentRefundRequestDTO';
import BaseService from 'src/utils/HelperClasses/BaseService';

@Injectable()
export class PaymentService extends BaseService {
  constructor(
    @InjectModel(Payment)
    private readonly paymentModel: ReturnModelType<typeof Payment>,
  ) {
    super()
  }

  /**
   * Get Payment through circle api
   * @param {id} string Get particular Payment
   * @returns {IPaymentResponse} response from circle api
   */
  async getPayment(id: string): Promise<ApiResponse<IPaymentResponse>> {
    try {
      return this.client.send<ApiResponse<IPaymentResponse>, string>('/get/:id', id).toPromise();
    } catch (e: any) {
      return e;
    }
  }

  /**
   * Get Payment through circle api
   * @param {payments} PaymentsRequestDTO Get particular Payment
   * @returns {IPaymentResponse} response from circle api
   */
  async getAll(
    payments: PaymentsRequestDTO,
  ): Promise<ApiResponse<PaymentsResponseDTO>> {
    try {
      return this.client.send<ApiResponse<PaymentsResponseDTO>, PaymentsRequestDTO>('/all', payments).toPromise();
    } catch (e: any) {
      return e;
    }
  }

  /**
   * Create Payment through circle api
   * @param {IPaymentRequest} payment
   * @returns {IPaymentResponse} response from circle api
   */
  async create(
    payment: IPaymentRequest,
  ): Promise<ApiResponse<IPaymentResponse>> {
    try {
      return this.client.send<ApiResponse<IPaymentResponse>, IPaymentRequest>('/create', payment).toPromise();
    } catch (e: any) {
      return e;
    }
  }

  /**
   * Capture Payment through circle api
   * @param {ICapturePaymentDTOt} capture
   * @returns {IPaymentResponse} response from circle api
   */
  async capture(capture: ICapturePaymentDTO): Promise<ApiResponse<string>> {
    try {
      return this.client.send<ApiResponse<string>, ICapturePaymentDTO>('/capture', capture).toPromise();
    } catch (e: any) {
      return e;
    }
  }

  /**
   * Cancel Payment through circle api
   * @param {PaymentCancelRequestDTO} cancel
   * @returns {PaymentCancelResponseDTO} response from circle api
   */
  async cancel(
    cancel: PaymentCancelRequestDTO,
  ): Promise<ApiResponse<PaymentCancelResponseDTO>> {
    try {
      return this.client.send<ApiResponse<PaymentCancelResponseDTO>, PaymentCancelRequestDTO>('/cancel', cancel).toPromise();
    } catch (e: any) {
      return e;
    }
  }

  /**
   * Refund Payment through circle api
   * @param {PaymentRefundRequestDTO} cancel
   * @returns {PaymentRefundResponseDTO} PaymentRefundResponseDTO response from circle api
   */
  async refund(
    refund: PaymentRefundRequestDTO,
  ): Promise<ApiResponse<PaymentRefundResponseDTO>> {
    try {
      return this.client.send<ApiResponse<PaymentRefundResponseDTO>, PaymentRefundRequestDTO>('/refund', refund).toPromise();
    } catch (e: any) {
      return e;
    }
  }

}
