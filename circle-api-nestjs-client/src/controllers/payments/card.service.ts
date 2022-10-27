import { Injectable } from '@nestjs/common';
import CardRequestDTO from 'src/DTO/Card/CardRequestDTO';
import CardResponseDTO from 'src/DTO/Card/CardResponseDTO';
import CardsRequestDTO from 'src/DTO/Card/CardsRequestDTO';
import CardUpdateRequestDTO from 'src/DTO/Card/CardUpdateRequestDTO';
import ApiResponse from 'src/utils/HelperClasses/ApiResponse';
import { DataService } from 'src/utils/Services/DataService';
import { readMessage, decrypt, readKey, createMessage, encrypt } from 'openpgp';
import PublicService from '../public.service';
import ICardDetails from 'src/DTO/Card/ICardDetails';
import ResponseHelper from 'src/utils/HelperClasses/ResponseHelper';
import CardEncryptedDataDTO from 'src/DTO/Card/CardEncryptedDataDTO';
import { atob } from 'atob';
import BaseService from 'src/utils/HelperClasses/BaseService';

@Injectable()
export default class CardService extends BaseService {
  constructor(
    private publicService: PublicService,
  ) {
    super()
  }

  async encryptUserCardDetails(dataToEncrypt: ICardDetails) {
    try {
      return this.client.send<ApiResponse<CardEncryptedDataDTO>, ICardDetails>('/details', dataToEncrypt).toPromise();
    } catch (e) {
      return e
    }
  }

  /**
   * Get Card through circle api
   * @param {id} string Id for particular card
   * @returns {CardResponseDTO} response from circle api
   */
  async get(id: string): Promise<ApiResponse<CardResponseDTO>> {
    try {
      return this.client.send<ApiResponse<CardResponseDTO>, string>('/get/:id', id).toPromise();
    } catch (e: any) {
      return e;
    }
  }

  /**
   * Get List of Cards through circle api
   * @param {card} CardsRequestDTO Get All Cards
   * @returns {CardResponseDTO} response from circle api
   */
  async getAll(card: CardsRequestDTO): Promise<ApiResponse<CardResponseDTO>> {
    try {
      return this.client.send<ApiResponse<CardResponseDTO>, CardsRequestDTO>('/all', card).toPromise();
    } catch (e: any) {
      return e;
    }
  }

  /**
   * Create Card through circle api
   * @param {card} CardRequestDTO Create particular Card
   * @returns {CardResponseDTO} response from circle api
   */
  async create(card: CardRequestDTO): Promise<ApiResponse<CardResponseDTO>> {
    try {
      return this.client.send<ApiResponse<CardResponseDTO>, CardRequestDTO>('/create', card).toPromise();
    } catch (e: any) {
      return e;
    }
  }

  /**
   * Update Card through circle api
   * @param {card} CardUpdateRequestDTO Update particular Card
   * @returns {CardResponseDTO} response from circle api
   */
  async update(
    id: string,
    card: CardUpdateRequestDTO,
  ): Promise<ApiResponse<CardResponseDTO>> {
    try {
      return this.client.send<ApiResponse<CardResponseDTO>, any>('/update', { id, card }).toPromise();
    } catch (e: any) {
      return e;
    }
  }
}
