import { Injectable } from "@nestjs/common"
import BankRequestIBANDTO from "src/DTO/Bank/BankRequestIBANDTO"
import BankResponsetDTO from "src/DTO/Bank/BankResponseDTO"
import BankRequestDTO from "src/DTO/Bank/BankResponseDTO"
import IAchBankAccountRequestDTO from "src/DTO/Bank/IAchBankAccountRequestDTO"
import IAchBankAccountResponseDTO from "src/DTO/Bank/IAchBankAccountResponseDTO"
import IPaymentRequest from "src/DTO/Payment/PaymentRequestDTO"
import IPaymentResponse from "src/DTO/Payment/IPaymentResponseDTO"
import IPayoutResponseDTO from "src/DTO/Payout/IPayoutResponseDTO"
import ISepaBankAccountResponseDTO from "src/DTO/Bank/ISepaBankAccountResponseDTO"
import IInstructionsBankAccountResponseDTO from "src/DTO/Bank/IInstructionsBankAccountResponseDTO"
import Constants, { Messages } from "../Constants"

import ApiResponse from "../HelperClasses/ApiResponse"
import CommonFunctions from "../HelperClasses/CommonFunctions"
import ResponseHelper from "../HelperClasses/ResponseHelper"
import {RestAPIManagerService} from "./RestApiManagerService"
import ICapturePaymentDTO from "src/DTO/Payment/ICapturePaymentDTO"
import PaymentsRequestDTO from "src/DTO/Payment/PaymentsRequestDTO"
import PaymentsResponseDTO from "src/DTO/Payment/PaymentsResponseDTO"
import PaymentCancelRequestDTO from "src/DTO/Payment/PaymentCancelRequestDTO"
import PaymentCancelResponseDTO from "src/DTO/Payment/PaymentCancelResponseDTO"
import CardRequestDTO from "src/DTO/Card/CardRequestDTO"
import CardResponseDTO from "src/DTO/Card/CardResponseDTO"
import CardsRequestDTO from "src/DTO/Card/CardsRequestDTO"
import CardUpdateRequestDTO from "src/DTO/Card/CardUpdateRequestDTO"
import WalletRequestDTO from "src/DTO/Wallet/WalletRequestDTO"
import WalletResponseDTO from "src/DTO/Wallet/WalletResponseDTO"
import PaymentRefundResponseDTO from "src/DTO/Payment/PaymentRefundResponseDTO"
import WalletsRequestDTO from "src/DTO/Wallet/WalletsRequestDTO"
import WalletAddressResponseDTO from "src/DTO/Wallet/WalletAddressResponseDTO"
import WalletAddressRequestDTO from "src/DTO/Wallet/WalletAddressRequestDTO"
import SettlementResponseDTO from "src/DTO/Settlement/SettlementResponseDTO"
import MultipleObjectFilterDTO from "src/DTO/MultipleObjectFilterDTO"
import ChargeBackResponseDTO from "src/DTO/ChargeBack/ChargeBackResponseDTO"
import ReversalResponseDTO from "src/DTO/Reversal/ReversalResponseDTO"
import BalanceResponseDTO from "src/DTO/Balance/BalanceResponseDTO"
import PayoutsRequestDTO from "src/DTO/Payout/PayoutsRequestDTO"
import PayoutCreateRequestDTO from "src/DTO/Payout/PayoutCreateRequestDTO"
import TransferResponseDTO from "src/DTO/Transfers/TransferResponseDTO"
import TransfersRequestDTO from "src/DTO/Transfers/TransferRequestDTO"
import TransferMultipleFilterDTO from "src/DTO/Transfers/TransferMultipleFilterDTO"
import IPublicKey from "src/DTO/IPublicKey"

@Injectable()
export class DataService {

    constructor(private apiManager: RestAPIManagerService) {

    }

    /**
     * Get Payment through circle api
     * @param {id} string Payment ID
     * @returns {IPaymentResponse} response from circle api
     */ 
    public async getPayment(id: string): Promise<ApiResponse<IPaymentResponse>> {
       return new Promise((resolve, reject) =>{
            this.apiManager.get<IPaymentResponse>(`${Constants.GetPayment}?${id}`).subscribe((s) => {                
                resolve(ResponseHelper.CreateResponse<IPaymentResponse>(CommonFunctions.StringFormat(Messages.successGET, "Payment"), s.data, s.status))
        }, (e) => {
            reject(ResponseHelper.CreateResponse<IPaymentResponse>(CommonFunctions.StringFormat(Messages.failureGET, "Payment"), e, e.response.status))
        })
       })
    }

    /**
     * Get All Payments through circle api
     * @param {payment} PaymentsRequestDTO contains filter to fetch multiple payments
     * @returns {PaymentsResponseDTO} response from circle api
     */ 
     public async getAllPayment(payment: PaymentsRequestDTO): Promise<ApiResponse<PaymentsResponseDTO>> {
        return new Promise((resolve, reject) =>{
             this.apiManager.get<PaymentsResponseDTO>(`${Constants.GetPayment}?${CommonFunctions.ConvertObjectToQueryStringParams(payment)}`).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<PaymentsResponseDTO>(CommonFunctions.StringFormat(Messages.successGET, "Payments"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<PaymentsResponseDTO>(CommonFunctions.StringFormat(Messages.failureGET, "Payments"), e, e.response.status))
         })
        })
     }
   
    /**
     * Get Bank Account through circle api
     * @param {payment} IPaymentRequest payment object which creates particular payment
     * @returns {IPaymentResponse} response from circle api
     */
    public async createPayment(payment: IPaymentRequest): Promise<ApiResponse<IPaymentResponse>> {
       return new Promise((resolve, reject) =>{
            this.apiManager.post<IPaymentResponse>(Constants.CreatePayment, payment).subscribe((s) => {                
                resolve(ResponseHelper.CreateResponse<IPaymentResponse>(CommonFunctions.StringFormat(Messages.successPOST, "Payment"), s.data, s.status))
        }, (e) => {
            reject(ResponseHelper.CreateResponse<IPaymentResponse>(CommonFunctions.StringFormat(Messages.failurePOST, "Payment"), e, e.response.status))
        })
       })
    }
 
    /**
     * Capture Payment through circle api
     * @param {catpure} ICapturePaymentDTO payment object which capture particular payment
     * @returns {string} response from circle api
     */
     public async capturePayment(capture: ICapturePaymentDTO): Promise<ApiResponse<string>> {
        return new Promise((resolve, reject) => {
             this.apiManager.post<string>(CommonFunctions.StringFormat(Constants.CapturePayment, capture.id), capture).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<string>(CommonFunctions.StringFormat(Messages.successPOST, "Capture Payment"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<string>(CommonFunctions.StringFormat(Messages.failurePOST, "Capture Payment"), e, e.code, e.response.status))
         })
        })
     }
  
    /**
     * Cancel Payment through circle api
     * @param {cancel} PaymentCancelRequestDTO payment object which cancel particular payment
     * @returns {PaymentCancelResponseDTO} response from circle api
     */
     public async cancelPayment(cancel: PaymentCancelRequestDTO): Promise<ApiResponse<PaymentCancelResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.post<PaymentCancelResponseDTO>(CommonFunctions.StringFormat(Constants.CancelPayment, cancel.id), cancel).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<PaymentCancelResponseDTO>(CommonFunctions.StringFormat(Messages.successPOST, "Cancel Payment"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<PaymentCancelResponseDTO>(CommonFunctions.StringFormat(Messages.failurePOST, "Cancel Payment"), e, e.response.status))
         })
        })
     }
  
    /**
     * Refund Payment through circle api
     * @param {refund} PaymentRefundRequestDTO payment object which refund particular payment
     * @returns {PaymentRefundResponseDTO} PaymentRefundResponseDTO response from circle api
     */
     public async refundPayment(refund: PaymentCancelRequestDTO): Promise<ApiResponse<PaymentRefundResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.post<PaymentRefundResponseDTO>(CommonFunctions.StringFormat(Constants.RefundPayment, refund.id), refund).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<PaymentRefundResponseDTO>(CommonFunctions.StringFormat(Messages.successPOST, "Refund Payment"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<PaymentRefundResponseDTO>(CommonFunctions.StringFormat(Messages.failurePOST, "Refund Payment"), e, e.response.status))
         })
        })
     }
      
    /**
     * Create Bank Account through circle api
     * @param {bank} T Create particular bank account i.e IBAN/Non-IBAN, that's why it's accepting type t
     * @returns {BankResponsetDTO} response from circle api
     */
     public async createWireBankAccount<T>(bank: T): Promise<ApiResponse<BankResponsetDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.post<BankResponsetDTO>(Constants.CreateWireBankAccount, bank).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<BankResponsetDTO>(CommonFunctions.StringFormat(Messages.successPOST, "Wire Bank Account"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<BankResponsetDTO>(CommonFunctions.StringFormat(Messages.failurePOST, "Wire Bank Account"), e, e.response.status))
         })
        })
     }   

    /**
     * Get Wire Bank Account through circle api
     * @param {id} string Bank Account ID
     * @returns {BankResponsetDTO} response from circle api
     */
    public async getWireBankAccount(id: string): Promise<ApiResponse<BankResponsetDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.get<BankResponsetDTO>(`${Constants.GetWireBankAccount}${id}`).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<BankResponsetDTO>(CommonFunctions.StringFormat(Messages.successGET, "Wire Bank Account"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<BankResponsetDTO>(CommonFunctions.StringFormat(Messages.failureGET, "Wire Bank Account"), e, e.response.status))
         })
        })
     }
 
    /**
     * Get the wire transfer instructions into the Circle bank account given your bank account id
     * @param {id} string Bank Account ID
     * @returns {IInstructionsBankAccountResponseDTO} response from circle api
     */
     public async getWireBankAccountInstructions(id: string): Promise<ApiResponse<IInstructionsBankAccountResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.get<IInstructionsBankAccountResponseDTO>(`${CommonFunctions.StringFormat(Constants.GetWireBankAccountInstructions,id)}`).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<IInstructionsBankAccountResponseDTO>(CommonFunctions.StringFormat(Messages.successGET, "Wire Transfer Instructions"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<IInstructionsBankAccountResponseDTO>(CommonFunctions.StringFormat(Messages.failureGET, "Wire Transfer Instructions"), e, e.response.status))
         })
        })
     }    
    
    /**
     * Get the ach bank account by given your bank account id
     * @param {id} string Bank Account ID
     * @returns {IAchBankAccountResponseDTO} response from circle api
     */
     public async getAchBankAccount(id: string): Promise<ApiResponse<IAchBankAccountResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.get<IAchBankAccountResponseDTO>(`${CommonFunctions.StringFormat(Constants.GetACHBankAccount,id)}`).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<IAchBankAccountResponseDTO>(CommonFunctions.StringFormat(Messages.successGET, "ACH Bank Account Information"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<IAchBankAccountResponseDTO>(CommonFunctions.StringFormat(Messages.failureGET, "ACH Bank Account Information"), e, e.response.status))
         })
        })
     }    
     
     /**
      * Create ACH Bank Account through circle api
      * @param {bank} IAchBankAccountRequestDTO Create particular ACH bank account
      * @returns {IAchBankAccountResponseDTO} response from circle api
      */
      public async createACHBankAccount(bank: IAchBankAccountRequestDTO): Promise<ApiResponse<IAchBankAccountResponseDTO>> {
         return new Promise((resolve, reject) => {
              this.apiManager.post<IAchBankAccountResponseDTO>(Constants.CreateACHBankAccount, bank).subscribe((s) => {                
                  resolve(ResponseHelper.CreateResponse<IAchBankAccountResponseDTO>(CommonFunctions.StringFormat(Messages.successPOST, "ACH Bank"), s.data, s.status))
          }, (e) => {
              reject(ResponseHelper.CreateResponse<IAchBankAccountResponseDTO>(CommonFunctions.StringFormat(Messages.failurePOST, "ACH Bank"), e, e.response.status))
          })
         })
      }

   
    /**
     * Get the Sepa bank account by given your bank account id
     * @param {id} string Bank Account ID
     * @returns {ISepaBankAccountResponseDTO} response from circle api
     */
     public async getSepaBankAccount(id: string): Promise<ApiResponse<ISepaBankAccountResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.get<ISepaBankAccountResponseDTO>(`${CommonFunctions.StringFormat(Constants.GetSepaBankAccount,id)}`).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<ISepaBankAccountResponseDTO>(CommonFunctions.StringFormat(Messages.successGET, "ACH Bank Account Information"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<ISepaBankAccountResponseDTO>(CommonFunctions.StringFormat(Messages.failureGET, "ACH Bank Account Information"), e, e.response.status))
         })
        })
     }    
 
     /**
      * BETA Create a bank account (SEPA)
      * @param {bank} BankRequestIBANDTO Create particular a bank account (SEPA)
      * @returns {ISepaBankAccountResponseDTO} response from circle api
      */
      public async createSepaBankAccount(bank: BankRequestIBANDTO): Promise<ApiResponse<ISepaBankAccountResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.post<ISepaBankAccountResponseDTO>(Constants.CreateBetaBankAccountSEPA, bank).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<ISepaBankAccountResponseDTO>(CommonFunctions.StringFormat(Messages.successPOST, "Sepa Bank"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<ISepaBankAccountResponseDTO>(CommonFunctions.StringFormat(Messages.failurePOST, "Sepa Bank"), e, e.response.status))
         })
        })
     }

 
    /**
     * Get the sepa instructions into the Circle bank account given your bank account id
     * @param {id} string Bank Account ID
     * @returns {IInstructionsBankAccountResponseDTO} response from circle api
     */
     public async getSepaBankAccountInstructions(id: string): Promise<ApiResponse<IInstructionsBankAccountResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.get<IInstructionsBankAccountResponseDTO>(`${CommonFunctions.StringFormat(Constants.GetSepaBankAccountInstructions,id)}`).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<IInstructionsBankAccountResponseDTO>(CommonFunctions.StringFormat(Messages.successGET, "Wire Transfer Instructions"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<IInstructionsBankAccountResponseDTO>(CommonFunctions.StringFormat(Messages.failureGET, "Wire Transfer Instructions"), e, e.response.status))
         })
        })
     }   

    /**
     * Get payout
     * @param {id} T Get particular Payout
     * @returns {IPayoutResponseDTO} response from circle api
     */
     public async getPayout(id: string): Promise<ApiResponse<IPayoutResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.get<IPayoutResponseDTO>(CommonFunctions.StringFormat(Constants.GetPayout, id)).subscribe((s) => {
                 resolve(ResponseHelper.CreateResponse<IPayoutResponseDTO>(CommonFunctions.StringFormat(Messages.successPOST, "Payout"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<IPayoutResponseDTO>(CommonFunctions.StringFormat(Messages.failurePOST, "Payout"), e, e.response.status))
         })
        })
     }

    /**
     * Get payout
     * @param {payoutFilter} PayoutsRequestDTO filter object for retrieving Payouts
     * @returns {IPayoutResponseDTO} response from circle api
     */
     public async getAllPayout(payoutFilter: PayoutsRequestDTO): Promise<ApiResponse<IPayoutResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.get<IPayoutResponseDTO>(`${Constants.GetPayout}?${CommonFunctions.ConvertObjectToQueryStringParams(payoutFilter)}`).subscribe((s) => {
                 resolve(ResponseHelper.CreateResponse<IPayoutResponseDTO>(CommonFunctions.StringFormat(Messages.successPOST, "Payout"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<IPayoutResponseDTO>(CommonFunctions.StringFormat(Messages.failurePOST, "Payout"), e, e.response.status))
         })
        })
     }

    /**
     * Get payout
     * @param {payoutFilter} PayoutsRequestDTO filter object for retrieving Payouts
     * @returns {IPayoutResponseDTO} response from circle api
     */
     public async getAllReturnPayout(payoutFilter: PayoutsRequestDTO): Promise<ApiResponse<IPayoutResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.get<IPayoutResponseDTO>(`${Constants.GetReturnPayout}?${CommonFunctions.ConvertObjectToQueryStringParams(payoutFilter)}`).subscribe((s) => {
                 resolve(ResponseHelper.CreateResponse<IPayoutResponseDTO>(CommonFunctions.StringFormat(Messages.successPOST, "Return Payout"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<IPayoutResponseDTO>(CommonFunctions.StringFormat(Messages.failurePOST, "Return Payout"), e, e.response.status))
         })
        })
     }
    
    /**
     * Create payouts from circle API
     * @param {payout} PayoutCreateRequestDTO Create payout
     * @returns {IPayoutResponseDTO} response from circle api
     */
     public async createPayout(payout: PayoutCreateRequestDTO): Promise<ApiResponse<IPayoutResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.post<IPayoutResponseDTO>(`${Constants.CreatePayout}`, payout).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<IPayoutResponseDTO>(CommonFunctions.StringFormat(Messages.successPOST, "Payout"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<IPayoutResponseDTO>(CommonFunctions.StringFormat(Messages.failurePOST, "Payout"), e, e.response.status))
         })
        })
     }
   
    /**
     * Create cards from circle API
     * @param {card} CardRequestDTO Create card for particular type
     * @returns {CardResponseDTO} response from circle api
     */
     public async createCard(card: CardRequestDTO): Promise<ApiResponse<CardResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.post<CardResponseDTO>(`${Constants.CreateCard}`, card).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<CardResponseDTO>(CommonFunctions.StringFormat(Messages.successPOST, "Card"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<CardResponseDTO>(CommonFunctions.StringFormat(Messages.failurePOST, "Card"), e, e.response.status))
         })
        })
     }
 
    /**
     * Update cards from circle API
     * @param {card} CardUpdateRequestDTO Update card for particular type
     * @returns {CardResponseDTO} response from circle api
     */
     public async updateCard(id: string, card: CardUpdateRequestDTO): Promise<ApiResponse<CardResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.put<CardResponseDTO>(CommonFunctions.StringFormat(`${Constants.UpdateCard}`, id), card).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<CardResponseDTO>(CommonFunctions.StringFormat(Messages.successPUT, "Card"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<CardResponseDTO>(CommonFunctions.StringFormat(Messages.failurePUT, "Card"), e, e.response.status))
         })
        })
     }

    /**
     * Get all cards from circle API
     * @param {cards} CardsRequestDTO Bank Account ID
     * @returns {CardResponseDTO response from circle api
     */
     public async getAllCards(circles: CardsRequestDTO): Promise<ApiResponse<CardResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.get<CardResponseDTO>(`${Constants.GetCards}?${CommonFunctions.ConvertObjectToQueryStringParams(circles)}`).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<CardResponseDTO>(CommonFunctions.StringFormat(Messages.successGET, "Cards"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<CardResponseDTO>(CommonFunctions.StringFormat(Messages.failureGET, "Cards"), e, e.response.status))
         })
        })
     }

    /**
     * Get particular card from circle API
     * @param {id} string Id for getting particular card
     * @returns {CardResponseDTO} CardResponseDTO response from circle api
     */
     public async getCard(id: string): Promise<ApiResponse<CardResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.get<CardResponseDTO>(CommonFunctions.StringFormat(`${Constants.GetCard}`, id)).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<CardResponseDTO>(CommonFunctions.StringFormat(Messages.successGET, "Card"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<CardResponseDTO>(CommonFunctions.StringFormat(Messages.failureGET, "Card"), e, e.response.status))
         })
        })
     }
 
    /**
     * Create wallet from circle API
     * @param {wallet} WalletRequestDTO Create wallet for end-user
     * @returns {WalletResponseDTO} WalletResponseDTO response from circle api
     */
     public async createWallet(wallet: WalletRequestDTO): Promise<ApiResponse<WalletResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.post<WalletResponseDTO>(`${Constants.CreateWallet}`, wallet).subscribe((s) => {
                 resolve(ResponseHelper.CreateResponse<WalletResponseDTO>(CommonFunctions.StringFormat(Messages.successPOST, "Wallet"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<WalletResponseDTO>(CommonFunctions.StringFormat(Messages.failurePOST, "Wallet"), e, e.response.status))
         })
        })
     }

    /**
     * Get particular wallet from circle API
     * @param {id} string Id for getting particular wallet
     * @returns {WalletResponseDTO} response from circle api
     */
     public async getWallet(id: string): Promise<ApiResponse<WalletResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.get<WalletResponseDTO>(CommonFunctions.StringFormat(`${Constants.GetWallet}`, id)).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<WalletResponseDTO>(CommonFunctions.StringFormat(Messages.successGET, "Wallet"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<WalletResponseDTO>(CommonFunctions.StringFormat(Messages.failureGET, "Wallet"), e, e.response.status))
         })
        })
     }

    /**
     * Get all wallets from circle API
     * @param {wallets} WalletsRequestDTO Wallets filter payload for searching
     * @returns {WalletResponseDTO} WalletResponseDTO response from circle api
     */
     public async getAllWallets(wallets: WalletsRequestDTO): Promise<ApiResponse<WalletResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.get<WalletResponseDTO>(`${Constants.GetWallets}?${CommonFunctions.ConvertObjectToQueryStringParams(wallets)}`).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<WalletResponseDTO>(CommonFunctions.StringFormat(Messages.successGET, "Wallets"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<WalletResponseDTO>(CommonFunctions.StringFormat(Messages.failureGET, "Wallets"), e, e.response.status))
         })
        })
     }

    /**
     * Get all block chain addresses from particular wallet from circle API
     * @param {id} string Which looks for particular wallet
     * @param {wallets} WalletsRequestDTO Wallets filter payload for searching
     * @returns {WalletAddressResponseDTO} WalletAddressResponseDTO response from circle api
     */
     public async getAllBlockChainWalletAddresses(id: string, wallets: WalletsRequestDTO): Promise<ApiResponse<WalletAddressResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.get<WalletAddressResponseDTO>(`${CommonFunctions.StringFormat(Constants.GetWalletAddresses, id)}?${CommonFunctions.ConvertObjectToQueryStringParams(wallets)}`).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<WalletAddressResponseDTO>(CommonFunctions.StringFormat(Messages.successGET, "Wallet BlockChain Addresses"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<WalletResponseDTO>(CommonFunctions.StringFormat(Messages.failureGET, "Wallet BlockChain Addresses"), e, e.response.status))
         })
        })
     }

    /**
     * Generates a new blockchain address for a wallet for a given currency/chain pair. 
     * Circle may reuse addresses on blockchains that support reuse. 
     * For example, if you're requesting two addresses for depositing USD and ETH, both on Ethereum, 
     * you may see the same Ethereum address returned. 
     * Depositing cryptocurrency to a generated address will credit the associated wallet with the value of the deposit.
     * @param {id} string to fetch particular wallet and process for particular wallet
     * @param {wallets} WalletAddressRequestDTO Create particular blockchain wallet address
     * @returns {WalletResponseDTO} WalletResponseDTO response from circle api
     */
     public async createWalletAddresses(id: string, wallet: WalletAddressRequestDTO): Promise<ApiResponse<WalletAddressResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.post<WalletAddressResponseDTO>(`${CommonFunctions.StringFormat(Constants.GetWalletAddresses, id)}`, wallet).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<WalletAddressResponseDTO>(CommonFunctions.StringFormat(Messages.successGET, "Wallet Addresses"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<WalletAddressResponseDTO>(CommonFunctions.StringFormat(Messages.failureGET, "Wallets"), e, e.response.status))
         })
        })
     }

    /**
     * Get particular settlement from circle API
     * @param {id} string Id for getting particular settlement
     * @returns {SettlementResponseDTO} SettlementResponseDTO response from circle api
     */
     public async getSettlement(id: string): Promise<ApiResponse<SettlementResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.get<SettlementResponseDTO>(CommonFunctions.StringFormat(`${Constants.GetSettlement}`, id)).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<SettlementResponseDTO>(CommonFunctions.StringFormat(Messages.successGET, "Settlement"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<SettlementResponseDTO>(CommonFunctions.StringFormat(Messages.failureGET, "Settlement"), e, e.response.status))
         })
        })
     }

    /**
     * Get all settlement from circle API
     * @param {settlements} MultipleObjectFilterDTO Settlement filter payload for searching
     * @returns {SettlementResponseDTO} SettlementResponseDTO response from circle api
     */
     public async getAllSettlements(settlements: MultipleObjectFilterDTO): Promise<ApiResponse<SettlementResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.get<SettlementResponseDTO>(`${Constants.GetSettlements}?${CommonFunctions.ConvertObjectToQueryStringParams(settlements)}`).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<SettlementResponseDTO>(CommonFunctions.StringFormat(Messages.successGET, "Settlements"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<SettlementResponseDTO>(CommonFunctions.StringFormat(Messages.failureGET, "Settlements"), e, e.response.status))
         })
        })
     }

    /**
     * Get particular ChargeBack from circle API
     * @param {id} string Id for getting particular ChargeBack
     * @returns {ChargeBackResponseDTO} ChargeBackResponseDTO response from circle api
     */
     public async getChargeBack(id: string): Promise<ApiResponse<ChargeBackResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.get<ChargeBackResponseDTO>(CommonFunctions.StringFormat(`${Constants.GetChargeBack}`, id)).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<ChargeBackResponseDTO>(CommonFunctions.StringFormat(Messages.successGET, "ChargeBack"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<ChargeBackResponseDTO>(CommonFunctions.StringFormat(Messages.failureGET, "ChargeBack"), e, e.response.status))
         })
        })
     }

    /**
     * Get all ChargeBack from circle API
     * @param {chargeBacks} MultipleObjectFilterDTO chargeBack filter payload for searching
     * @returns {ChargeBackResponseDTO} ChargeBackResponseDTO response from circle api
     */
     public async getAllChargeBacks(chargeBacks: MultipleObjectFilterDTO): Promise<ApiResponse<ChargeBackResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.get<ChargeBackResponseDTO>(`${Constants.GetChargeBacks}?${CommonFunctions.ConvertObjectToQueryStringParams(chargeBacks)}`).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<ChargeBackResponseDTO>(CommonFunctions.StringFormat(Messages.successGET, "ChargeBacks"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<ChargeBackResponseDTO>(CommonFunctions.StringFormat(Messages.failureGET, "ChargeBacks"), e, e.response.status))
         })
        })
     }

    /**
     * Get all Reversal from circle API
     * @param {reversal} MultipleObjectFilterDTO reversal filter payload for searching
     * @returns {ReversalResponseDTO} ReversalResponseDTO response from circle api
     */
     public async getAllReversal(reversal: MultipleObjectFilterDTO): Promise<ApiResponse<ReversalResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.get<ReversalResponseDTO>(`${Constants.GetReversal}?${CommonFunctions.ConvertObjectToQueryStringParams(reversal)}`).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<ReversalResponseDTO>(CommonFunctions.StringFormat(Messages.successGET, "Reversal"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<ReversalResponseDTO>(CommonFunctions.StringFormat(Messages.failureGET, "Reversal"), e, e.response.status))
         })
        })
     }

     /**
      * Get all Balance from circle API
      * @returns {BalanceResponseDTO} BalanceResponseDTO response from circle api
      */
      public async getAllBalances(): Promise<ApiResponse<BalanceResponseDTO>> {
         return new Promise((resolve, reject) => {
              this.apiManager.get<BalanceResponseDTO>(`${Constants.GetBalance}`).subscribe((s) => {                
                  resolve(ResponseHelper.CreateResponse<BalanceResponseDTO>(CommonFunctions.StringFormat(Messages.successGET, "Balances"), s.data, s.status))
          }, (e) => {
              reject(ResponseHelper.CreateResponse<BalanceResponseDTO>(CommonFunctions.StringFormat(Messages.failureGET, "Balances"), e, e.response.status))
          })
         })
      }
 
    /**
     * Create Transfers from circle API
     * @param {transfer} TransfersRequestDTO Create Transfer for end-user
     * @returns {TransferResponseDTO} TransferResponseDTO response from circle api
     */
     public async createTransfer(transfer: TransfersRequestDTO): Promise<ApiResponse<TransferResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.post<TransferResponseDTO>(`${Constants.CreateTransfer}`, transfer).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<TransferResponseDTO>(CommonFunctions.StringFormat(Messages.successPOST, "Transfer"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<TransferResponseDTO>(CommonFunctions.StringFormat(Messages.failurePOST, "Transfer"), e, e.response.status))
         })
        })
     }

    /**
     * Get particular Transfer from circle API
     * @param {id} string Id for getting particular Transfer
     * @returns {TransferResponseDTO} TransferResponseDTO response from circle api
     */
     public async getTransfer(id: string): Promise<ApiResponse<TransferResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.get<TransferResponseDTO>(CommonFunctions.StringFormat(`${Constants.GetTransfer}`, id)).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<TransferResponseDTO>(CommonFunctions.StringFormat(Messages.successGET, "ChargeBack"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<TransferResponseDTO>(CommonFunctions.StringFormat(Messages.failureGET, "ChargeBack"), e, e.response.status))
         })
        })
     }
 
     /**
      * Get all Transfers from circle API
      * @param transferFilter {TransferMultipleFilterDTO} filter object to filter records on circle api
      * @returns {BalanceResponseDTO} BalanceResponseDTO response from circle api
      */
      public async getAllTransfers(transferFilter: TransferMultipleFilterDTO): Promise<ApiResponse<TransferResponseDTO>> {
        return new Promise((resolve, reject) => {
             this.apiManager.get<TransferResponseDTO>(`${Constants.GetTransfers}`).subscribe((s) => {                
                 resolve(ResponseHelper.CreateResponse<TransferResponseDTO>(CommonFunctions.StringFormat(Messages.successGET, "Transfers"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<TransferResponseDTO>(CommonFunctions.StringFormat(Messages.failureGET, "Transfers"), e, e.response.status))
         })
        })
     }
 
     /**
      * Get public key from circle API
      * @returns {IPublicKey} IPublicKey response from circle api
      */
      public async getPublicKey(): Promise<ApiResponse<IPublicKey>> {
        return new Promise((resolve, reject) => {
             this.apiManager.get<IPublicKey>(`${Constants.GetPublicKey}`).subscribe((s) => {         
                 resolve(ResponseHelper.CreateResponse<IPublicKey>(CommonFunctions.StringFormat(Messages.successGET, "Public Key"), s.data, s.status))
         }, (e) => {
             reject(ResponseHelper.CreateResponse<IPublicKey>(CommonFunctions.StringFormat(Messages.failureGET, "Public Key"), e, e.response.status))
         })
        })
     }     
}