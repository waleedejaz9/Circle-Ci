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
import BaseService from "src/utils/HelperClasses/BaseService"

@Injectable()
export class BankService extends BaseService {

    constructor() {
        super()
    }

    /**
     * Get Wire Bank Account through circle api
     * @param {id} string Get particular Wire Bank Account
     * @return BankResponsetDTO response from circle api
     */
    async getWireBankAccount(id: string): Promise<ApiResponse<BankResponsetDTO>> {
        try {
            return this.client.send<ApiResponse<BankResponsetDTO>, string>('/wires/:id', id).toPromise();
        } catch (e: any) {
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
            return this.client.send<ApiResponse<IInstructionsBankAccountResponseDTO>, string>('/wires/instructions/:id', id).toPromise();
        } catch (e: any) {
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
            return this.client.send<ApiResponse<BankResponsetDTO>, BankRequestIBANDTO>('/create/iban', bankAccount).toPromise();
        } catch (e: any) {
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
            return this.client.send<ApiResponse<BankResponsetDTO>, BankRequestNotIBANDTO>('/create/iban', bankAccount).toPromise();
        } catch (e: any) {
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
            return this.client.send<ApiResponse<IAchBankAccountResponseDTO>, string>('/ach/:id', id).toPromise();

        } catch (e: any) {
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
            return this.client.send<ApiResponse<IAchBankAccountResponseDTO>, IAchBankAccountRequestDTO>('/ach', bank).toPromise();
        } catch (e: any) {
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
            return this.client.send<ApiResponse<ISepaBankAccountResponseDTO>, string>('/sepa/:id', id).toPromise();
        } catch (e: any) {
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
            return this.client.send<ApiResponse<ISepaBankAccountResponseDTO>, BankRequestIBANDTO>('/sepa', bank).toPromise();
        } catch (e: any) {
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
            return this.client.send<ApiResponse<IInstructionsBankAccountResponseDTO>, string>('/sepa/instructions/:id', id).toPromise();
        } catch (e: any) {
            return e
        }
    }

}