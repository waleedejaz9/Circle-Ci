import IAmountDTO from "../IAmountDTO"
import { IsNotEmpty,IsNotEmptyObject } from 'class-validator';

export default class PaymentRefundRequestDTO {
    @IsNotEmpty({message: 'please enter the id'})
    public id: string
    @IsNotEmpty({message: 'please enter the id'})
    public idempotencyKey: string
    @IsNotEmptyObject()
    public amount: IAmountDTO
    public reason: string
}