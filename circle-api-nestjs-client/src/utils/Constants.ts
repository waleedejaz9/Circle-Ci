export default class Constants {
    public static readonly GetPayment = '/v1/payments'
    public static readonly CreatePayment = '/v1/payments'
    public static CapturePayment = '/v1/payments/{0}/capture'
    public static CancelPayment = '/v1/payments/{0}/cancel'
    public static RefundPayment = '/v1/payments/{0}/refund'

    public static readonly GetWireBankAccount = '/v1/banks/wires/'
    public static readonly CreateWireBankAccount = '/v1/banks/wires'
    public static GetWireBankAccountInstructions = '/v1/banks/wires/{0}/instructions'

    public static GetACHBankAccount = '/v1/banks/ach/{0}'
    public static readonly CreateACHBankAccount = '/v1/banks/ach'
    
    public static readonly CreateBetaBankAccountSEPA = '/v1/banks/sepa'
    public static GetSepaBankAccount = '/v1/banks/sepa/{0}'
    public static GetSepaBankAccountInstructions = '/v1/banks/sepa/{0}/instructions'
    

    public static GetPayout = '/v1/payouts/{0}'
    public static GetReturnPayout = '/v1/returns'
    public static GetPayouts = '/v1/payouts'
    public static CreatePayout = '/v1/payouts'
    
    public static GetCard = '/v1/cards/{0}'
    public static GetCards = '/v1/cards'
    public static CreateCard = '/v1/cards'
    public static UpdateCard = '/v1/cards/{0}'

    public static GetWallet = '/v1/wallets/{0}'    
    public static CreateWallet = '/v1/wallets'
    public static GetWallets = '/v1/wallets'
    public static GetWalletAddresses = '/v1/wallets/{0}/addresses'

    public static GetSettlements = '/v1/settlements'
    public static GetSettlement = '/v1/settlements/{0}'

    public static GetChargeBacks = '/v1/chargebacks'
    public static GetChargeBack = '/v1/chargebacks/{0}'

    public static GetReversal = '/v1/reversal'
    public static GetBalance = '/v1/balances'

    public static CreateTransfer = '/v1/transfers'
    public static GetTransfer = '/v1/transfers/{0}'
    public static GetTransfers = '/v1/transfers'

    public static GetPublicKey = '/v1/encryption/public'
}

export class Messages {
    public static successPOST = 'Successfully created {0}'
    public static successPUT = 'Successfully updated {0}'
    public static successGET = 'Successfully retrieved {0}'
    
    public static failureGET = 'Unable to retrieved {0}'
    public static failurePOST = 'Unable to create {0}'
    public static failurePUT = 'Unable to update {0}'
}