import * as httpRequest from '~/utils/httpRequest';

export const getListVideos = async (type = 'for-you', page, expect) => {
    try {
        const res = await httpRequest.get('videos', {
            params: { type, page, expect },
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        return res.data;
    } catch (error) {
        console.log('errorGetVideos', error);
    }
};
