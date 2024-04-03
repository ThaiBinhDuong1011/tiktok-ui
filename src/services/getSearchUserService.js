import * as httpRequest from '~/utils/httpRequest';

export const getSearchUser = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log('errorSearch: ', error);
    }
};
