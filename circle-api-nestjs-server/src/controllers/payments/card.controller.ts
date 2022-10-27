import { Body, Controller, Get, Param, Post, Put, Query } from "@nestjs/common"
import ApiResponse from "../../utils/HelperClasses/ApiResponse"
import CardService from "./card.service"
import ResponseHelper from "../../utils/HelperClasses/ResponseHelper"
import CardRequestDTO from '../../DTO/Card/CardRequestDTO'
import CardResponseDTO from '../../DTO/Card/CardResponseDTO'
import CardsRequestDTO from "src/DTO/Card/CardsRequestDTO"
import CardUpdateRequestDTO from "src/DTO/Card/CardUpdateRequestDTO"
import CardEncryptedDataDTO from "src/DTO/Card/CardEncryptedDataDTO"
import { MessagePattern } from '@nestjs/microservices';
import ICardDetails from "src/DTO/Card/ICardDetails"
import CardUpdateWrapperRequestDTO from "src/DTO/Card/CardUpdateWrapperRequestDTO"

@Controller('card')
export class CardController {

    constructor(private cardService: CardService) {
    }
    @MessagePattern('/all')
    async getAll(cards: CardsRequestDTO): Promise<ApiResponse<CardResponseDTO>> {
        try {
            const msg = await this.cardService.getAll(cards)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
    @MessagePattern('/details')
    async getCard(dataToEncrypt: ICardDetails): Promise<ApiResponse<CardEncryptedDataDTO>> {
        try {
            const msg = await this.cardService.encryptUserCardDetails({
                number: dataToEncrypt.number,
                cvv: dataToEncrypt.cvv
            })
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
    @MessagePattern('/get/:id')
    async get(id: string): Promise<ApiResponse<CardResponseDTO>> {
        try {
            const msg = await this.cardService.get(id)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
    @MessagePattern('/create')
    async create(card: CardRequestDTO): Promise<ApiResponse<CardResponseDTO>> {
        try {
            const msg = await this.cardService.create(card)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
    @MessagePattern('/update')
    async update(card: CardUpdateWrapperRequestDTO): Promise<ApiResponse<CardResponseDTO>> {
        try {
            const msg = await this.cardService.update(card.id, card.card)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
}