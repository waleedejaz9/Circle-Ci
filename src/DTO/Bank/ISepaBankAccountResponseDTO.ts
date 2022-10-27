import BankBillingDetailsDTO from "./BankBillingDetailsDTO";

export default interface ISepaBankAccountResponseDTO {
    id: string
    status: string
    description: string
    trackingRef: string
    fingerPrint: string
    riskEvaluation: {
        decision: string
        reason: string
    }
    billingDetails: BankBillingDetailsDTO
    createDate: Date
    updateDate: Date
}