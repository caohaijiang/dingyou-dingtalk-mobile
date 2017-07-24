import nattyFetch from 'natty-fetch';
const { API_URL, MOCK_URL } = require(`config/${ENV}.json`);

nattyFetch.setGlobal({
    data: {
        //配置token
    },
    urlPrefix: '', //实际的urlprefix eg: http://test.gbtong.com
    mock: true,
    mockUrlPrefix: MOCK_URL,
    urlPrefix: API_URL
});