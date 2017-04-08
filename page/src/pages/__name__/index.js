import { Route } from 'react-keeper'

const Page<%= Name %>= {
    page : require( './Page<%= Name %>' ) ,
    route : ()=>{ return ( <Route component={ Page<%= Name %>.page } path= '/<%= name %>' /> )}
}

export default Page<%= Name %>