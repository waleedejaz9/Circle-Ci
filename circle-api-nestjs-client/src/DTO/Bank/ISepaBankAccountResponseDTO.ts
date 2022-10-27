import BankBillingDetailsDTO from "./BankBillingDetailsDTO"
import { IsNotEmptyObject } from 'class-validator';

export default class ISepaBankAccountResponseDTO {
    id: string
    status: string
    description: string
    trackingRef: string
    fingerPrint: string
    riskEvaluation: {
        decision: string
        reason: string
    }
    @IsNotEmptyObject()
    billingDetails: BankBillingDetailsDTO
    createDate: Date
    updateDate: Date
}