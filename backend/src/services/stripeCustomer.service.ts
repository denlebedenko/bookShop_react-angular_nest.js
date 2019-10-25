import { Injectable } from '@nestjs/common';
import * as Stripe from 'stripe';
import { Environment } from '../environment/Environment';

@Injectable()

export class StripeCustomerService {

    private config = new Environment();
    private stripe: Stripe = new Stripe(this.config.stripe);

    async checkout(data): Promise<void> {
      this.stripe.customers
        .create({
           email: data.token.email,
        })
        .then((customer) => {
          return this.stripe.customers.createSource(customer.id, {
            source: data.token.id,
          });
        })
        .then((source) => {
          return this.stripe.charges.create({
            amount: data.amount * 100,
            currency: 'usd',
            customer: source.customer,
          });
        });
    }
}
