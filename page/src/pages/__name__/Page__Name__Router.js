import { Route } from 'react-keeper'
import Page from './Page<%=Name %>';

export default {
    page: Page,
    route: () => (
        <div>
            <Route  component={Page} path= '/' >

            </Route>
        </div>)
};
