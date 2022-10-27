
export default class CardResponseDTO {
    public id: string
    public status: string
    public billingDetails: {
        country: string
        district: string
    }
    public expMonth: number
    public expYear: number
    public network: string
    public last4: string
    public bin: string
    public issuerCountry: string
    public fundingType: string
    public fingerprint: string
    public errorCode: string
    public verification: {
        avs: string
        cvv: string
    }
    public riskEvaluation: {
        decision: string
        reason: string
    }
    public metaData: {
        email: string
        phoneNumber: string
    }
    public createDate: Date
    public updateDate: Date
}