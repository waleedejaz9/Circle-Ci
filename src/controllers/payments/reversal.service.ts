import { Injectable } from "@nestjs/common";
import MultipleObjectFilterDTO from "src/DTO/MultipleObjectFilterDTO";
import ReversalResponseDTO from "src/DTO/Reversal/ReversalResponseDTO";
import ReversalkResponseDTO from "src/DTO/Reversal/ReversalResponseDTO";
import ApiResponse from "src/utils/HelperClasses/ApiResponse";
import { DataService } from "src/utils/Services/DataService";

@Injectable()
export default class ReversalService {

    constructor(
        private dataService: DataService
        ) {

    }

    /**
     * Get Reversals through circle api
     * @returns {ReversalResponseDTO} ReversalResponseDTO response from circle api
     */
     async getAll(filter: MultipleObjectFilterDTO): Promise<ApiResponse<ReversalResponseDTO>> {
        try {
            let result = await this.dataService.getAllReversal(filter);
            return result
        } catch(e: any) {
            return e
        }
    }
}