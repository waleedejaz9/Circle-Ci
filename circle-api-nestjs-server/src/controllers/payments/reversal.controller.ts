import { Controller, Get, Query } from "@nestjs/common"
import MultipleObjectFilterDTO from "src/DTO/MultipleObjectFilterDTO"
import ReversalResponseDTO from "src/DTO/Reversal/ReversalResponseDTO"
import ApiResponse from "../../utils/HelperClasses/ApiResponse"
import ResponseHelper from "../../utils/HelperClasses/ResponseHelper"
import ReversalService from "./Reversal.service"
import { MessagePattern } from '@nestjs/microservices';

@Controller('reversal')
export class ReversalController {

    constructor(private reversalService: ReversalService) {
    }
    @MessagePattern('/all')
    async getAll(filter: MultipleObjectFilterDTO): Promise<ApiResponse<ReversalResponseDTO>> {
        try {
            const msg = await this.reversalService.getAll(filter)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
}