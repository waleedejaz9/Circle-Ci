import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common"
import ApiResponse from "../../utils/HelperClasses/ApiResponse"
import ResponseHelper from "../../utils/HelperClasses/ResponseHelper"
import { PayoutService } from "./payouts.service"
import IPayoutResponseDTO from "src/DTO/Payout/IPayoutResponseDTO"
import PayoutsRequestDTO from "src/DTO/Payout/PayoutsRequestDTO"
import PayoutCreateRequestDTO from "src/DTO/Payout/PayoutCreateRequestDTO"
import { MessagePattern } from '@nestjs/microservices';

@Controller('payout')
export class PayoutController {

    constructor(private payoutService: PayoutService) {
    }
    @MessagePattern('/all')
    async getAll(
        payoutFilter: PayoutsRequestDTO): Promise<ApiResponse<IPayoutResponseDTO>> {
        try {
            const msg = await this.payoutService.getAllPayout(payoutFilter)
            return msg
        }
        catch (e: any) {

            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
    @MessagePattern('/returns')
    async getAllReturns(
        payoutFilter: PayoutsRequestDTO): Promise<ApiResponse<IPayoutResponseDTO>> {
        try {
            const msg = await this.payoutService.getAllReturnPayouts(payoutFilter)
            return msg
        }
        catch (e: any) {

            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
    @MessagePattern('/get/:id')
    async getPayout(id: string): Promise<ApiResponse<IPayoutResponseDTO>> {
        try {
            const msg = await this.payoutService.getPayout(id)

            return msg
        }
        catch (e: any) {

            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
    @MessagePattern('/create')
    async payout(payout: PayoutCreateRequestDTO) {
        try {
            const msg = await this.payoutService.createPayout(payout)
            return msg
        }
        catch (e: any) {
            return e
        }
    }
}