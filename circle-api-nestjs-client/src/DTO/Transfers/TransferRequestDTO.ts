import IAmountDTO from "../IAmountDTO"
import ISourceDTO from "../ISourceDTO"
import { IsNotEmpty, IsNotEmptyObject } from 'class-validator';

export default class TransfersRequestDTO {
    @IsNotEmpty({ message: 'please enter the idempotencyKey' })
    public idempotencyKey: string
    @IsNotEmptyObject()
    public source: ISourceDTO
    @IsNotEmptyObject()
    public destination: {
        id: string
        type: string
        address: string
        addressTag: string
        chain: string
    }
    @IsNotEmptyObject()
    public amount: IAmountDTO
}