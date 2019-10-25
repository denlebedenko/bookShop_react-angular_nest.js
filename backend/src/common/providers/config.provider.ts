
import { Environment } from '../../environment/Environment';

export const EnvironmentConfigurations = [
    {
        useFactory: (): Environment => {
            const config: Environment = new Environment();
            return config;
        },
    },
];
