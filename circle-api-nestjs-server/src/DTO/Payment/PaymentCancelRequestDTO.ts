import { IsNotEmpty } from 'class-validator';

export default class PaymentCancelRequestDTO {
    @IsNotEmpty({message: 'please enter the id'})
    public id: string
    @IsNotEmpty({message: 'please enter the idempotencyKey'})
    public idempotencyKey: string
    public reason: string
}