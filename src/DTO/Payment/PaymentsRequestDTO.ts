export default class PaymentsRequestDTO {
    public source: string
    public settlementId: string
    public type: string[]
    public status: string
    public from: Date
    public to: Date
    public pageBefore: string
    public pageAfter: string
    public pageSize: number
}