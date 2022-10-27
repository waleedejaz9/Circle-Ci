import { Injectable } from "@nestjs/common";
import CardRequestDTO from "src/DTO/Card/CardRequestDTO";
import CardResponseDTO from "src/DTO/Card/CardResponseDTO";
import CardsRequestDTO from "src/DTO/Card/CardsRequestDTO";
import CardUpdateRequestDTO from "src/DTO/Card/CardUpdateRequestDTO";
import ApiResponse from "src/utils/HelperClasses/ApiResponse";
import { DataService } from "src/utils/Services/DataService";

@Injectable()
export default class CardService {

    constructor(
        private dataService: DataService
        ) {

    }

    /**
     * Get Card through circle api
     * @param {id} string Id for particular card
     * @returns {CardResponseDTO} response from circle api
     */
     async get(id: string): Promise<ApiResponse<CardResponseDTO>> {
        try {
            let result = await this.dataService.getCard(id);
            return result
        } catch(e: any) {
            return e
        }
    }

    /**
     * Get List of Cards through circle api
     * @param {card} CardsRequestDTO Get All Cards
     * @returns {CardResponseDTO} response from circle api
     */
     async getAll(card: CardsRequestDTO): Promise<ApiResponse<CardResponseDTO>> {
        try {
            let result = await this.dataService.getAllCards(card);
            return result
        } catch(e: any) {
            return e
        }
    }

    /**
     * Create Card through circle api
     * @param {card} CardRequestDTO Create particular Card
     * @returns {CardResponseDTO} response from circle api
     */
     async create(card: CardRequestDTO): Promise<ApiResponse<CardResponseDTO>> {
        try {
            let result = await this.dataService.createCard(card);
            return result
        } catch(e: any) {
            return e
        }
    }

    /**
     * Update Card through circle api
     * @param {card} CardUpdateRequestDTO Update particular Card
     * @returns {CardResponseDTO} response from circle api
     */
     async update(id: string, card: CardUpdateRequestDTO): Promise<ApiResponse<CardResponseDTO>> {
        try {
            let result = await this.dataService.updateCard(id, card);
            return result
        } catch(e: any) {
            return e
        }
    }
}