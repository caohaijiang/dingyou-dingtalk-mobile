
import jsapi from './jsapi.json';
import path from 'path';

const { AUTH_URL, APP_URL } = require(`config/${ENV}.json`);

class DingClient {

    ddConfig(){
        return new Promise(async (resolve, reject) => {
            let jsapiArr= Object.keys(jsapi);
            try {
                let res = await fetch(path.resolve(AUTH_URL, '/signature'), {
                    method: 'POST',
                    body: JSON.stringify({
                        url: APP_URL
                    })
                });
                let data = await res.json();

                //返回的data数据自行修改
                dd.config({
                    agentId: data.agentID,
                    corpId: data.corpid,
                    timeStamp:data.timeStamp,
                    nonceStr: data.noceStr,
                    signature: data.signature,
                    jsApiList: jsapiArr
                });

                dd.error( function (error) {
                    alert(JSON.stringify(error));
                    reject("DingTalk jsApi concent : ",JSON.stringify(error))
                });

                dd.ready( function () {
                    alert('dingding ready');
                    resolve('DingTalk jsApi concent  ok: ')
                });
            } catch (e){
                console.error(e);
            }
        });
    };
};

export default new DingClient();
   