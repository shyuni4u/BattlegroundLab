<template>
  <div class="present">
    <div class="filter">
      <b-form class="filter_form">
        <b-input-group class="mb-2 datepicker">
          <label for="datepicker-start">시작</label>
          <b-form-datepicker id="datepicker-start" size="sm" v-model="startDate" class="mb-2" min="2020.02.28"></b-form-datepicker>
          <label for="datepicker-end"> ~ 종료</label>
          <b-form-datepicker id="datepicker-end" size="sm" v-model="endDate" class="mb-2" min="2020.02.28"></b-form-datepicker>
        </b-input-group>
        <b-input-group class="mb-2 streamer">
          <span class="">선택</span>
          <div class="custom-control custom-checkbox" v-for="entry of streamers" :key="entry.id">
						<input type="checkbox" :id="entry.id" :value="entry.id" class="custom-control-input" v-model="checkStremers" @change="change_filter()">
						<label class="custom-control-label" :for="entry.id">{{ entry.name }}</label>
					</div>
        </b-input-group>
        <!-- checkStremers: {{ checkStremers }} -->
      </b-form>
    </div>

    <div class="main-container">
      <section class="main-info">
        <div class="box hero_placement">
          <v-chart class="wide" :options="heroPlacement" @mouseover="mouseover_hero_name" />
        </div>
        <div class="box hero_placement">
          <v-chart class="wide" :options="heroPlacement" />
        </div>
      </section>

      <section class="sub-info">
        <div class="box hero_placement">
          <v-chart class="wide" :options="heroPlacement" />
        </div>
        <div class="box hero_placement">
          <v-chart class="wide" :options="heroPlacement" />
        </div>
      </section>
    </div>
    <div class="for_print print_footer">QR 코드로 홈페이지를 방문하시면 프로젝트와 GitHub 자료를 보실 수 있습니다.</div>
  </div>
</template>

<script>
//import GithubListVue from './GithubList.vue'
import ECharts from 'vue-echarts'
import LogData from '@/json/data.json';
import StreamerData from '@/json/streamer.json';

//import 'echarts/lib/component/polar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';

export default {
  name: 'present',
  components: { 'v-chart': ECharts },
  data: () => {
    const streamJson = StreamerData;
    return {
      legend_list: ['1st', '2~4', '5~8', 'AVG'],
      color_list: ['#ffc81b', '#5b6777', '#f15b5d', '#d88d73'],
      recentUpdate: '2020-02-29',
      startDate: '2020-02-28',
      endDate: new Date(),
      streamers: streamJson,
      checkStremers: streamJson.map(el => el.id),
      heroPlacement: {},   //  hero chart option
      log: LogData
    }
  },
  created() {
    this.load_hero_placement();
  },
  methods: {
    capitalizeFLetter (str) {
      return str[0].toUpperCase() + str.slice(1);
    },
    change_filter () {
      this.load_hero_placement();
    },
    mouseover_hero_name (param) {
      if (param.componentType == 'xAxis') {
        console.log(param.value);
      }
    },
    array_filter_log () {
      let arr = this.checkStremers;
      return this.log.filter(function(el) {
        //  need if filter of date
        return arr.includes(el.name);   // include checked members ?
      });
    },
    load_hero_placement () {
      let log_hero_list = this.array_filter_log().map(el => el.hero);
      let arr_hero = log_hero_list.filter(function (hero, index) {  //  remove duplicated hero name
        return log_hero_list.indexOf(hero) === index;
      });
      let chart_data = [];
      arr_hero.forEach((el) => {
        let obj = {
          hero: el,
          win: 0,
          good: 0,
          bad: 0,
          avg: []
        };
        chart_data.push(obj);
      });

      this.array_filter_log().forEach((el) => {
        //arr_hero.indexOf(el.hero): idx of { chart_data[idx] }
        if (el.placement == 1) {
          chart_data[arr_hero.indexOf(el.hero)].win++;
        }
        else if (el.placement > 1 && el.placement < 5) {
          chart_data[arr_hero.indexOf(el.hero)].good++;
        } else {
          chart_data[arr_hero.indexOf(el.hero)].bad++;
        }
        chart_data[arr_hero.indexOf(el.hero)].avg.push(el.placement);
      });

      this.heroPlacement = {
        title: { text: '영웅픽률/순위' },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
            /*
            - formatter 검색
            정렬 적용
            AdFit 적용
            그래프 소개: http://www.inven.co.kr/board/hs/3508/15636
            스트리머 소개: http://www.inven.co.kr/board/hs/3508/15688
            */
          }
        },
        legend: {
          data: this.legend_list
        },
        color: this.color_list,
        xAxis: [
          {
            type: 'category',
            data: chart_data.map(el => this.capitalizeFLetter(el.hero)),
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '게임수',
            interval: 5
          },
          {
            type: 'value',
            name: '평균등수',
            min: 0,
            max: 8,
            interval: 8
          }
        ],
        series: [
          {
            name: this.legend_list[0],
            type: 'bar',
            stack: 'one',
            data: chart_data.map(el => el.win)
          },
          {
            name: this.legend_list[1],
            type: 'bar',
            stack: 'one',
            data: chart_data.map(el => el.good)
          },
          {
            name: this.legend_list[2],
            type: 'bar',
            stack: 'one',
            data: chart_data.map(el => el.bad)
          },
          {
            name: this.legend_list[3],
            type: 'line',
            yAxisIndex: 1,
            data: chart_data.map(el => (el.avg.reduce((a, b) => a + b) / el.avg.length).toFixed(2))
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
.filter {
  margin: 10px 0px;
  background-color: #333;
  color: #fff;
  font-size: 0.9rem;
  .filter_form {
    padding: 10px;
    .datepicker {
      max-width: 550px;
      label {
        padding: 5px 10px 5px 5px;
      }
    }
    .streamer {
      padding: 5px;
      padding-bottom: 0px;
      div.custom-checkbox {
        padding-left: 50px;
      }
    }
  }
}

div.main-container {
  .box {
    border: 1px solid #cdd2d2;
    box-shadow: 0 1px #dcdfdf;
    background: #f2f2f2;
    border-radius: 2px;
    min-height: 50px;
    padding: 10px;
    margin-bottom: 10px;
    >.wide {
      width: 100%;
    }
  }
}


div.items {
  padding: 24px 24px 24px 10px;
  .profile.header {
    display: inline-block;
    color: #333;
    margin-bottom: 0;
    font-size: 20px;
    border: none;
    margin: 0.3rem 0;
    padding: 0;
    font-weight: 900;
    line-height: 1.28571429em;
    text-transform: none;
  }
  .profile.header_sub {
    padding-left: 3px;
    color: #c9c9c9;
    font-size: 18px;
  }
  .item {
    border: none;
    margin: 0;
    padding: 1em 0;
    font-size: 1em;
    display: flex;
    width: 100%;
    min-height: 0;
    box-shadow: none;
    transition: box-shadow .1s ease;
    .logo.image {
      margin-right: 10px;
    }
    .image:not(.ui) {
      width: auto;
    }
    .image {
      position: relative;
      -webkit-box-flex: 0;
      flex: 0 0 auto;
      display: block;
      float: none;
      margin: 0;
      padding: 0;
      .ui.logo {
        width: 64px;
        height: 64px;
        position: relative;
        background: #fff;
        border-radius: 5px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 5px;
        }
      }
    }
    .content {
      min-width: 0;
      width: 100%;
      display: block;
      margin-left: 0;
      -ms-flex-item-align: top;
      -ms-grid-row-align: top;
      padding-left: 16px;
      -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      background: 0 0;
      margin: 0;
      padding: 0;
      box-shadow: none;
      font-size: 1em;
      border: none;
      border-radius: 0;
      >div:not(:last-child) {
        margin-bottom: 4px;
      }
      .title {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 18px;
        font-weight: 700;
        color: #273444;
        strong {
          font-weight: bolder;
        }
      }
      .sub_title {
        font-size: 16px;
        font-weight: 700;
        text-overflow: ellipsis;
      }
      p.date {
        margin: 0 0 .5em;
        line-height: 1.5em;
        font-size: 12px;
        color: #6e7980;
      }
      .due {
        margin: 0 0 .5em;
        line-height: 1.5em;
        font-size: 12px;
        color: #6e7980;
        font-weight: normal;
      }
      .desc {
        color: #28323c;
        font-size: 14px;
        img {
          width: 80%;
          height: 80%;
        }
      }
      .skill {
        color: #5a678d;
        font-size: 12px;
      }
    }
  }
  .list_item::before {
    content: "";
    position: relative;
    z-index: 1;
    left: -30px;
    height: 100%;
    border-left: 1px #ccc solid;
  }
}
.tag_list {
  float: right;
}
.tag {
  margin-left: 5px;
  font-size: 10px;
  border: #ccc solid 2px;
  background-color: #fff;
  color: #ccc;
  border-radius: 5px;
  padding: 2px 4px;
  &.android {
    color: green;
    border: green solid 2px;
  }
  &.smartfactory {
    color: red;
    border: red solid 2px;
  }
}
.hr {
  background-color: #bcc1bf;
  width: 170px;
  height: 8px;
  text-align: left;
}
.nowrap {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  -ms-overflow-style: none;
}
.break {
  white-space: normal;
}
.h4, .h5 {
  font-weight: bold;
  color: #555;
}
.print_footer {
  height: 100px;
  width: 100%;
  padding: 30px;
  font-weight: bold;
  background: #c9c9c9;
}
div, span {
  white-space: normal;
  text-overflow: ellipsis;
}
@media (min-width: 768px) {
  div.main-container {
    display: flex;
    section {
      flex: 1;
      &.main-info {
        flex: calc(70% - 20px) 1 1;
      }
      &.sub-info {
        flex: 30% 1 1;
        margin-left: 10px;
      }
    }
  }
}
@media (max-width: 767px) {
  div.main-container {
    display: flex;
    flex-wrap: wrap;
    section {
      flex: 1;
      &.main-info {
        flex: 100% 0 0;
      }
      &.sub-info {
      flex: 100% 0 0;
      }
    }
  }
}

@media screen {
  .for_print {
    display: none;
  }
}
@media print {
  .for_print {
    display: block;
    -webkit-print-color-adjust: exact;
  }
}
</style>
