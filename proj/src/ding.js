import Ding from 'dings'; 

async function init(){
    const isAuth = await Ding.ddConfig();  /* 配置钉钉api鉴权 */
    console.log( isAuth ); 
}

const { DINTALK_API } = require(`config/${ENV}.json`);
if ( DINTALK_API == true ) { 
    init() 
} else {
    alert ( ' Dingtalk jsApi 服务: 没有配置启用 (如何使用请查看文档) ')
}



