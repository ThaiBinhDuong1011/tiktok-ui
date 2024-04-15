import { useEffect, useState } from 'react';
import { Content } from '~/layouts';
import * as getListVideosService from '~/services/getListVideosService';

function Home() {
    const [contentData, setContentData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getListVideosService.getListVideos('for-you', page);
            setContentData((prev) => [...prev, ...result]);
        };
        fetchApi();
    }, [page]);

    return <Content data={contentData} />;
}

export default Home;
