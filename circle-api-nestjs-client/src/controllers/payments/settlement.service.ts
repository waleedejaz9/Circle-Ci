import { Injectable } from "@nestjs/common"
import MultipleObjectFilterDTO from "src/DTO/MultipleObjectFilterDTO"
import SettlementResponseDTO from "src/DTO/Settlement/SettlementResponseDTO"
import ApiResponse from "src/utils/HelperClasses/ApiResponse"
import BaseService from "src/utils/HelperClasses/BaseService"
import { DataService } from "src/utils/Services/DataService"

@Injectable()
export default class SettlementService extends BaseService {

    constructor() {
        super()
    }

    /**
     * Get Settlement through circle api
     * @param {id} string Id for particular settlement
     * @returns {SettlementResponseDTO} SettlementResponseDTO response from circle api
     */
    async get(id: string): Promise<ApiResponse<SettlementResponseDTO>> {
        try {
            return this.client.send<ApiResponse<SettlementResponseDTO>, string>('/get/:id', id).toPromise();
        } catch (e: any) {
            return e
        }
    }

    /**
     * Get Settlements through circle api
     * @returns {SettlementResponseDTO} SettlementResponseDTO response from circle api
     */
    async getAll(filter: MultipleObjectFilterDTO): Promise<ApiResponse<SettlementResponseDTO>> {
        try {
            return this.client.send<ApiResponse<SettlementResponseDTO>, MultipleObjectFilterDTO>('/all', filter).toPromise();
        } catch (e: any) {
            return e
        }
    }
}