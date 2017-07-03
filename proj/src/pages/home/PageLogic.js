import { apiSync } from 'utils'
import PageConst from './PageConst';

export default {
    defaults(props) {
        return {  empty: true, loading: false, ...PageConst, 
            tabbarIndex: 0,
        }
    },

    setTabbarIndex( {setState}, data ) {
        setState({ tabbarIndex:data })
    },

};
