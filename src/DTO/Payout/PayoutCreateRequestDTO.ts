import IAmountDTO from "../IAmountDTO"
import ISourceDTO from "../ISourceDTO"

export default class PayoutCreateRequestDTO {
    public idempotencyKey: string
    public source: ISourceDTO
    public destination: ISourceDTO
    public amount: IAmountDTO
    public metaData: {
        beneficiaryEmail: string
    }
}