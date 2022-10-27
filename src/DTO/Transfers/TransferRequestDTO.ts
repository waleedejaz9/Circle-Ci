import IAmountDTO from "../IAmountDTO"
import ISourceDTO from "../ISourceDTO"

export default class TransfersRequestDTO {
    public idempotencyKey: string
    public source: ISourceDTO
    public destination: {
        id: string
        type: string
        address: string
        addressTag: string
        chain: string
    }
    public amount: IAmountDTO
}