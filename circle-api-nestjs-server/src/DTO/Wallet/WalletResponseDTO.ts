import IAmountDTO from "../IAmountDTO"
import { IsNotEmptyObject } from 'class-validator';

export default class WalletResponseDTO {
    public walletId: string
    public entityId: string
    public type: string
    public description: string
    @IsNotEmptyObject()
    public balances: IAmountDTO[]
}