import BankBillingDetailsDTO from "./BankBillingDetailsDTO"
import IAchBankAccountMetaDataDTO from "./IAchBankAccountMetaDataDTO"
import { IsNotEmpty,IsNotEmptyObject } from 'class-validator';

export default class IAchBankAccountRequestDTO {
       @IsNotEmpty({message: 'please enter the idempotencyKey'})
    idempotencyKey: string
       @IsNotEmpty({message: 'please enter the idempotencyKey'})
    plaidProcessorToken: string
    @IsNotEmptyObject()
    billingDetails: BankBillingDetailsDTO
    @IsNotEmptyObject()
    metaData: IAchBankAccountMetaDataDTO
}