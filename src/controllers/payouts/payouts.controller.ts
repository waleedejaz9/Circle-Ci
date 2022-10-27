import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import ApiResponse from "../../utils/HelperClasses/ApiResponse";
import ResponseHelper from "../../utils/HelperClasses/ResponseHelper";
import { PayoutService } from "./payouts.service";
import IPayoutResponseDTO from "src/DTO/Payout/IPayoutResponseDTO";
import PayoutsRequestDTO from "src/DTO/Payout/PayoutsRequestDTO";
import PayoutCreateRequestDTO from "src/DTO/Payout/PayoutCreateRequestDTO";

@Controller('payout')
export class PayoutController {

    constructor(private payoutService: PayoutService) {
    }

    @Get('')
    async getAll(
        @Query('source') source: string,
        @Query('destination') destination: string,
        @Query('from') from: Date, @Query('to') to: Date,
        @Query('pageBefore') pageBefore: string, @Query('pageAfter') pageAfter: string, 
        @Query('pageSize') pageSize: number): Promise<ApiResponse<IPayoutResponseDTO>> {
        try {
            var payoutFilter = new PayoutsRequestDTO()
            payoutFilter.source = source
            payoutFilter.destination = destination
            payoutFilter.from = from
            payoutFilter.to = to
            payoutFilter.pageBefore = pageBefore
            payoutFilter.pageAfter = pageAfter
            payoutFilter.pageSize = pageSize
            const msg = await this.payoutService.getAllPayout(payoutFilter)
            return msg
        }
        catch (e: any) {
            
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }

    @Get(':id')
    async getPayout(@Param('id') id: string): Promise<ApiResponse<IPayoutResponseDTO>> {
        try {
            const msg = await this.payoutService.getPayout(id)
 
            return msg
        }
        catch (e: any) {
            
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }

    @Post()
    async payout(@Body() payout: PayoutCreateRequestDTO) {
        try {
            const msg = await this.payoutService.createPayout(payout)
            return msg
        }
        catch (e: any) {
            return e
        }
    }
}