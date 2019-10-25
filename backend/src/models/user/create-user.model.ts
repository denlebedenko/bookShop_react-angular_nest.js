import { ApiModelProperty } from '@nestjs/swagger';

export class UserCreateModel {

    @ApiModelProperty()
    readonly username: string;

    @ApiModelProperty()
    readonly email: string;

    @ApiModelProperty()
    readonly password: string;

    @ApiModelProperty()
    readonly role: string;
}
