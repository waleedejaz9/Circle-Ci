import IAmountDTO from "../IAmountDTO"

export default class PaymentRefundRequestDTO {
    public id: string
    public idempotencyKey: string
    public amount: IAmountDTO
    public reason: string
}