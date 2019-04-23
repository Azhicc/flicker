import HTTP from './../utils/http'

export default class ClassicModel extends HTTP {
    getLastest (sCallaback) {
        this.request({
            url: 'classic/latest',
            success: (res) => {
                sCallaback(res)
            }
          })
    }
}