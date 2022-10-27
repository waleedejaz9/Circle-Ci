import IAmountDTO from "../IAmountDTO"

export default class ChargeBackResponseDTO {
    public id: string
    public paymentId: string
    public merchantId: string
    public reasonCode: string
    public category: string
    public history: [{
        type: string
        chargeBackAmount: IAmountDTO
        fee: IAmountDTO
        description: string
        settlementId: string
        createDate: Date
    }]
}