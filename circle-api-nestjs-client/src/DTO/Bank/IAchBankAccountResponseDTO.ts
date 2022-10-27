import BankAddressDTO from "./BankAddressDTO"
import BankBillingDetailsDTO from "./BankBillingDetailsDTO"
import IAchBankAccountMetaDataDTO from "./IAchBankAccountMetaDataDTO"
import { IsNotEmptyObject } from 'class-validator';

export default class IAchBankAccountResponseDTO {
    id: string
    status: string
    accountNumber: string
    routingNumber: string
    @IsNotEmptyObject()
    billingDetails: BankBillingDetailsDTO
    @IsNotEmptyObject()
    bankAddress: BankAddressDTO
    fingerprint: string
    errorCode: string
    riskEvaluation: {
        decision: string
        reason: string
    }
    createDate: Date
    updateDate: Date
    @IsNotEmptyObject()
    metaData: IAchBankAccountMetaDataDTO
}