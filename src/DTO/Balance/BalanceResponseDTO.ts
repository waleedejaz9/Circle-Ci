import IAmountDTO from "../IAmountDTO";

export default class BalanceResponseDTO {
    public available: IAmountDTO[]
    public unsettled: IAmountDTO[]
}