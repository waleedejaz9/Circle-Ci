import BankRequestDTO from "./BankRequestDTO"
import { IsNotEmpty } from 'class-validator';

export default class BankRequestIBANDTO extends BankRequestDTO {
    @IsNotEmpty({message: 'please enter the iban'})
    public iban: string
}