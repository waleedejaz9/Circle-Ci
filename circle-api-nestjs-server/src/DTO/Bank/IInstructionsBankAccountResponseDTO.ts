import IBankAccountBeneficiaryDetailDTO from "./IBankAccountBeneficiaryDetailDTO"
import IBankAccountBeneficiaryBankDTO from "./IBankAccountBeneficiaryDetailDTO"
import { IsNotEmpty,IsNotEmptyObject } from 'class-validator';

export default class IInstructionsBankAccountResponseDTO {
    trackingRef: string
    @IsNotEmptyObject()
    beneficiary: IBankAccountBeneficiaryDetailDTO
    @IsNotEmptyObject()
    beneficiaryBank: IBankAccountBeneficiaryBankDTO
}