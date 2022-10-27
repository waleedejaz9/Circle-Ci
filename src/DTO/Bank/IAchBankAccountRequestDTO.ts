import BankBillingDetailsDTO from "./BankBillingDetailsDTO";
import IAchBankAccountMetaDataDTO from "./IAchBankAccountMetaDataDTO";

export default interface IAchBankAccountRequestDTO {
    idempotencyKey: string
    plaidProcessorToken: string
    billingDetails: BankBillingDetailsDTO
    metaData: IAchBankAccountMetaDataDTO
}