require('./<%- Name %>.less');
import React from 'react'; 
import { WhiteSpace, WingBlank, List,  } from "antd-mobile"; 

/*  import <%- Name %>  from 'components/<%= name %>';
    <<%- Name %> attribute={  } attribute={  } attribute={  }  /> 
    
    attribute: 说明

    https://mobile.ant.design/components/<%- name %>
*/ 

const Item = List.Item;

class <%- Name %> extends React.Component {
    constructor(props){super( props );
        this.state = { value:this.props.defaultValue, };
        this.handleChange = this.handleChange.bind(this);        
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(val){
        this.setState({ value:val });
    }

    handleClick(val){
        this.setState({ value:val });
    }

    render() { 
        const {{ value }} = this.state; 
        const {{ keyname, title, data, defaultValue, extra, only=true, onChange }} = this.props; 

        return (
            <div className="<%= name %> ">
                component <%= name %> 
            </div>
        );
    }
}

export default <%- Name %> ;