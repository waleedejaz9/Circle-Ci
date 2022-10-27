import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common"
import MultipleObjectFilterDTO from "src/DTO/MultipleObjectFilterDTO"
import SettlementResponseDTO from "src/DTO/Settlement/SettlementResponseDTO"
import ApiResponse from "../../utils/HelperClasses/ApiResponse"
import ResponseHelper from "../../utils/HelperClasses/ResponseHelper"
import SettlementService from "./settlement.service"
import { MessagePattern } from '@nestjs/microservices';

@Controller('settlement')
export class SettlementController {

    constructor(private settlementService: SettlementService) {
    }
    @MessagePattern('/all')
    async getAll(settlement: MultipleObjectFilterDTO
    ): Promise<ApiResponse<SettlementResponseDTO>> {
        try {
            const msg = await this.settlementService.getAll(settlement)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
    @MessagePattern('/get/:id')
    async get(
        id: string): Promise<ApiResponse<SettlementResponseDTO>> {
        try {
            const msg = await this.settlementService.get(id)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
}