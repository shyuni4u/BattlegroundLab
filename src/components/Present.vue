<template>
  <div class="present">
    <div class="filter">
      <div class="div-form">
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
        </b-form>
      </div>
      <div class="div-title">
        <h1><b-icon-controller></b-icon-controller> 전장연구소</h1>
      </div>
    </div>

    <div class="main-container">
      <section class="main-info">
        <div class="box hero_placement">
          <v-chart class="wide" :options="heroPlacement" @mouseover="mouseover_hero_name" />
        </div>
        <div class="box comp_placement">
          <v-chart class="wide" :options="compPlacement" />
        </div>
      </section>

      <section class="sub-info">
        <div class="box sm-hide">
          <span class="box-title"><b-icon-flag-fill></b-icon-flag-fill> 집계 정보</span>
          
          <ul>
            <li>집계방법: 트위치 다시보기 기준</li>
            <li>집계기간: 16.4.0 패치 이후</li>
            <li>최근 업데이트: 2020.03.01 16:51</li>
          </ul>
        </div>

        <div class="box sm-hide">
          <span class="box-title"><b-icon-bar-chart-fill></b-icon-bar-chart-fill> 그래프 정보</span>
          <ul>
            <li>막대 높이: 플레이 총합</li>
            <li><div class="mini-bar" :style="{ backgroundColor: color_list[0] }"></div> : 1등 횟수</li>
            <li><div class="mini-bar" :style="{ backgroundColor: color_list[1] }"></div> : 순방 횟수</li>
            <li><div class="mini-bar" :style="{ backgroundColor: color_list[2] }"></div> : 패배 횟수</li>
            <li><div class="mini-line" :style="{ backgroundColor: color_list[3] }"></div> : 평균 순위</li>
          </ul>
        </div>

        <div class="banner_wrap">
          <ins class="kakao_ad_area" style="display:none;" 
          data-ad-unit    = "DAN-1jyoczcff0x10" 
          data-ad-width   = "300" 
          data-ad-height  = "250"></ins> 
          <div v-el:scriptHolder></div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
//import GithubListVue from './GithubList.vue'
import ECharts from 'vue-echarts'
import LogData from '@/json/data.json';
import StreamerData from '@/json/streamer.json';

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
      compPlacement: {},   //  comp chart option
      log: LogData
    }
  },
  created() {
    this.load_hero_placement();
    this.load_comp_placement();
    this.load_adfit();
  },
  methods: {
    load_adfit () {
      let scriptEl = document.createElement('script');
      scriptEl.setAttribute('src', '//t1.daumcdn.net/kas/static/ba.min.js');
      scriptEl.async = true;
      document.head.appendChild(scriptEl);
      document.body.appendChild(scriptEl);
    },
    capitalizeFLetter (str) {
      return str[0].toUpperCase() + str.slice(1);
    },
    change_filter () {
      this.load_hero_placement();
      this.load_comp_placement();
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

      chart_data.sort((el1, el2) => {     //  sort of el.hero
        if (el1.hero > el2.hero) return 1;
        else return -1;
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
            interval: 8,
            inverse: true
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
    },
    load_comp_placement () {
      let log_comp_list = this.array_filter_log().map(el => el.comp);
      let arr_comp = log_comp_list.filter(function (comp, index) {  //  remove duplicated comp name
        return log_comp_list.indexOf(comp) === index;
      });
      let chart_data = [];
      arr_comp.forEach((el) => {
        let obj = {
          comp: el,
          win: 0,
          good: 0,
          bad: 0,
          avg: []
        };
        chart_data.push(obj);
      });

      this.array_filter_log().forEach((el) => {
        //arr_comp.indexOf(el.comp): idx of { chart_data[idx] }
        if (el.placement == 1) {
          chart_data[arr_comp.indexOf(el.comp)].win++;
        }
        else if (el.placement > 1 && el.placement < 5) {
          chart_data[arr_comp.indexOf(el.comp)].good++;
        } else {
          chart_data[arr_comp.indexOf(el.comp)].bad++;
        }
        chart_data[arr_comp.indexOf(el.comp)].avg.push(el.placement);
      });

      chart_data.sort((el1, el2) => {     //  sort of el.comp
        if (el1.comp > el2.comp) return 1;
        else return -1;
      });

      this.compPlacement = {
        title: { text: '조합픽률/순위' },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        legend: {
          data: this.legend_list
        },
        color: this.color_list,
        xAxis: [
          {
            type: 'category',
            data: chart_data.map(el => this.capitalizeFLetter(el.comp)),
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
            interval: 8,
            inverse: true
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
ul {
  list-style-type: none;
  padding: 0;
}
.filter {
  margin: 0px;
  background-color: #333;
  color: #fff;
  font-size: 0.9rem;
  display: flex;
  .div-form {
    flex: 60% 1 1;
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
  .div-title {
    flex: 40% 1 1;
    font-weight: bold;
    letter-spacing: 5px;
    text-align: center;
    align-self: center;
  }
}
div.main-container {
  padding-top: 10px;
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
    >.box-title {
      padding-left: 10px;
      font-weight: bold;
      font-size: 15px;
      line-height: 2em;
      color: #879292;
    }
    >ul>li {
      padding-left: 10px;
      font-size: 13px;
      line-height: 2em;
      color: #879292;

      .mini-bar {
        border-radius: 4px;
        display: inline-flex;
        vertical-align: middle;
        width: 20px;
        height: 18px;
      }
      .mini-line {
        display: inline-flex;
        vertical-align: middle;
        width: 20px;
        height: 3px;
      }
    }
  }
}

@media (min-width: 768px) {
  div.main-container {
    display: flex;
    section {
      flex: 1;
      &.main-info {
        flex: calc(100% - 310px) 1 1;
      }
      &.sub-info {
        flex: 300px 1 1;
        margin-left: 10px;
      }
    }
  }
}
@media (max-width: 767px) {
  div.main-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
    section {
      flex: 1;
      &.main-info {
        flex: 100% 0 0;
      }
      &.sub-info {
      flex: 100% 0 0;
      }
    }
    .sm-hide {
      display: none;
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
