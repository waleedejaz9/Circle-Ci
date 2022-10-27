import { Injectable } from "@nestjs/common"
import MultipleObjectFilterDTO from "src/DTO/MultipleObjectFilterDTO"
import ChargeBackResponseDTO from "src/DTO/ChargeBack/ChargeBackResponseDTO"
import ApiResponse from "src/utils/HelperClasses/ApiResponse"
import { DataService } from "src/utils/Services/DataService"
import BaseService from "src/utils/HelperClasses/BaseService"

@Injectable()
export default class ChargeBackService extends BaseService {

    constructor() {
        super()
    }

    /**
     * Get ChargeBack through circle api
     * @param {id} string Id for particular chargeback
     * @returns {ChargeBackResponseDTO} ChargeBackResponseDTO response from circle api
     */
    async get(id: string): Promise<ApiResponse<ChargeBackResponseDTO>> {
        try {
            return this.client.send<ApiResponse<ChargeBackResponseDTO>, string>('/get/:id', id).toPromise();
        } catch (e: any) {
            return e
        }
    }

    /**
     * Get ChargeBacks through circle api
     * @returns {ChargeBackResponseDTO} ChargeBackResponseDTO response from circle api
     */
    async getAll(filter: MultipleObjectFilterDTO): Promise<ApiResponse<ChargeBackResponseDTO>> {
        try {
            return this.client.send<ApiResponse<ChargeBackResponseDTO>, MultipleObjectFilterDTO>('/all', filter).toPromise();
        } catch (e: any) {
            return e
        }
    }
}