import BankAddressDTO from "./BankAddressDTO"
import BankBillingDetailsDTO from "./BankBillingDetailsDTO"
import GenericDTO from "../GenericDTO"

export default abstract class BankRequestDTO extends GenericDTO {
    public idempotencyKey: string
    public accountNumber: string
    public routingNumber: string
    public billingDetails: BankBillingDetailsDTO
    public bankAddress: BankAddressDTO
    public createDate: Date
    public updateDate: Date
}

/*{
{
"data":{

"billingDetails":{
"name":"Satoshi Nakamoto"
"city":"Boston"
"country":"US"
"line1":"100 Money Street"
"line2":"Suite 1"
"district":"MA"
"postalCode":"01234"
}
"bankAddress":{
"bankName":"SAN FRANCISCO"
"city":"SAN FRANCISCO"
"country":"US"
"line1":"100 Money Street"
"line2":"Suite 1"
"district":"CA"
}
"createDate":"2020-04-10T02:13:30.000Z"
"updateDate":"2020-04-10T02:13:30.000Z"
}
}*/

/*
bank creation response

*/