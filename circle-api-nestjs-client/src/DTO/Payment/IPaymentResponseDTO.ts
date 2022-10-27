import IAmountDTO from "../IAmountDTO"
import ISource from "../ISourceDTO"

export default interface IPaymentResponseDTO {
    id: string,
    type: string,
    merchantId: string,
    merchantWalletId: string,
    amount: IAmountDTO,
    source: ISource,
    description: string,
    createDate: Date,
    trackingRef: string,
    status: string,
    fees: IAmountDTO
}