import { ApiModelProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class BookCreateModel {
    @ApiModelProperty()
    readonly title: string;

    @ApiModelProperty()
    readonly price: number;

    @ApiModelProperty()
    readonly authors: [Types.ObjectId];

    @ApiModelProperty()
    readonly genre: string;

    @ApiModelProperty()
    readonly description: string;

    @ApiModelProperty()
    readonly coverUrl: string;

    @ApiModelProperty()
    readonly type: string;
}
