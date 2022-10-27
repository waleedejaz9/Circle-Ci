import { IsNotEmpty } from 'class-validator';
export default class WalletAddressRequestDTO {
       @IsNotEmpty({message: 'please enter the idempotencyKey'})
    public idempotencyKey: string
       @IsNotEmpty({message: 'please enter the currency'})
    public currency: string
       @IsNotEmpty({message: 'please enter the chain'})
    public chain: string
}