import { use, LogicRender } from 'refast';

import { Toast } from "antd-mobile";
import Icons from 'assets/icon';

/* 导入资源对象 */
import Api from './api';

/* 初始化值 */
const Loading = () => { Toast.loading('加载中...', 0, ()=>{console.log('加载完成!!!')}) };
const Empty = () => { Toast.fail('加载失败!!!', 1) };
const attachComponents = { Loading, Empty };

/* logic绑定 */
use('Api', Api);
use('Loading', Loading);
use('Icon', Icons );

/*　LogicRender绑定　*/
LogicRender.defaultProps = Object.assign( LogicRender.defaultProps, attachComponents );
