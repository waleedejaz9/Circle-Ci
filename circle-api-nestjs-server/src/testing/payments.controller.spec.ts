
import Payment from '../utils/Models/Payment'
import {getModelForClass, ReturnModelType} from '@typegoose/typegoose'
import { DataService } from '../../src/utils/Services/DataService'
import { PaymentController } from '../controllers/payments/payment.controller'
import { PaymentService } from '../controllers/payments/payment.service'
import  IPaymentRequestDTO from '../DTO/Payment/PaymentRequestDTO'
import { RestAPIManagerService } from '../utils/Services/RestApiManagerService'
import  { HttpService } from '@nestjs/axios'
import { Test, TestingModule } from '@nestjs/testing'
import { getModelToken } from 'nestjs-typegoose'
import { HttpModule } from '@nestjs/common'

let paymentService: PaymentService
let paymentController: PaymentController
let ds: DataService

// describe('PaymentService', () => {

//     beforeEach(async () => {
//         const module: TestingModule = await Test.createTestingModule({
//             controllers: [PaymentController],
//             imports:[HttpModule],
//             providers: [
//             PaymentService, 
//             {
//                 provide: getModelToken('Payment'), useValue: getModelForClass(Payment)
//             },
//             DataService, 
//             {
//                 provide: getModelForClass(DataService), useValue: getModelForClass(DataService)
//             },
//             RestAPIManagerService, {
//                 provide: getModelForClass(RestAPIManagerService), useValue: getModelForClass(RestAPIManagerService)
//             },
//             HttpService, {
//                 provide: getModelForClass(HttpService), useValue: getModelForClass(HttpService)
//             }
//         ]
//         }).compile()
//         paymentController = module.get(PaymentController)
//         paymentService = module.get(PaymentService)
//         ds = module.get(DataService)
//     })
//     it("checking geet payment", async () => {
//         // jest.spyOn(paymentService, 'getPayment').mockImplementation(async (id) => {
//         //    let c = await paymentController.getPayment(id)
//         //    return c
//         // })
//         let c = await ds.getPayment('58c93589-911f-4bcb-a918-87c593296791')
//         expect(await paymentService.getPayment('58c93589-911f-4bcb-a918-87c593296791')).toBe(c)
//     })
// })