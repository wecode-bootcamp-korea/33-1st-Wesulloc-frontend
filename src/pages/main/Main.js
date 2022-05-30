import './Main.scss';
//import { Link } from 'react-router-dom';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import Slider from './slide/Slider';
import MainProductList from '../main/mainProductLists/MainProductList';

function Main() {
  return (
    <div className="main">
      {/* 네비게이션바 */}
      <Nav />
      {/* 메인배너 */}
      <section className="mainBanners">
        <Slider />
      </section>
      {/* 공지사항 */}
      <section className="notificationInfo">
        <div className="notification">
          <span>공지사항</span>
          <div className="scrollContainer">
            <ul className="notifList">
              <li>초콜릿류 상품 판매 일시중단 안내</li>
              <li>[공지] 4월 다다일상 베이직/홈카페 배송 지연 안내</li>
              <li>[내용정정] 오설록 개인정보 처리방침 변경 고지</li>
              <li>[내용정정] CJ대한통운 파업 종료 및 배송지연, 정상화 안내</li>
              <li> 오설록 티 크리에이터 1기 서류 합격발표 관련 안내</li>
            </ul>
          </div>
        </div>
        <button className="more">〉</button>
      </section>
      {/* 메인상품리스트 */}
      <section className="mainProduct">
        <div className="mainProductList">
          <div className="productTitle">
            <div className="titleBox">
              <div className="sectionTitle">
                <h3 className="productText">오늘은 어떤 차를 마셔볼까요?</h3>
              </div>
              <ul className="productTab">
                <li className="tabItem">여름맞이 선물</li>
                <li className="tabItem on">이번 주 인기 제품</li>
              </ul>
            </div>
          </div>
          <div className="listBoxCollect">
            <MainProductList />
            <div className="productBtn">
              <button
                type="button"
                className="btnA"
                onclick="javascript:location.href='/kr/ko/shop/item/list/best/sale'"
              >
                <span>더 보기</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* 메인배너모음 */}
      <section className="mainBanner">
        <div className="bannerCollection">
          <div className="banner">
            <div className="bannerFlexBox">
              <div className="contentBox1">
                {/* 오늘만 이가격  */}
                <div className="contentBoxItem">
                  <div className="bannerImg">
                    <img
                      src="https://www.osulloc.com/upload/kr/ko/adminImage/HU/JL/20220525174616674TI.jpg?quality=80"
                      alt="오늘만 이 가격"
                    />
                    <div className="textBox">
                      <div className="innerBanner">
                        <div className="bannerTitle">
                          <p className="leftText">오늘만 이 가격</p>
                          <p className="rightText" id="todayOnlyArea">
                            16<span>:</span>07<span>:</span>32
                          </p>
                        </div>
                        <div className="banProductInfo">
                          <p className="productName">웨딩 그린티 20입</p>
                          <div className="banPriceInfo">
                            <div className="salePercent">30%</div>
                            <div className="priceOrigin">23,000</div>
                            <div className="priceResult">16,100원</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contentBox2">
                {/* 출석체크 배너 */}
                <div className="contentBoxItem">
                  <div className="bannerImg">
                    <img
                      src="https://www.osulloc.com/upload/kr/ko/adminImage/OL/PG/20220518025211436FM.png?quality=80"
                      alt="5월 출석체크"
                    />
                    <div className="textBox">
                      <p className="text01">5월 출석체크</p>
                      <div className="dateInfo">
                        <p className="text02">05.18 - 05.31</p>
                        <span className="ddayTag">D-4</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 브랜드 스토리 배너 */}
                <div className="contentBoxItemDepth">
                  <div className="bannerImg">
                    <img
                      src="https://www.osulloc.com/kr/ko/static_cdj/images/main/brand_story_img.jpg"
                      alt="오설록 이야기"
                    />
                    <div className="textBox">
                      <p className="text01">TEA FROM JEJU</p>
                      <p className="text02">오설록 스토리</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 구독서비스 */}
      <section className="subscribe">
        <div class="subscribeBox1">
          <div class="subscribetitle">
            <h3 class="text01">다다일상 구독 </h3>
            <p class="text02">하루 한 번, 나를 만나는 시간을 가져보세요.</p>
          </div>
        </div>
        <div class="subscribeBox2">
          <div class="subsList">
            <div class="subsSwiperContainer">
              <div class="swiperWrapper">
                <div class="swiperSlide">
                  <div class="imgBox">
                    <img
                      class="subsImg"
                      src="https://www.osulloc.com/kr/ko/static_cdj/images/main/dada_img01_pc.jpg"
                      alt=""
                    />
                  </div>
                  <div class="descriptionBox">
                    <p class="banTitle">새롭게 만나는 차, 다다일상 베이직</p>
                    <div class="flexBox">
                      <div class="priceText">
                        <span class="subsDate">매월</span>
                        <span class="price">16,000원</span>
                      </div>
                      <span class="tag">배송비 Free</span>
                    </div>
                  </div>
                  <div class="hoverBox">
                    <div class="inner">
                      <div class="descriptionBox02">
                        <p class="banTitle">
                          새롭게 만나는 차, 다다일상 베이직
                        </p>
                        <div class="flexBox">
                          <div class="priceText">
                            <span class="subDate">매월</span>
                            <span class="price">16,000원</span>
                          </div>
                          <span class="tag">배송비 Free</span>
                        </div>
                        <div className="imgBoxinner" />
                      </div>
                      <div class="banContainer">
                        <p className="text">
                          오설록 티 소믈리에가 매월 그달의 테마와 어울리는
                          차들을 선정하여 보내드립니다.
                          <br />
                          일상의 작은 순간들을 차와 함께 새롭게 만나보세요.
                        </p>
                        <ul class="textList">
                          <li class="item">
                            <em class="pt">3종류 이상</em>의 다양한 티백 구성
                          </li>
                          <li class="item">
                            <em class="pt">2만원 이상</em> 정가 구성
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Main;
