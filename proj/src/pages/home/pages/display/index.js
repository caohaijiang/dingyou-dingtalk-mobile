import { Route } from 'react-keeper'

const PageDisplay= {
    page : require( './PageDisplay' ) ,
    route : ()=>{ return ( <Route component={ PageDisplay.page } path= '/display' /> )}
}

export default PageDisplay