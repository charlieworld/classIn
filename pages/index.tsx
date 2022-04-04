import styled from 'styled-components';
import MainLayout from '../components/MainLayout';
import Heart from '../components/Icon/Heart';
import Sparkles from '../components/Icon/Sparkles';
import Clock from '../components/Icon/Clock';

export default function Index() {
  const S_MARGIN = 'mb-6';
  const ICON_MARGIN = 'mb-1';

  return (
    <MainLayout>
      <main className="py-24 px-10 w-full md:max-w-3xl lg:max-w-5xl">
        <h1 className="text-2xl mb-1">關於 ClassIn</h1>
        <h3 className="text-lg mb-4">#輔仁大學 #輔大 #選課 #選課分享</h3>
        <section className={S_MARGIN}>
          這是專屬輔大人的課程經驗分享平台，終於在講著要改版的兩年後改版了，站長本人已經畢業，對於學校的課程狀態也已經不甚熟悉，但學長姐曾經留下來的經驗值得繼續被傳承，所以就依然把資訊留在這邊給大家查詢囉！
          <br />
          曾經受益於這裡的學弟妹們也請別忘了在修完課的時候，把你的想法留下來，讓之後的學弟妹們能繼續享用你的「故事」！
        </section>
        <section className={S_MARGIN}>
          簡單說明一下網站使用方法：
          <br />
          想要分享自己修課經驗的善心人士們，請從右上角「新增評價」進入，填完表單後就算完成新增！
          <br />
          想要尋找他人經驗的學弟妹，請從「查看評價」進入，利用上方的兩排快速按鈕，就可以簡單找到你有興趣的課程啦，右邊也有搜尋列可以使用，鍵入教師姓名、課程關鍵字，都能找到相關評價！
          <br />
          要是查不到，還請你再修完課後回來跟大家分享唷～
        </section>
        <section className={S_MARGIN}>
          每筆評價中都有下面三種標示：
          <br />
          <div>
            <div className="flex content-center">
              <span className="mr-6">1. 愛心標示</span>
              <Heart active customClass={ICON_MARGIN} />
              <Heart active customClass={ICON_MARGIN} />
              <Heart active customClass={ICON_MARGIN} />
              <Heart customClass={ICON_MARGIN} />
              <Heart />
            </div>
            代表這筆評價對這門課的總推薦程度，如果你只想知道「到底推不推啊這門課？」看愛心數量就對囉！
          </div>
          <div>
            <div className="flex content-center">
              <span className="mr-4">2. 粉色閃亮亮</span>
              <Sparkles active customClass={ICON_MARGIN} />
              <Sparkles active customClass={ICON_MARGIN} />
              <Sparkles active customClass={ICON_MARGIN} />
              <Sparkles customClass={ICON_MARGIN} />
              <Sparkles />
            </div>
            代表這個細項的個別分數，通常越多「粉色閃亮亮」代表上課越愉快
          </div>
          <div>
            <div className="flex content-center">
              <span className="mr-4">3. 咖啡色時鐘</span>
              <Clock active customClass={ICON_MARGIN} />
              <Clock active customClass={ICON_MARGIN} />
              <Clock active customClass={ICON_MARGIN} />
              <Clock customClass={ICON_MARGIN} />
              <Clock />
            </div>
            代表這個細項的個別分數，通常越少「咖啡色時鐘」代表課程loading越少
          </div>
        </section>
        <section className={S_MARGIN}>
          學長姊們的分享幾乎都是掏心掏肺，如果你真的很懶得看文字的話，數這些點點、愛心是可以提供你不少資訊的唷！
          <br />
          請大家盡情享用吧！
        </section>
        <section className={S_MARGIN}>
          如果想要聯繫我們、發現網站有任何問題，或是想要許願各種功能，可以到
          ClassIn 的
          <a
            href="https://www.facebook.com/classinFJCU"
            target="_blank"
            rel="noreferrer noopener"
            className="ml-1 underline text-primary font-bold"
          >
            FB粉絲團
          </a>
          ，一些網站的更新動態也會發佈在粉絲團那邊唷！
        </section>
        <section className="text-right">By 站長 2018.09</section>
      </main>
    </MainLayout>
  );
}
