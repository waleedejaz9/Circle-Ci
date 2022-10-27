import IGenericDTO from "../GenericDTO";
import IAmountDTO from "../IAmountDTO";
import ISourceDTO from "../ISourceDTO";

export default interface IPaymentRequestDTO extends IGenericDTO {
    metadata: {
        email: string,
        phoneNumber: string,
        sessionId: string,
        ipAddress: string
    }
    amount: IAmountDTO
    autoCapture: boolean
    source: ISourceDTO
    idempotencyKey: string
    keyId: string
    verification: string
    description: string
    encryptedData: string
    channel: string
    verificationSuccessUrl: string
    verificationFailureUrl: string
}