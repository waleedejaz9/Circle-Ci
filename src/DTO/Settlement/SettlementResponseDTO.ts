import IAmountDTO from "../IAmountDTO"

export default class SettlementResponseDTO {
    public id: string
    public merchantWalletId: string
    public walletId: string
    public totalDebits: IAmountDTO
    public totalCredits: IAmountDTO
    public paymentFees: IAmountDTO
    public chargebackFees: IAmountDTO
    public createDate: Date
    public updateDate: Date
}