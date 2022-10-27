import { IsNotEmpty } from 'class-validator';

export default class IAmountDTO {
    @IsNotEmpty({message: 'amount cannot be empty'})
    amount: number
    @IsNotEmpty({message: 'currency cannot be empty'})
    currency: string
}