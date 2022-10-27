import IAmountDTO from "../IAmountDTO"

export default interface ICapturePaymentDTO {
    id: string
    idempotencyKey: string
    amount: IAmountDTO
}