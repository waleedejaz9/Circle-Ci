import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common"
import MultipleObjectFilterDTO from "src/DTO/MultipleObjectFilterDTO"
import ChargeBackResponseDTO from "src/DTO/ChargeBack/ChargeBackResponseDTO"
import ApiResponse from "../../utils/HelperClasses/ApiResponse"
import ResponseHelper from "../../utils/HelperClasses/ResponseHelper"
import ChargeBackService from "./ChargeBack.service"

@Controller('chargeBack')
export class ChargeBackController {

    constructor(private chargeBackService: ChargeBackService) {
    }

    @Get()
    async getAll(
    @Query('from') from: Date, @Query('to') to: Date,
    @Query('pageBefore') pageBefore: string, @Query('pageAfter') pageAfter: string, 
    @Query('pageSize') pageSize: number): Promise<ApiResponse<ChargeBackResponseDTO>> {
        try {
            var ChargeBack = new MultipleObjectFilterDTO()
            ChargeBack.from = from
            ChargeBack.to = to
            ChargeBack.pageBefore = pageBefore
            ChargeBack.pageAfter = pageAfter
            ChargeBack.pageSize = pageSize
            const msg = await this.chargeBackService.getAll(ChargeBack)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
    @Get(':id')
    async get(
    @Param('id') id: string): Promise<ApiResponse<ChargeBackResponseDTO>> {
        try {
            const msg = await this.chargeBackService.get(id)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
}