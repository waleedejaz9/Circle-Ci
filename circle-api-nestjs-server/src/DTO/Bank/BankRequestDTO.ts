import BankAddressDTO from "./BankAddressDTO"
import BankBillingDetailsDTO from "./BankBillingDetailsDTO"
import GenericDTO from "../GenericDTO"
import { IsNotEmpty,IsNotEmptyObject } from 'class-validator';

export default abstract class BankRequestDTO extends GenericDTO {
       @IsNotEmpty({message: 'please enter the idempotencyKey'})
    public idempotencyKey: string
    public accountNumber: string
    public routingNumber: string
    @IsNotEmptyObject()
    public billingDetails: BankBillingDetailsDTO
    @IsNotEmptyObject()
    public bankAddress: BankAddressDTO
    public createDate: Date
    public updateDate: Date
}
