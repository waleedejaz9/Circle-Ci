import { Controller, Get, Query } from "@nestjs/common";
import MultipleObjectFilterDTO from "src/DTO/MultipleObjectFilterDTO";
import ReversalResponseDTO from "src/DTO/Reversal/ReversalResponseDTO";
import ApiResponse from "../../utils/HelperClasses/ApiResponse";
import ResponseHelper from "../../utils/HelperClasses/ResponseHelper";
import ReversalService from "./Reversal.service";

@Controller('reversal')
export class ReversalController {

    constructor(private reversalService: ReversalService) {
    }

    @Get('getAll')
    async getAll(
    @Query('from') from?: Date, @Query('to') to?: Date,
    @Query('pageBefore') pageBefore?: string, @Query('pageAfter') pageAfter?: string, 
    @Query('pageSize') pageSize?: number): Promise<ApiResponse<ReversalResponseDTO>> {
        try {
            var Reversal = new MultipleObjectFilterDTO()
            Reversal.from = from
            Reversal.to = to
            Reversal.pageBefore = pageBefore
            Reversal.pageAfter = pageAfter
            Reversal.pageSize = pageSize
            const msg = await this.reversalService.getAll(Reversal)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
}