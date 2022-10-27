import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common"
import MultipleObjectFilterDTO from "src/DTO/MultipleObjectFilterDTO"
import ChargeBackResponseDTO from "src/DTO/ChargeBack/ChargeBackResponseDTO"
import ApiResponse from "../../utils/HelperClasses/ApiResponse"
import ResponseHelper from "../../utils/HelperClasses/ResponseHelper"
import ChargeBackService from "./ChargeBack.service"
import { MessagePattern } from '@nestjs/microservices';

@Controller('chargeBack')
export class ChargeBackController {

    constructor(private chargeBackService: ChargeBackService) {
    }
    @MessagePattern('/all')
    async getAll(filter: MultipleObjectFilterDTO): Promise<ApiResponse<ChargeBackResponseDTO>> {
        try {
            const msg = await this.chargeBackService.getAll(filter)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
    @MessagePattern('/get/:id')
    async get(id: string): Promise<ApiResponse<ChargeBackResponseDTO>> {
        try {
            const msg = await this.chargeBackService.get(id)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
}