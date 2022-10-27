import { Injectable } from "@nestjs/common"
import CardRequestDTO from "src/DTO/Card/CardRequestDTO"
import CardResponseDTO from "src/DTO/Card/CardResponseDTO"
import CardsRequestDTO from "src/DTO/Card/CardsRequestDTO"
import CardUpdateRequestDTO from "src/DTO/Card/CardUpdateRequestDTO"
import WalletAddressRequestDTO from "src/DTO/Wallet/WalletAddressRequestDTO"
import WalletAddressResponseDTO from "src/DTO/Wallet/WalletAddressResponseDTO"
import WalletRequestDTO from "src/DTO/Wallet/WalletRequestDTO"
import WalletResponseDTO from "src/DTO/Wallet/WalletResponseDTO"
import WalletsRequestDTO from "src/DTO/Wallet/WalletsRequestDTO"
import ApiResponse from "src/utils/HelperClasses/ApiResponse"
import BaseService from "src/utils/HelperClasses/BaseService"
import { DataService } from "src/utils/Services/DataService"

@Injectable()
export default class WalletService extends BaseService {

    constructor() {
        super()
    }

    /**
     * Get Wallet through circle api
     * @param {id} string Id for particular wallet
     * @returns {WalletResponseDTO} WalletResponseDTO response from circle api
     */
    async get(id: string): Promise<ApiResponse<WalletResponseDTO>> {
        try {
            return this.client.send<ApiResponse<WalletResponseDTO>, string>('/get/:id', id).toPromise();
        } catch (e: any) {
            return e
        }
    }

    /**
     * Get Wallet through circle api
     * @returns {WalletResponseDTO} WalletResponseDTO response from circle api
     */
    async getAll(wallets: WalletsRequestDTO): Promise<ApiResponse<WalletResponseDTO>> {
        try {
            return this.client.send<ApiResponse<WalletResponseDTO>, WalletsRequestDTO>('/all', wallets).toPromise();
        } catch (e: any) {
            return e
        }
    }

    /**
     * Get Wallet Block Chain Addresses through circle api
     * @returns {WalletAddressResponseDTO} WalletAddressResponseDTO response from circle api
     */
    async getWalletAddresses(id: string, wallets: WalletsRequestDTO): Promise<ApiResponse<WalletAddressResponseDTO>> {
        try {
            return this.client.send<ApiResponse<WalletAddressResponseDTO>, any>('/blockchain/address', { id, wallets }).toPromise();
        } catch (e: any) {
            return e
        }
    }

    /**
     * Create Creates an end user wallet.
     * @param {wallet} WalletRequestDTO Create particular Wallet
     * @returns {WalletResponseDTO} response from circle api
     */
    async create(wallet: WalletRequestDTO): Promise<ApiResponse<WalletResponseDTO>> {
        try {
            return this.client.send<ApiResponse<WalletResponseDTO>, WalletRequestDTO>('/create', wallet).toPromise();
        } catch (e: any) {
            return e
        }
    }

    /**
     * Generates a new blockchain address for a wallet for a given currency/chain pair. 
     * Circle may reuse addresses on blockchains that support reuse. 
     * For example, if you're requesting two addresses for depositing USD and ETH, both on Ethereum, 
     * you may see the same Ethereum address returned. 
     * Depositing cryptocurrency to a generated address will credit the associated wallet with the value of the deposit.
     * @param {id} string to look into particular wallet
     * @param {wallet} WalletAddressRequestDTO Generate Particular Blockchain address
     * @returns {WalletAddressResponseDTO} WalletAddressResponseDTO response from circle api
     */
    async walletAddresses(id: string, wallet: WalletAddressRequestDTO): Promise<ApiResponse<WalletAddressResponseDTO>> {
        try {
            return this.client.send<ApiResponse<WalletAddressResponseDTO>, any>('/addresses', { id, wallet }).toPromise();
        } catch (e: any) {
            return e
        }
    }
}