import { IsNotEmpty } from 'class-validator';

export default class CardUpdateRequestDTO {
       @IsNotEmpty({message: 'please enter the keyId'})
    keyId: string
       @IsNotEmpty({message: 'please enter the encryptedData'})
    encryptedData: string
    expMonth: number
       @IsNotEmpty({message: 'please enter the expYear'})
    expYear: number
}