import { Route } from 'react-keeper'

const PageOther= {
    page : require( './PageOther' ) ,
    route : ()=>{ return ( <Route component={ PageOther.page } path= '/other' /> )}
}

export default PageOther