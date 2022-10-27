import { IsNotEmpty } from 'class-validator';

export default class WalletRequestDTO {
       @IsNotEmpty({message: 'please enter the keyId'})
    public idempotencyKey: string
    public description: string
}