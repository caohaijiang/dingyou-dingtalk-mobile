require('./PageHome.less');
import logic from './PageLogic';
import { Control, Route } from 'react-keeper';
import { Component, LogicRender } from 'refast';

import TabBar, { activeTabbar } from 'components/card-tabbar';
import { NavBar } from 'antd-mobile';


class Home extends Component {
    constructor(props) { super(props, logic);        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(key){
        this.dispatch('setTabbarIndex',key);
        Control.go(this.state.menu[key].path, ); // keeper的跳转
    }

    render() {
        const { state: { menu, tabbarIndex, badge, },  } = this;
        const activeIndex=activeTabbar( menu );
        
        if (tabbarIndex != activeIndex  ){ // 对比url索引和当前选中的值,如不对应则纠正.
            this.dispatch('setTabbarIndex',activeIndex);
        }

        return (
            <div className="home">
                <NavBar
                    iconName=""
                    mode="light">
                    菜单
                </NavBar>

                {/*中间嵌套的页面*/}
                {this.props.children}

                <TabBar menu={menu} tabbarIndex={tabbarIndex} badge={badge} onChange={this.handleChange} />
            </div>
        );
    }

    componentDidMount() {
        dd.biz.navigation.setTitle({ title:'Home' })
    }

}

export default Home ;
