export default class PaymentCancelRequestDTO {
    public id: string
    public idempotencyKey: string
    public reason: string
}