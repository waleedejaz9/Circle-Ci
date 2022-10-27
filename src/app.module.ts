import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { RestAPIManagerService } from './utils/Services/RestApiManagerService';
import { DataService } from './utils/Services/DataService'
import { TypegooseModule } from 'nestjs-typegoose';
import Payment from './utils/Models/Payment';
import { PaymentService } from './controllers/payments/Payment.service';
import { PaymentController } from './controllers/payments/payment.controller';
import { BankController } from './controllers/payments/bank.controller';
import { CardController } from './controllers/payments/card.controller';
import { PayoutController } from './controllers/payouts/payouts.controller';
import { SettlementController } from './controllers/payments/settlements.controller';
import { WalletController } from './controllers/payments/wallet.controller';
import { ChargeBackController } from './controllers/payments/chargeback.controller';
import { PayoutService } from './controllers/payouts/payouts.service';
import { BankService } from './controllers/payments/Bank.service';
import CardService from './controllers/payments/card.service';
import SettlementService from './controllers/payments/settlement.service';
import WalletService from './controllers/payments/wallet.service';
import ChargeBackService from './controllers/payments/ChargeBack.service';
import { BalanceController } from './controllers/payments/balance.controller';
import BalanceService from './controllers/payments/Balance.service';
import { ReversalController } from './controllers/payments/reversal.controller';
import ReversalService from './controllers/payments/Reversal.service';
import { TransferController } from './controllers/payouts/transfers.controller';
import { ReturnController } from './controllers/payouts/returns.controller';
import { TransferService } from './controllers/payouts/transfers.service';

@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:27017/circle', { useFindAndModify: true, useNewUrlParser: true, useUnifiedTopology: true }),
    TypegooseModule.forFeature([Payment]),
    HttpModule
  ],
  controllers: [AppController,
    BalanceController,
    PaymentController,
    BankController,
    CardController,
    PayoutController,
    SettlementController,
    WalletController,
    ChargeBackController,
    ReversalController,
    TransferController,
    ReturnController,
    
  ],
  providers: [
    AppService,
    PayoutService,
    BankService,
    BalanceService,
    CardService,
    SettlementService,
    WalletService,
    ChargeBackService,
    DataService,
    RestAPIManagerService,
    PaymentService,
    ReversalService,
    TransferService,

  ],
})
export class AppModule { }