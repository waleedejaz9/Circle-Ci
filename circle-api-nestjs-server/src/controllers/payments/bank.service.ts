import { Injectable } from "@nestjs/common"
import { DataService } from "../../utils/Services/DataService"
import ApiResponse from "../../utils/HelperClasses/ApiResponse"
import BankResponsetDTO from "src/DTO/Bank/BankResponseDTO"
import BankRequestIBANDTO from "src/DTO/Bank/BankRequestIBANDTO"
import BankRequestNotIBANDTO from "src/DTO/Bank/BankRequestNotIBANDTO"
import IAchBankAccountResponseDTO from "src/DTO/Bank/IAchBankAccountResponseDTO"
import IAchBankAccountRequestDTO from "src/DTO/Bank/IAchBankAccountRequestDTO"
import ISepaBankAccountResponseDTO from "src/DTO/Bank/ISepaBankAccountResponseDTO"
import IInstructionsBankAccountResponseDTO from "src/DTO/Bank/IInstructionsBankAccountResponseDTO"

@Injectable()
export class BankService {

    constructor(
        private dataService: DataService
        ) {

    }

    /**
     * Get Wire Bank Account through circle api
     * @param {id} string Get particular Wire Bank Account
     * @return BankResponsetDTO response from circle api
     */
    async getWireBankAccount(id: string): Promise<ApiResponse<BankResponsetDTO>> {
        try {
            let result = await this.dataService.getWireBankAccount(id)
            return result
        } catch(e: any) {
            return e
        }
    }

    /**
     * Get the wire transfer instructions into the Circle bank account given your bank account id
     * @param {id} string Get particular Wire Bank Account instructions
     * @return IInstructionsBankAccountResponseDTO response from circle api
     */
        async getWireBankAccountInstructions(id: string): Promise<ApiResponse<IInstructionsBankAccountResponseDTO>> {
            try {
                let result = await this.dataService.getWireBankAccountInstructions(id)
                return result
            } catch(e: any) {
                return e
            }
        }

    /**
     * Create (IBAN) Bank Account through circle api
     * @param {bankAccount} BankRequestIBANDTO
     * @returns {IPaymentResponse} response from circle api
     */
    async createBankAccountIBAN(bankAccount: BankRequestIBANDTO): Promise<ApiResponse<BankResponsetDTO>> {
        try {
            let result = await this.dataService.createWireBankAccount(bankAccount)
            return result
        } catch(e: any) {
            return e
        }
    }

    /**
     * Create (Not-IBAN) Bank Account through circle api
     * @param {bankAccount} BankRequestNotIBANDTO
     * @returns {IPaymentResponse} response from circle api
     */
     async createBankAccountNotIBAN(bankAccount: BankRequestNotIBANDTO): Promise<ApiResponse<BankResponsetDTO>> {
        try {
            let result = await this.dataService.createWireBankAccount(bankAccount)
            return result
        } catch(e: any) {
            return e
        }
    }
   
    /**
     * Get the ACH bank account given your bank account id
     * @param {id} string Get particular ACH Bank Account
     * @return IAchBankAccountResponseDTO response from circle api
     */
     async getAchBankAccount(id: string): Promise<ApiResponse<IAchBankAccountResponseDTO>> {
        try {
            let result = await this.dataService.getAchBankAccount(id)
            return result
        } catch(e: any) {
            return e
        }
    }

    /**
     * Create a bank account (ACH)
     * @param {bank} IAchBankAccountRequestDTO Create particular ACH Bank Account
     * @return IAchBankAccountResponseDTO response from circle api
     */
     async createACHBankAccount(bank: IAchBankAccountRequestDTO): Promise<ApiResponse<IAchBankAccountResponseDTO>> {
        try {
            let result = await this.dataService.createACHBankAccount(bank)
            return result
        } catch(e: any) {
            return e
        }
    }
  
    /**
     * Get the Sepa bank account given your bank account id
     * @param {id} string Get particular Sepa Bank Account
     * @return ISepaBankAccountResponseDTO response from circle api
     */
     async getSepaBankAccount(id: string): Promise<ApiResponse<ISepaBankAccountResponseDTO>> {
        try {
            let result = await this.dataService.getSepaBankAccount(id)
            return result
        } catch(e: any) {
            return e
        }
    }

    /**
     * Create a bank account (Sepa).
     * @param {bank} BankRequestIBANDTO Create particular Sepa Bank Account
     * @return IAchBankAccountResponseDTO response from circle api
     */
     async createSepaBankAccount(bank: BankRequestIBANDTO): Promise<ApiResponse<ISepaBankAccountResponseDTO>> {
        try {
            let result = await this.dataService.createSepaBankAccount(bank)
            return result
        } catch(e: any) {
            return e
        }
    }
   
    /**
     * Get the sepa transfer instructions into the Circle bank account given your bank account id
     * @param {id} string Get particular Wire Bank Account instructions
     * @return IInstructionBankAccountResponseDTO response from circle api
     */
     async getSepaBankAccountInstructions(id: string): Promise<ApiResponse<IInstructionsBankAccountResponseDTO>> {
        try {
            let result = await this.dataService.getSepaBankAccountInstructions(id)
            return result
        } catch(e: any) {
            return e
        }
    }

}