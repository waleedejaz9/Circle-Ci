import IAmountDTO from "../IAmountDTO"
import ISourceDTO from "../ISourceDTO"

export default class TransferResponseDTO {
    public id: string
    public source: ISourceDTO
    public destination: {
        type: string
        address: string
        addressTag: string
        chain: string
    }
    public amount: IAmountDTO
    public transactionHash: string
    public status: string
    public errorCode: string
    public createDate: Date
}