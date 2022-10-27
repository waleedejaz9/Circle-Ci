import { Injectable } from "@nestjs/common";
import IPublicKey from "src/DTO/IPublicKey";
import ApiResponse from "src/utils/HelperClasses/ApiResponse";
import BaseService from "src/utils/HelperClasses/BaseService";
import { DataService } from "src/utils/Services/DataService";

@Injectable()
export default class PublicService extends BaseService {

    constructor() {
        super()
    }
    async get() {
        return this.client.send<ApiResponse<IPublicKey>, any>('/get', '').toPromise();
    }

}