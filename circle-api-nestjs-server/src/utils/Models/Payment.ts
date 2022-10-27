import { Prop } from "@typegoose/typegoose"

export default class Payment {
    @Prop()
    public id: string
}