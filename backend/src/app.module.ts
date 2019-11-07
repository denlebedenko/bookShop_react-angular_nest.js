import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { BookRepository, UserRepository, AuthorRepository } from './repositories';
import { BooksProviders, DatabaseProviders, UsersProviders } from './common/providers';
import { AuthController, BookController, UserController } from './controllers';
import { UserService, BookService, AuthService, AuthorService  } from './services';

import { ApplicationExceptionFilter } from './common/filter/application-exception.filter';
import { JwtStrategy } from './common/strategies/jwt.strategy';
import { ExceptionFilterCustom } from './common/filter/exception.filter';

import { Environment } from './environment/Environment';
import { SendGridController } from './controllers/sendgrid.controller';
import { SendGridService } from './services/sendgrid.service';
import { StripeCustomerService } from './services/stripeCustomer.service';
import { StripeCustomerController } from './controllers/stripe.controller';
import { AuthorController } from './controllers/author.controller';
import { AuthorProviders } from './common/providers/author.provider';

const config = new Environment();

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: config.jwtSecret,
      signOptions: { expiresIn: '10m' },
    }),
  ],
  controllers: [BookController, UserController, AuthorController, AuthController, SendGridController, StripeCustomerController],
  providers: [
    Environment,
    {
      provide: APP_FILTER,
      useClass: ApplicationExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: ExceptionFilterCustom,

    },
    BookService,
    UserService,
    AuthorService,
    AuthService,
    SendGridService,
    StripeCustomerService,
    BookRepository,
    UserRepository,
    AuthorRepository,
    JwtStrategy,
    ...DatabaseProviders,
    ...BooksProviders,
    ...UsersProviders,
    ...AuthorProviders,
  ],
})
export class AppModule {}
