import { Controller, Get } from "@nestjs/common";
import PublicService from "./public.service";

@Controller('public')
export class PublicController {

    constructor(private publicService: PublicService) {
        
    }

    @Get()
    async get() {
        let response = await this.publicService.get()
        return response
    }
}