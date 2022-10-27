import { Controller, Get} from "@nestjs/common";
import BalanceResponseDTO from "src/DTO/Balance/BalanceResponseDTO";
import ApiResponse from "../../utils/HelperClasses/ApiResponse";
import ResponseHelper from "../../utils/HelperClasses/ResponseHelper";
import BalanceService from "./Balance.service";

@Controller('balance')
export class BalanceController {

    constructor(private balanceService: BalanceService) {
    }

    @Get()
    async all(): Promise<ApiResponse<BalanceResponseDTO>> {
        try {
            const msg = await this.balanceService.getAll()
            return msg
        }
        catch (e: any) {
            return ResponseHelper.CreateResponse('Errro', e)
        }
    }
}