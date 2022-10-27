import { Injectable } from "@nestjs/common";
import { DataService } from "../../utils/Services/DataService";
import ApiResponse from "../../utils/HelperClasses/ApiResponse";
import IPayoutResponseDTO from "src/DTO/Payout/IPayoutResponseDTO";
import PayoutsRequestDTO from "src/DTO/Payout/PayoutsRequestDTO";
import PayoutCreateRequestDTO from "src/DTO/Payout/PayoutCreateRequestDTO";

@Injectable()
export class PayoutService {

    constructor(
        private dataService: DataService
        ) {

    }

    /**
     * Get Payout through circle api
     * @param {id} string Get particular Payout
     * @returns {IPayoutResponseDTO} response from circle api
     */
    async getPayout(id: string): Promise<ApiResponse<IPayoutResponseDTO>> {
        try {
            let result = await this.dataService.getPayout(id);
            return result
        } catch(e: any) {

            return e
        }
    }

    /**
     * Get All Payout through circle api
     * @param {payoutFilter} PayoutsRequestDTO filter object for retrieving Payouts
     * @returns {IPayoutResponseDTO} response from circle api
     */
     async getAllPayout(payoutFilter: PayoutsRequestDTO): Promise<ApiResponse<IPayoutResponseDTO>> {
        try {
            let result = await this.dataService.getAllPayout(payoutFilter);
            return result
        } catch(e: any) {
            return e
        }
    }

    /**
     * Get All Payout through circle api
     * @param {payoutFilter} PayoutsRequestDTO filter object for retrieving Payouts
     * @returns {IPayoutResponseDTO} response from circle api
     */
     async getAllReturnPayouts(payoutFilter: PayoutsRequestDTO): Promise<ApiResponse<IPayoutResponseDTO>> {
        try {
            let result = await this.dataService.getAllReturnPayout(payoutFilter);
            return result
        } catch(e: any) {
            return e
        }
    }

    /**
     * Create Payout through circle api
     * @param {payout} PayoutCreateRequestDTO create payout object
     * @returns {IPayoutResponseDTO} response from circle api
     */
     async createPayout(payout: PayoutCreateRequestDTO): Promise<ApiResponse<IPayoutResponseDTO>> {
        try {
            let result = await this.dataService.createPayout(payout);
            return result
        } catch(e: any) {
            return e
        }
    }     
}