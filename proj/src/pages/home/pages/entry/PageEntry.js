require('./PageEntry.less');
import Icons from 'assets/icon';
import logic from './PageLogic';
import { Control } from 'react-keeper';
import { Component, LogicRender } from 'no-flux';  
import { WhiteSpace, WingBlank, Button, } from "antd-mobile"; 

// import name from 'components/my_components';

class Entry extends Component {
    constructor(props) { super(props, logic);        
        this.handleClick = this.handleClick.bind(this);   
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick( value ) {
        this.execute( 'inputText', value )
    }

    handleChange() {
        this.execute( 'setButtonText', '钉钉,使命必达!' )
    }

    render() {
        const {state:{ buttonText, inputText, myConts }} = this; 
        console.log( '常量状态:', myConts );

        return (
            <div className="entry">
                <Button onClick = { this.handleClick } >
                    { inputText }
                </Button>

                <Button onClick = { this.handleChange } >
                    { buttonText }
                </Button>
            </div>
        );
    }

    componentWillMount () {
    }

    componentDidMount () {
        dd.biz.navigation.setTitle({ title:'导航栏标题' })
        this.execute( 'printState' )
    }

}

export default Entry ;
