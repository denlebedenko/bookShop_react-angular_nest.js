import { Controller, Get, Param, Body, Post, Request, Patch, Delete, Put } from '@nestjs/common';
import { StripeCustomerService } from '../services/stripeCustomer.service';

@Controller('customers')

export class StripeCustomerController {

    constructor(private readonly stripeCustomerService: StripeCustomerService) {}

    @Post('')
    create(@Body() data) {
        const customer = this.stripeCustomerService.checkout(data);
        return customer;
    }

}
