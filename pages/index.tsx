import MainLayout from '../components/MainLayout';
import Heart from '../components/Icon/Heart';
import Sparkles from '../components/Icon/Sparkles';
import Clock from '../components/Icon/Clock';
export default function Index() {

  const P_MARGIN = 'mb-6';

  return (
    <MainLayout>
      <main className="w-full md:max-w-3xl lg:max-w-5xl">
        <p className={P_MARGIN}>
          這是專屬輔大人的課程經驗分享平台，終於在講著要改版的兩年後改版了，站長本人已經畢業，對於學校的課程狀態也已經不甚熟悉，但學長姐曾經留下來的經驗值得繼續被傳承，所以就依然把資訊留在這邊給大家查詢囉！
          <br />
          曾經受益於這裡的學弟妹們也請別忘了在修完課的時候，把你的想法留下來，讓之後的學弟妹們能繼續享用你的「故事」！
        </p>
        <p className={P_MARGIN}>
          簡單說明一下網站使用方法：
          <br />
          想要分享自己修課經驗的善心人士們，請從右上角「新增評價」進入，填完表單後就算完成新增！
          <br />
          想要尋找他人經驗的學弟妹，請從「查看評價」進入，利用上方的兩排快速按鈕，就可以簡單找到你有興趣的課程啦，右邊也有搜尋列可以使用，鍵入教師姓名、課程關鍵字，都能找到相關評價！
          <br />
          要是查不到，還請你再修完課後回來跟大家分享唷～
        </p>
        <p className={P_MARGIN}>
          每筆評價中都有下面三種標示：
          <br />
          <div>
            <div className="flex content-center">
              <span className="mr-10">1. 愛心標示</span>
              <Heart active customClass="mr-2" />
              <Heart active customClass="mr-2" />
              <Heart active customClass="mr-2" />
              <Heart customClass="mr-2" />
              <Heart />
            </div>
            代表這筆評價對這門課的總推薦程度，如果你只想知道「到底推不推啊這門課？」看愛心數量就對囉！
          </div>
          <div>
            <div className="flex content-center">
              <span className="mr-6">2. 粉色閃亮亮</span>
              <Sparkles active customClass="mr-2" />
              <Sparkles active customClass="mr-2" />
              <Sparkles active customClass="mr-2" />
              <Sparkles customClass="mr-2" />
              <Sparkles />
            </div>
            代表這個細項的個別分數，通常越多「粉色閃亮亮」代表上課越愉快
          </div>
          <div>
            <div className="flex content-center">
              <span className="mr-6">3. 咖啡色時鐘</span>
              <Clock active customClass="mr-2" />
              <Clock active customClass="mr-2" />
              <Clock active customClass="mr-2" />
              <Clock customClass="mr-2" />
              <Clock />
            </div>
            代表這個細項的個別分數，通常越少「咖啡色時鐘」代表課程loading越少
          </div>
        </p>
        <p className={P_MARGIN}>
          學長姊們的分享幾乎都是掏心掏肺，如果你真的很懶得看文字的話，數這些點點、愛心是可以提供你不少資訊的唷！<br/>
          請大家盡情享用吧！
        </p>
        <p className="text-right">By 站長 2018.09</p>  
      </main>
    </MainLayout>
  );
}
