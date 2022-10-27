import { Injectable } from "@nestjs/common"
import MultipleObjectFilterDTO from "src/DTO/MultipleObjectFilterDTO"
import ReversalResponseDTO from "src/DTO/Reversal/ReversalResponseDTO"
import ReversalkResponseDTO from "src/DTO/Reversal/ReversalResponseDTO"
import ApiResponse from "src/utils/HelperClasses/ApiResponse"
import BaseService from "src/utils/HelperClasses/BaseService"
import { DataService } from "src/utils/Services/DataService"

@Injectable()
export default class ReversalService extends BaseService {

    constructor() {
        super()
    }

    /**
     * Get Reversals through circle api
     * @returns {ReversalResponseDTO} ReversalResponseDTO response from circle api
     */
    async getAll(filter: MultipleObjectFilterDTO): Promise<ApiResponse<ReversalResponseDTO>> {
        try {
            return this.client.send<ApiResponse<ReversalResponseDTO>, MultipleObjectFilterDTO>('/all', filter).toPromise();
        } catch (e: any) {
            return e
        }
    }
}