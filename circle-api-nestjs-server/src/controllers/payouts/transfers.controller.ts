import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common"
import TransferMultipleFilterDTO from "src/DTO/Transfers/TransferMultipleFilterDTO"
import TransfersRequestDTO from "src/DTO/Transfers/TransferRequestDTO"
import TransferResponseDTO from "src/DTO/Transfers/TransferResponseDTO"
import ApiResponse from "../../utils/HelperClasses/ApiResponse"
import ResponseHelper from "../../utils/HelperClasses/ResponseHelper"
import { TransferService } from "./transfers.service"
import { MessagePattern } from '@nestjs/microservices';

@Controller('transfer')
export class TransferController {

    constructor(private transferService: TransferService) {
    }
    @MessagePattern('/all')
    async getAll(filter: TransferMultipleFilterDTO): Promise<ApiResponse<TransferResponseDTO>> {
        try {
            const msg = await this.transferService.getAllTransfer(filter)
            return msg
        }
        catch (e: any) {

            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
    @MessagePattern('/get/:id')
    async getTransfer(id: string): Promise<ApiResponse<TransferResponseDTO>> {
        try {
            const msg = await this.transferService.getTransfer(id)

            return msg
        }
        catch (e: any) {

            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
    @MessagePattern('/create')
    async create(transfer: TransfersRequestDTO) {
        try {
            const msg = await this.transferService.createTransfer(transfer)
            return msg
        }
        catch (e: any) {
            return e
        }
    }
}