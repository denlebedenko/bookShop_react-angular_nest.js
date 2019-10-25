import { Environment } from '../environment/Environment';

const config = new Environment;

export default {
    mongoURI:
        `mongodb+srv://${config.username}:${config.password}@cluster0-nrmdb.mongodb.net/book?retryWrites=true&w=majority`,
};
