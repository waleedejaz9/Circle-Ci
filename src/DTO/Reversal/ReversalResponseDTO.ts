import IAmountDTO from "../IAmountDTO"

export default class ReversalResponseDTO {
    public id: string
    public paymentId: string
    public amount: IAmountDTO
    public description: string
    public status: string
    public reason: string
    public fees: IAmountDTO
    public createDate: Date
    public updateDate: Date
}