import { useRouter } from 'next/router';

import BgImgContent from '@/UI/BgImgContent';
import BgImgQuestion from '@/UI/BgImgQuestion';

import RecommendedOutfits from '@/components/RecommendedOutfits';
import BgImgBtn from '@/UI/BgImgBtn';
import Proceeding from '@/UI/Proceeding';

import { getBaseDate, getBaseTime, getCurrPosition } from '@/public/resources/common';
import { fetchVillageFcstInfo } from '../api/hello';

// our-domain.com/news/something-important

async function fethchSortedPlaces() {
    const result = await getCurrPosition();

    return result;
}

const Recommendation = () => {
    const router = useRouter();
    const answer = router.query.answer;
    fetchVillageFcstInfo();

    const contentClass =
        'align-baseline text-center object-center h-svh bg-center bg-no-repeat bg-cover border-transparent pt-14';

    return (
        <>
            <BgImgContent url='url("/resources/img/cloud.jpg")' class={contentClass}>
                <Proceeding title="열심히 찾고있어요" />

                <BgImgBtn onClickBtn={() => {}} title="목록" />
            </BgImgContent>
        </>
    );
};

export default Recommendation;
