import { Injectable } from "@nestjs/common";
import { DataService } from "src/utils/Services/DataService";


@Injectable()
export default class PublicService {

    constructor(private dataService: DataService) {
        
        
    }
    async get() {
        let result = await this.dataService.getPublicKey()
        return result
    }

}