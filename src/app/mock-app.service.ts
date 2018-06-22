import { AppService } from './app.service';

export class MockAppService extends AppService {
    /**
     * This method is implemented in the AuthService
     * we extend, but we overload it to make sure we
     * return a value we wish to test against
     */
}
