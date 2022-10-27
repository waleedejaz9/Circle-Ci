import { Body, Controller, Get, Param, Post, Put, Query } from "@nestjs/common"
import ApiResponse from "../../utils/HelperClasses/ApiResponse"
import CardService from "./card.service"
import ResponseHelper from "../../utils/HelperClasses/ResponseHelper"
import CardRequestDTO from '../../DTO/Card/CardRequestDTO'
import CardResponseDTO from '../../DTO/Card/CardResponseDTO'
import CardsRequestDTO from "src/DTO/Card/CardsRequestDTO"
import CardUpdateRequestDTO from "src/DTO/Card/CardUpdateRequestDTO"
import WalletRequestDTO from "src/DTO/Wallet/WalletRequestDTO"
import WalletService from "./wallet.service"
import WalletResponseDTO from "src/DTO/Wallet/WalletResponseDTO"
import WalletsRequestDTO from "src/DTO/Wallet/WalletsRequestDTO"
import WalletAddressRequestDTO from "src/DTO/Wallet/WalletAddressRequestDTO"
import WalletAddressResponseDTO from "src/DTO/Wallet/WalletAddressResponseDTO"
import { MessagePattern } from '@nestjs/microservices';
import WalletsWrapperRequestDTO from "src/DTO/Wallet/WalletsWrapperRequestDTO"
import WalletsWrapperAddressRequestDTO from "src/DTO/Wallet/WalletsWrapperAddressRequestDTO"


@Controller('wallet')
export class WalletController {

    constructor(private walletService: WalletService) {
    }
    @MessagePattern('/all')
    async getAll(
        wallets: WalletsRequestDTO): Promise<ApiResponse<WalletResponseDTO>> {
        try {
            const msg = await this.walletService.getAll(wallets)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
    @MessagePattern('/addresses/:id')
    async getByAddressesId(id: string): Promise<ApiResponse<WalletResponseDTO>> {
        try {
            const msg = await this.walletService.get(id)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
    @MessagePattern('/get/:id')
    async get(id: string): Promise<ApiResponse<WalletResponseDTO>> {
        try {
            const msg = await this.walletService.get(id)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
    @MessagePattern('/addresses/:id')
    async createWalletAddresses(wallet: WalletsWrapperAddressRequestDTO): Promise<ApiResponse<WalletAddressResponseDTO>> {
        try {
            const msg = await this.walletService.walletAddresses(wallet.id, wallet.wallets)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
    @MessagePattern('/create')
    async create(wallet: WalletRequestDTO): Promise<ApiResponse<WalletResponseDTO>> {
        try {
            const msg = await this.walletService.create(wallet)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
}