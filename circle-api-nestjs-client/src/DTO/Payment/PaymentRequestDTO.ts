import IGenericDTO from "../GenericDTO"
import IAmountDTO from "../IAmountDTO"
import ISourceDTO from "../ISourceDTO"
import { ValidateNested,IsNotEmpty,IsNotEmptyObject } from 'class-validator';
export default class PaymentRequestDTO extends IGenericDTO {

    @ValidateNested()
    metadata: {
        email: string,
        phoneNumber: string,
        sessionId: string,
        ipAddress: string
    }
    @IsNotEmptyObject()
    amount: IAmountDTO
    autoCapture: boolean
    @IsNotEmptyObject()
    source: ISourceDTO
    @IsNotEmpty({message: 'idempotencyKey cannot be empty'})
    idempotencyKey: string
    keyId: string
    @IsNotEmpty({message: 'please provide verification method'})
    verification: string
    description: string
    encryptedData: string
    channel: string
    verificationSuccessUrl: string
    verificationFailureUrl: string
}