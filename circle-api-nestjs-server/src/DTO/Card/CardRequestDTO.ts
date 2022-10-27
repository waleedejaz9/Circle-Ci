import { IsNotEmpty,IsNotEmptyObject } from 'class-validator';
import BankBillingDetailsDTO from "../Bank/BankBillingDetailsDTO"

export default class CardRequestDTO {
    @IsNotEmpty({message: 'please enter the idempotencyKey'})
    idempotencyKey: string
    keyId: string
    @IsNotEmpty({message: 'please enter the encryptedData'})
    encryptedData: string
    @IsNotEmptyObject()
    billingDetails: BankBillingDetailsDTO
    @IsNotEmpty({message: 'please enter the expMonth'})
    expMonth: number
    @IsNotEmpty({message: 'please enter the expYear'})
    expYear: number
    @IsNotEmptyObject()
    metaData: {
        email: string
        phoneNumber: string
        sessionId: string
        ipAddress: string
    }
}