import { Injectable } from "@nestjs/common";
import MultipleObjectFilterDTO from "src/DTO/MultipleObjectFilterDTO";
import ChargeBackResponseDTO from "src/DTO/ChargeBack/ChargeBackResponseDTO";
import ApiResponse from "src/utils/HelperClasses/ApiResponse";
import { DataService } from "src/utils/Services/DataService";

@Injectable()
export default class ChargeBackService {

    constructor(
        private dataService: DataService
        ) {

    }

    /**
     * Get ChargeBack through circle api
     * @param {id} string Id for particular chargeback
     * @returns {ChargeBackResponseDTO} ChargeBackResponseDTO response from circle api
     */
     async get(id: string): Promise<ApiResponse<ChargeBackResponseDTO>> {
        try {
            let result = await this.dataService.getChargeBack(id);
            return result
        } catch(e: any) {
            return e
        }
    }

    /**
     * Get ChargeBacks through circle api
     * @returns {ChargeBackResponseDTO} ChargeBackResponseDTO response from circle api
     */
     async getAll(filter: MultipleObjectFilterDTO): Promise<ApiResponse<ChargeBackResponseDTO>> {
        try {
            let result = await this.dataService.getAllChargeBacks(filter);
            return result
        } catch(e: any) {
            return e
        }
    }
}