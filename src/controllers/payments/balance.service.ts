import { Injectable } from "@nestjs/common";
import BalanceResponseDTO from "src/DTO/Balance/BalanceResponseDTO";
import ApiResponse from "src/utils/HelperClasses/ApiResponse";
import { DataService } from "src/utils/Services/DataService";

@Injectable()
export default class BalanceService {

    constructor(private dataService: DataService) {
    }

    /**
     * Get Balances through circle api
     * @returns {BalanceResponseDTO} BalanceResponseDTO response from circle api
     */
     async getAll(): Promise<ApiResponse<BalanceResponseDTO>> {
        try {
            let result = await this.dataService.getAllBalances();
            return result
        } catch(e: any) {
            return e
        }
    }
}