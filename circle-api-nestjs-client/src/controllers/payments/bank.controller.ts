import { Body, Controller, Get, Param, Post } from "@nestjs/common"
import ApiResponse from "../../utils/HelperClasses/ApiResponse"
import { BankService } from "./Bank.service"
import ResponseHelper from "../../utils/HelperClasses/ResponseHelper"
import BankResponsetDTO from "src/DTO/Bank/BankResponseDTO"
import IWireBankAccountResponseDTO from "src/DTO/Bank/IInstructionsBankAccountResponseDTO"
import IAchBankAccountResponseDTO from "src/DTO/Bank/IAchBankAccountResponseDTO"
import BankRequestIBANDTO from "src/DTO/Bank/BankRequestIBANDTO"
import IInstructionsBankAccountResponseDTO from "src/DTO/Bank/IInstructionsBankAccountResponseDTO"

@Controller('bank')
export class BankController {

    constructor(private bankService: BankService) {
    }
    @Get('/wires/:id')
    async getWireBank(@Param('id') id: string): Promise<ApiResponse<BankResponsetDTO>> {
        try {
            const msg = await this.bankService.getWireBankAccount(id)
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }

    @Get('/wires/instructions/:id')
    async getWireBankInstructions(@Param('id') id: string): Promise<ApiResponse<IInstructionsBankAccountResponseDTO>> {
        try {
            const msg = await this.bankService.getWireBankAccountInstructions(id)

            return msg
        }
        catch (e: any) {

            return ResponseHelper.CreateResponse('Errro', e)
        }
    }

    @Post()
    async bank(@Body() bank: any) {
        try {
            let msg: ApiResponse<BankResponsetDTO>
            if (bank?.hasOwnProperty('iban')) {
                msg = await this.bankService.createBankAccountIBAN(bank)
                // create bank account with IBAN endpoint
            } else {
                msg = await this.bankService.createBankAccountNotIBAN(bank)
            }


            return msg
        }
        catch (e: any) {

            return e
        }
    }

    @Get('/ach/:id')
    async getAchBankAccount(@Param('id') id: string): Promise<ApiResponse<IAchBankAccountResponseDTO>> {
        try {
            const msg = await this.bankService.getAchBankAccount(id)

            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }

    @Post('/ach')
    async achBank(@Body() bank: any) {
        try {
            const msg = await this.bankService.createACHBankAccount(bank)
            return msg
        }
        catch (e: any) {

            return e
        }
    }

    @Get('/sepa/:id')
    async getSepaBank(@Param('id') id: string) {
        try {
            const msg = await this.bankService.getSepaBankAccount(id)
            return msg
        }
        catch (e: any) {

            return e
        }
    }

    @Get('/sepa/instructions/:id')
    async getSepaBankInstructions(@Param('id') id: string): Promise<ApiResponse<IWireBankAccountResponseDTO>> {
        try {
            const msg = await this.bankService.getSepaBankAccountInstructions(id)

            return msg
        }
        catch (e: any) {

            return ResponseHelper.CreateResponse('Errro', e)
        }
    }

    @Post('/sepa')
    async sepaBank(@Body() bank: BankRequestIBANDTO) {
        try {
            const msg = await this.bankService.createSepaBankAccount(bank)
            return msg
        }
        catch (e: any) {

            return e
        }
    }
}