<template>
  <div class="floor">
    <div class="py-container">
      <div class="clearfix title">
        <h3 class="fl">{{ floorData.name }}</h3>
        <div class="fr">
          <ul class="clearfix nav-tabs">
            <li :class="{ active: index === 0 }" v-for="(item, index) in floorData.navList" :key="index">
              <a href="#tab1" data-toggle="tab">{{ item.text }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="tab-content">
        <div class="tab-p ane">
          <div class="floor-1">
            <div class="blockgary">
              <ul class="jd-list">
                <li v-for="(item, index) in floorData.keywords" :key="index">
                  {{ item }}
                </li>
              </ul>
              <img :src="floorData.imgUrl" />
            </div>
            <div class="floorBanner">
              <div class="swiper-container" id="floor1Swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="./images/floor-1-b01.png" />
                  </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>

                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img src="./images/floor-1-2.png" />
              </div>
              <div class="floor-conver-pit">
                <img src="./images/floor-1-3.png" />
              </div>
            </div>
            <div class="split center">
              <img src="./images/floor-1-4.png" />
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div class="floor-conver-pit">
                <img src="./images/floor-1-5.png" />
              </div>
              <div class="floor-conver-pit">
                <img src="./images/floor-1-6.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Floor',
  props: ['floorData']
}
</script>

<style lang="less" scoped>
.floor {
  margin-top: 15px;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .title {
      .fl {
        float: left;
        color: #c81623;
        font-size: 20px;
        line-height: 30px;
        margin: 9px 0;
        font-weight: 700;
      }

      .fr {
        float: right;

        .nav-tabs {
          margin: 10px 0 0;
          display: inline-block;

          li {
            float: left;
            line-height: 18px;

            a {
              padding-top: 1px;
              font-weight: 400;
              background-color: #fff;

              &::after {
                content: '|';
                padding: 0 10px;
              }
            }

            &:nth-child(7) {
              a {
                &::after {
                  content: '';
                }
              }
            }

            &.active {
              a {
                color: #e1251b;
              }
            }
          }
        }
      }
    }

    .tab-content {
      border-top: 2px solid #c81623;
      border-bottom: 1px solid #e4e4e4;

      .tab-pane {
        .floor-1 {
          height: 360px;
          display: flex;

          .blockgary {
            width: 210px;
            height: 100%;
            background: #f7f7f7;

            .jd-list {
              padding: 15px 0;
              overflow: hidden;

              li {
                list-style-type: none;
                float: left;
                width: 40%;
                margin: 0 10px;
                border-bottom: 1px solid #e4e4e4;
                text-align: center;
                line-height: 26px;
              }
            }

            img {
              width: 100%;
            }
          }

          .floorBanner {
            width: 330px;
            height: 100%;
          }

          .split {
            width: 220px;
            height: 100%;
            position: relative;

            .floor-x-line {
              position: absolute;
              background: #e4e4e4;
              width: 220px;
              height: 1px;
              top: 180px;
            }

            .floor-conver-pit {
              width: 100%;
              height: 50%;

              img {
                width: 100%;
                height: 100%;
                transition: all 400ms;

                &:hover {
                  opacity: 0.8;
                }
              }
            }
          }

          .center {
            border: 1px solid #e4e4e4;
          }
        }
      }
    }
  }
}
</style>
