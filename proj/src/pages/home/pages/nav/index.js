import { Route } from 'react-keeper'

const PageNav= {
    page : require( './PageNav' ) ,
    route : ()=>{ return ( <Route index component={ PageNav.page } path= '/nav' /> )}
}

export default PageNav