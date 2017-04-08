import { Route } from 'react-keeper'

const PageFeedback= {
    page : require( './PageFeedback' ) ,
    route : ()=>{ return ( <Route component={ PageFeedback.page } path= '/feedback' /> )}
}

export default PageFeedback