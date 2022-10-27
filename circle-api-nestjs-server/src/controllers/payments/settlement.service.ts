import { Injectable } from "@nestjs/common"
import MultipleObjectFilterDTO from "src/DTO/MultipleObjectFilterDTO"
import SettlementResponseDTO from "src/DTO/Settlement/SettlementResponseDTO"
import ApiResponse from "src/utils/HelperClasses/ApiResponse"
import { DataService } from "src/utils/Services/DataService"

@Injectable()
export default class SettlementService {

    constructor(
        private dataService: DataService
        ) {

    }

    /**
     * Get Settlement through circle api
     * @param {id} string Id for particular settlement
     * @returns {SettlementResponseDTO} SettlementResponseDTO response from circle api
     */
     async get(id: string): Promise<ApiResponse<SettlementResponseDTO>> {
        try {
            let result = await this.dataService.getSettlement(id)
            return result
        } catch(e: any) {
            return e
        }
    }

    /**
     * Get Settlements through circle api
     * @returns {SettlementResponseDTO} SettlementResponseDTO response from circle api
     */
     async getAll(filter: MultipleObjectFilterDTO): Promise<ApiResponse<SettlementResponseDTO>> {
        try {
            let result = await this.dataService.getAllSettlements(filter)
            return result
        } catch(e: any) {
            return e
        }
    }
}