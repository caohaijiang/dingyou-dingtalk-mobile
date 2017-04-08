import { Route } from 'react-keeper'

const PageEntry= {
    page : require( './PageEntry' ) ,
    route : ()=>{ return ( <Route component={ PageEntry.page } path= '/entry' /> )}
}

export default PageEntry