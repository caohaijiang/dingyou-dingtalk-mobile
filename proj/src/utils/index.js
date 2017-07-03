
function PromptMessage( message ){
    return { title: "提示", buttonName: "收到",
        message: message,
    };
};

export function  apiSync( fn, p, m ){
    return new Promise( async (resolve, reject) => {
        try {
            const data = await fn( p, m );
            const empty = !data.length;
            
            if (empty) { 
                dd.device.notification.alert( PromptMessage('没有找到呀,请换一个?') )
            } else { console.log(`请求成功！`) };

            resolve = { data, empty } ;
        } catch (e) {
            dd.device.notification.alert( PromptMessage('数据出错啦,请在试一次?') );
            reject = { data: [], empty: false };
        } 
    })
};