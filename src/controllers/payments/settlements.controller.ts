import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import MultipleObjectFilterDTO from "src/DTO/MultipleObjectFilterDTO";
import SettlementResponseDTO from "src/DTO/Settlement/SettlementResponseDTO";
import ApiResponse from "../../utils/HelperClasses/ApiResponse";
import ResponseHelper from "../../utils/HelperClasses/ResponseHelper";
import SettlementService from "./settlement.service";

@Controller('settlement')
export class SettlementController {

    constructor(private settlementService: SettlementService) {
    }

    @Get('')
    async getAll(
    @Query('from') from: Date, @Query('to') to: Date,
    @Query('pageBefore') pageBefore: string, @Query('pageAfter') pageAfter: string, 
    @Query('pageSize') pageSize: number): Promise<ApiResponse<SettlementResponseDTO>> {
        try {
            var settlement = new MultipleObjectFilterDTO()
            settlement.from = from
            settlement.to = to
            settlement.pageBefore = pageBefore
            settlement.pageAfter = pageAfter
            settlement.pageSize = pageSize
            const msg = await this.settlementService.getAll(settlement)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
    @Get('/:id')
    async get(
    @Param('id') id: string): Promise<ApiResponse<SettlementResponseDTO>> {
        try {
            const msg = await this.settlementService.get(id)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
}