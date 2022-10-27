import { IsNotEmpty,IsNotEmptyObject } from 'class-validator';
import IAmountDTO from "../IAmountDTO"
export default class IPayoutResponseDTO {
@IsNotEmpty({message: 'please enter the id'})
 id: string
 sourceWalletId: string
@IsNotEmptyObject()
 destination:{
type:string
id: string
name: string
}
@IsNotEmptyObject()
amount: IAmountDTO
@IsNotEmptyObject()
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