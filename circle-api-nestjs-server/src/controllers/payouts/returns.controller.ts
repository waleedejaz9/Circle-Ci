import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common"
import ApiResponse from "../../utils/HelperClasses/ApiResponse"
import ResponseHelper from "../../utils/HelperClasses/ResponseHelper"
import { PayoutService } from "./payouts.service"
import IPayoutResponseDTO from "src/DTO/Payout/IPayoutResponseDTO"
import PayoutsRequestDTO from "src/DTO/Payout/PayoutsRequestDTO"
import { MessagePattern } from '@nestjs/microservices';

@Controller('returns')
export class ReturnController {

    constructor(private payoutService: PayoutService) {
    }
    @MessagePattern()
    async getAll(
        source: string,
        destination: string,
        from: Date, to: Date,
        pageBefore: string, pageAfter: string,
        pageSize: number): Promise<ApiResponse<IPayoutResponseDTO>> {
        try {
            var payoutFilter = new PayoutsRequestDTO()
            payoutFilter.source = source
            payoutFilter.destination = destination
            payoutFilter.from = from
            payoutFilter.to = to
            payoutFilter.pageBefore = pageBefore
            payoutFilter.pageAfter = pageAfter
            payoutFilter.pageSize = pageSize
            const msg = await this.payoutService.getAllReturnPayouts(payoutFilter)
            return msg
        }
        catch (e: any) {

            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
}