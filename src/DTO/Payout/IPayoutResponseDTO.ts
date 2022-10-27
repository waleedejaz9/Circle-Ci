import IAmountDTO from "../IAmountDTO";

export default interface IPayoutResponseDTO {
 id: string
 sourceWalletId: string
 destination:{
type:string
id: string
name: string
}
amount: IAmountDTO
fees: IAmountDTO
status: string
trackingRef: string
externalRef:string
errorCode: string
riskEvaluation:{
decision: string
reason:string
}
adjustments:{
fxCredit:IAmountDTO
fxDebit:IAmountDTO
}
return:{
id: string
payoutId: string
amount:IAmountDTO 
fees: IAmountDTO
reason: string
status: string
createDate:Date
updateDate:Date
}
createDate: Date
updateDate:Date
}