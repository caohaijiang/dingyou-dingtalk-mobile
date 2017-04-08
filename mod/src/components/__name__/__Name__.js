require('./<%- Name %>.less');
import { WhiteSpace, WingBlank, List,  } from "antd-mobile"; 

/*  import <%- Name %>  from 'components/<%= name %>';
    <<%- Name %> attribute={  } attribute={  } attribute={  }  /> 
    
    attribute: 说明

    https://mobile.ant.design/components/<%- name %>
*/ 

const Item = List.Item;
const CustomChildren = (props) => (
    <div > 
         <%- Name %> component 
    </div>
);

function <%- Name %> ({ data,  }){ 

    function handleChange(key){
    }

    function handleClick(key){
    }

    return (
        <div className="<%= name %>">

            <CustomChildren> <%= name %> </CustomChildren>

            <List> { 
                data ? data.map((item, key)=> {
                    return (

                    )
                }) : '' ;
            }</List>

        </div>
    );
};

export default <%- Name %> ;