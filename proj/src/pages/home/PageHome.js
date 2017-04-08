require('./PageHome.less');
import Icons from 'assets/icon';
import logic from './PageLogic';
import { Control } from 'react-keeper';
import { Component, LogicRender } from 'no-flux';  

import TabBar, { activeTabbar } from 'components/card-tabbar';

class Home extends Component {
    constructor(props) { super(props, logic);        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(key){
        this.execute('setTabbarIndex',key);      
        Control.go(this.state.menu[key].path, ); // keeper的跳转
    }

    render() {
        const { state: { menu, tabbarIndex, badge, },  } = this;
        const activeIndex=activeTabbar( menu );
        
        if (tabbarIndex != activeIndex  ){ // 对比url索引和当前选中的值,如不对应则纠正.
            this.execute('setTabbarIndex',activeIndex);            
        }

        return (
            <div className="home">
                {this.props.children }
                <TabBar menu={menu} tabbarIndex={tabbarIndex} badge={badge} onChange={this.handleChange} /> 
            </div>
        );
    }

    componentDidMount() {
        dd.biz.navigation.setTitle({ title:'Home' })
    }

}

export default Home ;
