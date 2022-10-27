import IAmountDTO from "../IAmountDTO"

export default class PaymentsResponseDTO {
    public id: string
    public type: string
    public merchantId: string
    public merchantWalletId: string
    public amount: IAmountDTO
    public source: {
        id: string,
        type: string
    }
    public description: string
    public status: string
    public captured: boolean
    public captureAmount: IAmountDTO
    public captureDate: Date
    public requiredAction: {
        type: string
        redirectUrl: string
    }
    public cancel: {
        id: string
        type: string
        description: string
        status: string
        createDate: Date
    }
    public refunds: [{
        id: string
        type: string
        description: string
        amount: IAmountDTO
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