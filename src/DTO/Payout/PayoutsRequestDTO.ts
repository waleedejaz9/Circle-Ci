export default class PayoutsRequestDTO {
    public source: string
    public destination: string
    public from: Date
    public to: Date
    public pageBefore: string
    public pageAfter: string
    public pageSize: number
}