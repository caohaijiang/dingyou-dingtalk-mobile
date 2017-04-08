import createAPI from 'unity-api';
import { resources, fetchOptions } from 'apis'

// mock 
const mock = next => async (middlewareOptions, apiCallParams, resource, method) => {
    const { mock } = middlewareOptions;
    if ( mock ) { 
        return await Promise.resolve( mockAPI[resource][method](apiCallParams)  )
     }

    return await next();
};


// loger 中间件
const logger = next => async (middlewareOptions, apiCallParams, resource, method) => {
    const { log } = middlewareOptions;
    if (log) {
       console.log('API访问: ', { middlewareOptions, apiCallParams, resource, method }); 
    }
    const result = await next();
    if (log) { console.log('返回结果: ', result) }

    return result;
};

/*  结果是否完成进行过滤 约束返回格式,如不设置fit=true,则默认返回完全结果*/
const fit = next => async (middlewareOptions, apiCallParams, resource, method) => {
    const { fit } = middlewareOptions;
    const result = await next();
    let content = null ; 
    if (fit) {
        if(result.success) { content = result.content; }
        else { content = result.error }
    }

    if (typeof(fit)=='undefined') { content = result }
    return content;
};

/* 中间件配置加载:  注意中间件的处理顺序 */
const middleware = [  logger, mock,fit ]

const { MOCK_URL } = require(`config/${ENV}.json`);
const mockAPI = createAPI(resources, middleware, MOCK_URL, fetchOptions);

export default  middleware