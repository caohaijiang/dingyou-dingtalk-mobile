require('./CardTabbar.less');
import { last, endsWith } from 'lodash'
import { TabBar, Icon  } from "antd-mobile"; 

/*  import Tabbar, { activeTabbar } from 'components/card-tabbar';
    <Tabbar menu={  } tabbarIndex={  } badge={  } onChange={  } /> 
    
    menu: [{"title":"导航", "icon":"nav", "path":"/home/nav" },]
    tabbarIndex: 选中状态索引
    badge: 徽标数	
    onChange: 触发修改事件对应的函数 

    https://mobile.ant.design/components/tab-bar/
*/ 

function getPageName() {
    let a = location.href;
    return last(a.split("/"))        
}

export function activeTabbar( menu ){ //解决tabbar回退不能设置状态的问题
    let index=0

    if ( getPageName() != "" ){
        for (let i in menu){
            if ( endsWith( menu[i].path, getPageName() )) { 
                index=i;
            }
        }
    }
    
    return parseInt(index)  //返回url序号
}

function CardTabbar ({ menu, tabbarIndex, badge, onChange }){ //请展开传入的属性

    function handleChange(key){
        onChange(key);        
    }

    return (
        <div className="card-tabbar">           
            <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" >{
                menu?menu.map(function(item,key){
                    return ( 
                        <TabBar.Item
                            title={item.title}
                            key={key}
                            selected={tabbarIndex === key}
                            icon={<Icon type={require(`icon/${item.icon}.svg`)} />}
                            badge={badge}
                            selectedIcon={<Icon type={require(`icon/${item.icon}.svg`)} color='#0099CC' />}
                            onPress={() => { handleChange(key) }}
                        ></TabBar.Item> 
                    )                    
                }):''
            }</TabBar> 
        </div>
    );
};

export default CardTabbar ;