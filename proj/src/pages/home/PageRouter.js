import { Route } from 'react-keeper'
import Page from './PageHome';

export default {
    page: Page,
    route: () => (
        <div>
            <Route index component={Page} path= '/home' >

            </Route>
        </div>)
};
