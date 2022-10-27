import IAmountDTO from "../IAmountDTO"
import ISourceDTO from "../ISourceDTO"

export default class PaymentRefundResponseDTO {
    public id: string
    public type: string
    public merchantId: string
    public merchantWalletId: string
    public amount: IAmountDTO
    public source: ISourceDTO
    public description: string
    public status: string
    public originalPayment: {
        id: string
        type: string
        merchantId: string
        merchantWalletId: string
        amount: IAmountDTO
        source: ISourceDTO
        description: string
        status: string
        captured: boolean
        captureAmount: IAmountDTO
        captureDate: Date
        requiredAction: {
            type: string
            redirectUrl: string
        }
        cancel: {
            id: string
            type: string
            description: string
            status: string
            createDate: Date
        }
        refunds: [{
            id: string
            type: string
            amount: IAmountDTO
            description: string
            status: string
            requiredAction: {
                type: string
                redirectUrl: string
            }
            fees: IAmountDTO
            createDate: Date
        }]
        fees: IAmountDTO
        channel: string
        createDate: Date
        updateDate: Date

    }
    public cancel: {
        id: string
        type: string
        merchantId: string
        merchantWalletId: string
        amount: IAmountDTO
        source: ISourceDTO
        description: string
        status: string
        orignalPayment: {
            id: string
            type: string
            amount: IAmountDTO
            description: string
            status: string
            requiredAction: {
             type: string
             redirectUrl: string
             fees: IAmountDTO
             createDate: Date
            }
        }
        fees: IAmountDTO
        channel: string
        createDate: Date
        updateDate: Date
    }
    public fees: IAmountDTO
    public trackingRef: string
    public errorCode: string
    public metaData: {
        email: string
        phoneNumber: string
    }
    public riskEvaluation: {
        decision: string
        reason: string
    }
    public createDate: string
    public updateDate: string
}