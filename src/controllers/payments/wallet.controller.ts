import { Body, Controller, Get, Param, Post, Put, Query } from "@nestjs/common";
import ApiResponse from "../../utils/HelperClasses/ApiResponse";
import CardService from "./card.service";
import ResponseHelper from "../../utils/HelperClasses/ResponseHelper";
import CardRequestDTO from '../../DTO/Card/CardRequestDTO'
import CardResponseDTO from '../../DTO/Card/CardResponseDTO'
import CardsRequestDTO from "src/DTO/Card/CardsRequestDTO";
import CardUpdateRequestDTO from "src/DTO/Card/CardUpdateRequestDTO";
import WalletRequestDTO from "src/DTO/Wallet/WalletRequestDTO";
import WalletService from "./wallet.service";
import WalletResponseDTO from "src/DTO/Wallet/WalletResponseDTO";
import WalletsRequestDTO from "src/DTO/Wallet/WalletsRequestDTO";
import WalletAddressRequestDTO from "src/DTO/Wallet/WalletAddressRequestDTO";
import WalletAddressResponseDTO from "src/DTO/Wallet/WalletAddressResponseDTO";


@Controller('wallet')
export class WalletController {

    constructor(private walletService: WalletService) {
    }

    @Get('')
    async getAll(
    @Query('from') from: Date, @Query('to') to: Date,
    @Query('pageBefore') pageBefore: string, @Query('pageAfter') pageAfter: string, 
    @Query('pageSize') pageSize: number): Promise<ApiResponse<WalletResponseDTO>> {
        try {
            var wallets = new WalletsRequestDTO()
            wallets.from = from
            wallets.to = to
            wallets.pageBefore = pageBefore
            wallets.pageAfter = pageAfter
            wallets.pageSize = pageSize
            const msg = await this.walletService.getAll(wallets)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
    @Get('/addresses/:id')
    async getAddresses(
    @Param('id') id: string,
    @Query('from') from: Date, @Query('to') to: Date,
    @Query('pageBefore') pageBefore: string, @Query('pageAfter') pageAfter: string, 
    @Query('pageSize') pageSize: number): Promise<ApiResponse<WalletAddressResponseDTO>> {
        try {
            var wallets = new WalletsRequestDTO()
            wallets.from = from
            wallets.to = to
            wallets.pageBefore = pageBefore
            wallets.pageAfter = pageAfter
            wallets.pageSize = pageSize
            const msg = await this.walletService.getWalletBlockChainAddresses(id, wallets)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
    @Get('/:id')
    async get(@Param('id') id: string): Promise<ApiResponse<WalletResponseDTO>> {
        try {
            const msg = await this.walletService.get(id)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
    @Post('/addresses/:id')
    async createWalletAddresses(@Param('id') id: string, @Body() wallet: WalletAddressRequestDTO): Promise<ApiResponse<WalletAddressResponseDTO>> {
        try {
            const msg = await this.walletService.walletAddresses(id, wallet)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
    @Post()
    async create(@Body() wallet: WalletRequestDTO): Promise<ApiResponse<WalletResponseDTO>> {
        try {
            const msg = await this.walletService.create(wallet)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
}