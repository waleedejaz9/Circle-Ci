import { Body, Controller, Get, Param, Post, Put, Query } from "@nestjs/common"
import ApiResponse from "../../utils/HelperClasses/ApiResponse"
import CardService from "./card.service"
import ResponseHelper from "../../utils/HelperClasses/ResponseHelper"
import CardRequestDTO from '../../DTO/Card/CardRequestDTO'
import CardResponseDTO from '../../DTO/Card/CardResponseDTO'
import CardsRequestDTO from "src/DTO/Card/CardsRequestDTO"
import CardUpdateRequestDTO from "src/DTO/Card/CardUpdateRequestDTO"
import CardEncryptedDataDTO from "src/DTO/Card/CardEncryptedDataDTO"


@Controller('card')
export class CardController {

    constructor(private cardService: CardService) {
    }

    @Get()
    async getAll(
        @Query('pageBefore') pageBefore: string, @Query('pageAfter') pageAfter: string,
        @Query('pageSize') pageSize: number): Promise<ApiResponse<CardResponseDTO>> {
        try {
            var cards = new CardsRequestDTO()
            cards.pageBefore = pageBefore
            cards.pageAfter = pageAfter
            cards.pageSize = pageSize
            const msg = await this.cardService.getAll(cards)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }

    @Get('/details')
    async getCard(@Query('number') number: string, @Query('cvv') cvv: string): Promise<ApiResponse<CardEncryptedDataDTO>> {
        try {
            const msg = await this.cardService.encryptUserCardDetails({
                number,
                cvv
            })
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }

    @Get(':id')
    async get(@Param('id') id: string): Promise<ApiResponse<CardResponseDTO>> {
        try {
            const msg = await this.cardService.get(id)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
    @Post()
    async create(@Body() card: CardRequestDTO): Promise<ApiResponse<CardResponseDTO>> {
        try {
            const msg = await this.cardService.create(card)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() card: CardUpdateRequestDTO): Promise<ApiResponse<CardResponseDTO>> {
        try {
            const msg = await this.cardService.update(id, card)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
}