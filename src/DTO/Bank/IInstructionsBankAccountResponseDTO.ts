import IBankAccountBeneficiaryDetailDTO from "./IBankAccountBeneficiaryDetailDTO";
import IBankAccountBeneficiaryBankDTO from "./IBankAccountBeneficiaryDetailDTO";

export default interface IInstructionsBankAccountResponseDTO {
    trackingRef: string
    beneficiary: IBankAccountBeneficiaryDetailDTO
    beneficiaryBank: IBankAccountBeneficiaryBankDTO
}