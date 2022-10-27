import IAmountDTO from "../IAmountDTO"
import ISourceDTO from "../ISourceDTO"
import { IsNotEmpty, IsNotEmptyObject } from 'class-validator';

export default class PayoutCreateRequestDTO {
    @IsNotEmpty({ message: 'please enter the idempotencyKey' })
    public idempotencyKey: string
    @IsNotEmptyObject()
    public source: ISourceDTO
    @IsNotEmptyObject()
    public destination: ISourceDTO
    @IsNotEmptyObject()
    public amount: IAmountDTO
    public metaData: {
        beneficiaryEmail: string
    }
}