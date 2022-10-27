import IAmountDTO from "../IAmountDTO"
import { IsNotEmpty,IsNotEmptyObject } from 'class-validator';

export default class SettlementResponseDTO {
    public id: string
    public merchantWalletId: string
    public walletId: string
    @IsNotEmptyObject()
    public totalDebits: IAmountDTO
    @IsNotEmptyObject()
    public totalCredits: IAmountDTO
    @IsNotEmptyObject()
    public paymentFees: IAmountDTO
    @IsNotEmptyObject()
    public chargebackFees: IAmountDTO
    public createDate: Date
    public updateDate: Date
}