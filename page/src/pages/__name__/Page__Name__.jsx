require('./Page<%= Name %>.less');
import logic from './PageLogic';
import { Component, LogicRender } from 'refast';  


class <%- Name %> extends Component {
    constructor(props) { 
        super(props, logic);        
        
    }

    render() {
        return (
            <div>
              
            </div>
        );
    }

}

export default <%- Name %> ;
