import BankAddressDTO from "./BankAddressDTO"
import BankBillingDetailsDTO from "./BankBillingDetailsDTO"
import IAchBankAccountMetaDataDTO from "./IAchBankAccountMetaDataDTO"

export default class IAchBankAccountResponseDTO {
    id: string
    status: string
    accountNumber: string
    routingNumber: string
    billingDetails: BankBillingDetailsDTO
    bankAddress: BankAddressDTO
    fingerprint: string
    errorCode: string
    riskEvaluation: {
        decision: string
        reason: string
    }
    createDate: Date
    updateDate: Date
    metaData: IAchBankAccountMetaDataDTO
}