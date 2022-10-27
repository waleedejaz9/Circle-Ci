import { Injectable } from "@nestjs/common"
import { DataService } from "../../utils/Services/DataService"
import ApiResponse from "../../utils/HelperClasses/ApiResponse"
import TransferResponseDTO from "src/DTO/Transfers/TransferResponseDTO"
import TransfersRequestDTO from "src/DTO/Transfers/TransferRequestDTO"
import TransferMultipleFilterDTO from "src/DTO/Transfers/TransferMultipleFilterDTO"
import BaseService from "src/utils/HelperClasses/BaseService"

@Injectable()
export class TransferService extends BaseService {

    constructor() {
        super()
    }

    /**
     * Get Transfer through circle api
     * @param {id} string Get particular Transfer
     * @returns {ITransferResponseDTO} response from circle api
     */
    async getTransfer(id: string): Promise<ApiResponse<TransferResponseDTO>> {
        try {
            return this.client.send<ApiResponse<TransferResponseDTO>, string>('/get/:id', id).toPromise();
        } catch (e: any) {
            return e
        }
    }

    /**
     * Get All Transfer through circle api
     * @param {TransferFilter} TransfersRequestDTO filter object for retrieving Transfers
     * @returns {TransferResponseDTO} response from circle api
     */
    async getAllTransfer(transferFilter: TransferMultipleFilterDTO): Promise<ApiResponse<TransferResponseDTO>> {
        try {
            return this.client.send<ApiResponse<TransferResponseDTO>, TransferMultipleFilterDTO>('/all', transferFilter).toPromise();
        } catch (e: any) {
            return e
        }
    }

    /**
     * Create Transfer through circle api
     * @param {transfer} TransfersRequestDTO create Transfer object
     * @returns {TransferResponseDTO} response from circle api
     */
    async createTransfer(transfer: TransfersRequestDTO): Promise<ApiResponse<TransferResponseDTO>> {
        try {
            return this.client.send<ApiResponse<TransferResponseDTO>, TransfersRequestDTO>('/create', transfer).toPromise();
        } catch (e: any) {
            return e
        }
    }
}