import { Injectable } from "@nestjs/common"
import BalanceResponseDTO from "src/DTO/Balance/BalanceResponseDTO"
import ApiResponse from "src/utils/HelperClasses/ApiResponse"
import { DataService } from "src/utils/Services/DataService"
import BaseService from "src/utils/HelperClasses/BaseService";


@Injectable()
export default class BalanceService extends BaseService {

    constructor() {
        super()
    }

    /**
     * Get Balances through circle api
     * @returns {BalanceResponseDTO} BalanceResponseDTO response from circle api
     */
    async getAll(): Promise<ApiResponse<BalanceResponseDTO>> {
        try {
            return this.client.send<ApiResponse<BalanceResponseDTO>, any>('/all', '').toPromise();
        } catch (e: any) {
            return e
        }
    }
}