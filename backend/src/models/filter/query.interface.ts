import { ApiModelProperty } from '@nestjs/swagger';

export class QueryBook {
    @ApiModelProperty()
    page: number;
    @ApiModelProperty()
    minPrice: number;
    @ApiModelProperty()
    maxPrice: number;
    @ApiModelProperty()
    typeBook: string[];
}
