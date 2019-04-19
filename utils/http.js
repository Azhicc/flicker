import { config } from '../config.js'

const tips = {
	'1':'抱歉出现了一个错误',
	'1005':'appkey无效',
	'3000':'期刊不存在'
}

export default class HTTP {
    request(params) {
        if (!params.method) {
            params.method = 'GET'
        }
        wx.request({
            url: config.api_base_url + params.url,
            data: params.data,
            method: params.method,
            header: {
                'content-type': 'application/json',
                'appkey': config.appkey
            }, 
            success: (res) => {
                let code = res.statusCode.toString()
                if(code.startsWith('2')) {
                    params.success && params.success(res.data)
                }else{
                    const {error_code} = res.data
                    this._show_error(error_code)
                }
            },
            fail:  (err) => {
                this._show_error(1)
            },
        })
    }

    _show_error(error_code) {
        if (!error_code) {
            error_code = 1;
        }
        const tip = tips[error_code]
        wx.showToast({
            title: tip ? tip : tips[1],
            icon: 'none',
            duration: 2000
        })
    }
}