import HTTP from './../utils/http'

export default class LikeModel extends HTTP {
    like(behavior, artID, category) {
        const url = (behavior === "like") ? "like" : "like/cancel"
        this.request({
            url,
            method: "POST",
            data: {
                art_id: artID,
                type: category
            },
        })
    }
}