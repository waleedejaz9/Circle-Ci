import BankBillingDetailsDTO from "../Bank/BankBillingDetailsDTO"

export default class CardRequestDTO {
    idempotencyKey: string
    keyId: string
    encryptedData: string
    billingDetails: BankBillingDetailsDTO
    expMonth: number
    expYear: number
    metaData: {
        email: string
        phoneNumber: string
        sessionId: string
        ipAddress: string
    }
}