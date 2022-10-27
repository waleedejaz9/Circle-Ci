import IAmountDTO from "../IAmountDTO"

export default class WalletResponseDTO {
    public walletId: string
    public entityId: string
    public type: string
    public description: string
    public balances: IAmountDTO[]
}