import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common"
import TransferMultipleFilterDTO from "src/DTO/Transfers/TransferMultipleFilterDTO"
import TransfersRequestDTO from "src/DTO/Transfers/TransferRequestDTO"
import TransferResponseDTO from "src/DTO/Transfers/TransferResponseDTO"
import ApiResponse from "../../utils/HelperClasses/ApiResponse"
import ResponseHelper from "../../utils/HelperClasses/ResponseHelper"
import { TransferService } from "./transfers.service"

@Controller('transfer')
export class TransferController {

    constructor(private transferService: TransferService) {
    }

    @Get('')
    async getAll(
        @Query('walletId') walletId: string,
        @Query('sourceWalletId') sourceWalletId: string,
        @Query('destinationWalletId') destinationWalletId: string,
        @Query('from') from: Date, @Query('to') to: Date,
        @Query('pageBefore') pageBefore: string, @Query('pageAfter') pageAfter: string, 
        @Query('pageSize') pageSize: number): Promise<ApiResponse<TransferResponseDTO>> {
        try {
            var transferFilter = new TransferMultipleFilterDTO()
            transferFilter.walletId = walletId
            transferFilter.sourceWalletId = sourceWalletId
            transferFilter.destinationWalletId = destinationWalletId
            transferFilter.from = from
            transferFilter.to = to
            transferFilter.pageBefore = pageBefore
            transferFilter.pageAfter = pageAfter
            transferFilter.pageSize = pageSize
            const msg = await this.transferService.getAllTransfer(transferFilter)
            return msg
        }
        catch (e: any) {
            
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }

    @Get(':id')
    async getTransfer(@Param('id') id: string): Promise<ApiResponse<TransferResponseDTO>> {
        try {
            const msg = await this.transferService.getTransfer(id)
 
            return msg
        }
        catch (e: any) {
            
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }

    @Post()
    async create(@Body() transfer: TransfersRequestDTO) {
        try {
            const msg = await this.transferService.createTransfer(transfer)
            return msg
        }
        catch (e: any) {
            return e
        }
    }
}