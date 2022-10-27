import { Controller, Get } from "@nestjs/common";
import PublicService from "./public.service";
import { MessagePattern } from '@nestjs/microservices';

@Controller('public')
export class PublicController {

    constructor(private publicService: PublicService) {

    }
    @MessagePattern('/get')
    async get() {
        let response = await this.publicService.get()
        return response
    }
}