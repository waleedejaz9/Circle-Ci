import BankRequestDTO from "./BankRequestDTO"
import { IsNotEmpty } from 'class-validator';

export default class BankRequestNotIBANDTO extends BankRequestDTO {
    @IsNotEmpty({message: 'please enter the iban'})
    public iban: string
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