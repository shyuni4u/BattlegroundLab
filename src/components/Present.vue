<template>
  <div class="present">
    <div class="filter">
      <div class="div-form">
        <b-form class="filter_form">
          <b-input-group class="mb-2 datepicker">
            <label for="datepicker-start">시작</label>
            <b-form-datepicker id="datepicker-start" size="sm" v-model="startDate" class="mb-2" min="2020.02.28" @input="change_filter()"></b-form-datepicker>
            <label for="datepicker-end"> ~ 종료</label>
            <b-form-datepicker id="datepicker-end" size="sm" v-model="endDate" class="mb-2" min="2020.02.28" @input="change_filter()"></b-form-datepicker>
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

    <div class="banner_wrap">
      <ins class="kakao_ad_area" style="display:none;" 
      data-ad-unit    = "DAN-1jyoczcff0x10" 
      data-ad-width   = "300" 
      data-ad-height  = "250"></ins>
    </div>

    <div class="main-container">
      <section class="main-info">
        <div class="box">
          <b-tabs card>
            <b-tab title="영웅" active>
              <b-table
              :items="heroTable"
              :fields="heroFields"
              class="placement-list"
              responsive="sm"
              sort-direction="desc"
              head-variant="dark">
                <template v-slot:table-colgroup="scope">
                  <col
                    v-for="field in scope.fields"
                    :key="field.key"
                    :style="{ width: (field.key === 'index' ? '50px'
                      : (field.key === 'pick_count' || field.key === 'win_count' || field.key === 'good_count' || field.key === 'bad_count' || field.key === 'avg') ? '120px'
                      : (field.key === 'pick_ratio' || field.key === 'win_ratio' || field.key === 'good_ratio' || field.key === 'bad_ratio') ? '200px'
                      : '250px') }"
                  >
                </template>
              
                <template v-slot:cell(index)="data">
                  <span class="">{{ data.index + 1 }}</span>
                </template>

                <template v-slot:cell(hero)="data">
                  <img class="img-hero-cell" :src="getImgUrl(data.value)" :alt="data.value" :thumbnail="getImgUrl('thumbnail')" />
                  <b class="text-info">{{ capitalizeFLetter(data.value) }}</b>
                </template>

                <template v-slot:cell(pick_count)="data">
                  <span class="text-success">{{ data.value }}</span>
                </template>

                <template v-slot:cell(pick_ratio)="data">
                  <ul class="progress-include-span">
                    <li class="progress-in-cell">
                      <b-progress class="" :max="max_hero_ratio">
                        <b-progress-bar :value="data.value" :variant="(data.value < 5 ? 'secondary' : 'success')"></b-progress-bar>
                      </b-progress>
                    </li>
                    <li class="span-with-progress">
                      <span class="cell">{{ data.value.toFixed(2) }}%</span>
                    </li>
                  </ul>
                </template>

                <template v-slot:cell(avg)="data">
                  <span :class="(data.value <= 4) ? 'cell above' : 'cell'">{{ data.value.toFixed(2) }}</span>
                </template>

                <template v-slot:cell(win_count)="data">
                  <span class="text-warning">{{ data.value }}</span>
                </template>

                <template v-slot:cell(win_ratio)="data">
                  <ul class="progress-include-span">
                    <li class="progress-in-cell">
                      <b-progress class="" :max="max_ratio">
                        <b-progress-bar :value="data.value" variant="warning"></b-progress-bar>
                      </b-progress>
                    </li>
                    <li class="span-with-progress">
                      <span class="cell">{{ data.value.toFixed(2) }}%</span>
                    </li>
                  </ul>
                </template>

                <template v-slot:cell(good_count)="data">
                  <span class="text-info">{{ data.value }}</span>
                </template>

                <template v-slot:cell(good_ratio)="data">
                  <ul class="progress-include-span">
                    <li class="progress-in-cell">
                      <b-progress class="" :max="max_ratio">
                        <b-progress-bar :value="data.value" variant="info"></b-progress-bar>
                      </b-progress>
                    </li>
                    <li class="span-with-progress">
                      <span :class="(data.value > 90) ? 'cell above' : 'cell'">{{ data.value.toFixed(2) }}%</span>
                    </li>
                  </ul>
                </template>

                <template v-slot:cell(bad_count)="data">
                  <span class="text-danger">{{ data.value }}</span>
                </template>

                <!--
                <template v-slot:cell(bad_ratio)="data">
                  <ul class="progress-include-span">
                    <li class="progress-in-cell">
                      <b-progress class="" :max="max_ratio">
                        <b-progress-bar :value="data.value" variant="danger"></b-progress-bar>
                      </b-progress>
                    </li>
                    <li class="span-with-progress">
                      <span class="cell">{{ data.value }}%</span>
                    </li>
                  </ul>
                </template>
                -->
              </b-table>
            </b-tab>
            <b-tab title="조합">
              <b-table
              :items="compTable"
              :fields="compFields"
              class="placement-list"
              responsive="sm"
              sort-direction="desc"
              head-variant="dark">
                <template v-slot:table-colgroup="scope">
                  <col
                    v-for="field in scope.fields"
                    :key="field.key"
                    :style="{ width: (field.key === 'index' ? '50px'
                      : (field.key === 'pick_count' || field.key === 'win_count' || field.key === 'good_count' || field.key === 'bad_count' || field.key === 'avg') ? '120px'
                      : (field.key === 'pick_ratio' || field.key === 'win_ratio' || field.key === 'good_ratio' || field.key === 'bad_ratio') ? '200px'
                      : '250px') }"
                  >
                </template>
              
                <template v-slot:cell(index)="data">
                  <span class="">{{ data.index + 1 }}</span>
                </template>

                <template v-slot:cell(comp)="data">
                  <b class="text-info">{{ capitalizeFLetter(data.value) }}</b>
                </template>

                <template v-slot:cell(pick_count)="data">
                  <span class="text-success">{{ data.value }}</span>
                </template>

                <template v-slot:cell(pick_ratio)="data">
                  <ul class="progress-include-span">
                    <li class="progress-in-cell">
                      <b-progress class="" :max="max_comp_ratio">
                        <b-progress-bar :value="data.value" :variant="(data.value < 5 ? 'secondary' : 'success')"></b-progress-bar>
                      </b-progress>
                    </li>
                    <li class="span-with-progress">
                      <span class="cell">{{ data.value.toFixed(2) }}%</span>
                    </li>
                  </ul>
                </template>

                <template v-slot:cell(avg)="data">
                  <span :class="(data.value <= 4) ? 'cell above' : 'cell'">{{ data.value.toFixed(2) }}</span>
                </template>

                <template v-slot:cell(win_count)="data">
                  <span class="text-warning">{{ data.value }}</span>
                </template>

                <template v-slot:cell(win_ratio)="data">
                  <ul class="progress-include-span">
                    <li class="progress-in-cell">
                      <b-progress class="" :max="max_ratio">
                        <b-progress-bar :value="data.value" variant="warning"></b-progress-bar>
                      </b-progress>
                    </li>
                    <li class="span-with-progress">
                      <span class="cell">{{ data.value.toFixed(2) }}%</span>
                    </li>
                  </ul>
                </template>

                <template v-slot:cell(good_count)="data">
                  <span class="text-info">{{ data.value }}</span>
                </template>

                <template v-slot:cell(good_ratio)="data">
                  <ul class="progress-include-span">
                    <li class="progress-in-cell">
                      <b-progress class="" :max="max_ratio">
                        <b-progress-bar :value="data.value" variant="info"></b-progress-bar>
                      </b-progress>
                    </li>
                    <li class="span-with-progress">
                      <span :class="(data.value > 90) ? 'cell above' : 'cell'">{{ data.value.toFixed(2) }}%</span>
                    </li>
                  </ul>
                </template>

                <template v-slot:cell(bad_count)="data">
                  <span class="text-danger">{{ data.value }}</span>
                </template>
              </b-table>
            </b-tab>
          </b-tabs>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
//import GithubListVue from './GithubList.vue'
//import ECharts from 'vue-echarts'
import LogData from '@/json/data.json';
import StreamerData from '@/json/streamer.json';

//import 'echarts/lib/chart/line'
//import 'echarts/lib/chart/bar';
//import 'echarts/lib/component/tooltip';
//import 'echarts/lib/component/title';
//import 'echarts/lib/component/legend';

export default {
  name: 'present',
  //components: { 'v-chart': ECharts },
  data: () => {
    const streamJson = StreamerData;
    //let that = this;
    return {
      max_hero_ratio: 10,
      max_comp_ratio: 20,
      max_ratio: 100,
      legend_list: ['1st', '2~4', '5~8', 'AVG'],
      color_list: ['#ffc81b', '#5b6777', '#f15b5d', '#d88d73'],
      recentUpdate: '2020.03.02 12:36',     //  datetime of updated data
      startDate: new Date('2020-02-27T00:00:00+09:00'),
      endDate: new Date(),
      streamers: streamJson,
      checkStremers: streamJson.map(el => el.id),
      heroTable: {},   //  hero chart option
      compPlacement: {},   //  comp chart option
      log: LogData,
      heroFields: [
        {
          key: 'index',
          label: '#',
          sortable: false
        },
        
        {
          key: 'hero',
          label: '영웅',
          sortable: false
        },
        {
          key: 'pick_count',
          label: '플레이 수',
          sortable: true
        },
        {
          key: 'pick_ratio',
          label: '픽률',
          sortable: true
        },
        {
          key: 'avg',
          label: '평균등수',
          sortable: true
        },
        {
          key: 'win_count',
          label: '1등',
          sortable: true
        },
        {
          key: 'win_ratio',
          label: '1등 확률',
          sortable: true
        },
        {
          key: 'good_count',
          label: '순방',
          sortable: true
        },
        {
          key: 'good_ratio',
          label: '순방 확률',
          sortable: true
        },
        {
          key: 'bad_count',
          label: '패배',
          sortable: true
        }
        /*
        ,{
          key: 'bad_ratio',
          label: '확률',
          sortable: true
        }
        */
      ],
      compFields: [
        {
          key: 'index',
          label: '#',
          sortable: false
        },
        
        {
          key: 'comp',
          label: '조합',
          sortable: false
        },
        {
          key: 'pick_count',
          label: '플레이 수',
          sortable: true
        },
        {
          key: 'pick_ratio',
          label: '픽률',
          sortable: true
        },
        {
          key: 'avg',
          label: '평균등수',
          sortable: true
        },
        {
          key: 'win_count',
          label: '1등',
          sortable: true
        },
        {
          key: 'win_ratio',
          label: '1등 확률',
          sortable: true
        },
        {
          key: 'good_count',
          label: '순방',
          sortable: true
        },
        {
          key: 'good_ratio',
          label: '순방 확률',
          sortable: true
        },
        {
          key: 'bad_count',
          label: '패배',
          sortable: true
        }
        /*
        ,{
          key: 'bad_ratio',
          label: '확률',
          sortable: true
        }
        */
      ]
    }
  },
  created() {
    this.change_filter();
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
    getImgUrl(path) {
      let image = require.context('@/assets/hero/', false, /\.png$/);
      return image('./' + path + '.png');
    },
    change_filter () {
      this.load_hero_placement();
      this.load_comp_placement();
    },
    array_filter_log () {
      let that = this;
      let arr = this.checkStremers;
      return this.log.filter(function(el) {
        return arr.includes(el.name)
          && (new Date(that.startDate).getTime() <= new Date(el.date).getTime() && new Date(that.endDate).getTime() >= new Date(el.date).getTime());   // include checked members ?
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
          win_count: 0,
          good_count: 0,
          bad_count: 0,
          pick_count: 0,
          win_ratio: 0,
          good_ratio: 0,
          bad_ratio: 0,
          pick_ratio: 0,
          sum: 0,
          avg: 0
        };
        chart_data.push(obj);
      });

      this.array_filter_log().forEach((el) => {
        //arr_hero.indexOf(el.hero): idx of { chart_data[idx] }
        const idx = arr_hero.indexOf(el.hero);
        if (el.placement == 1) {
          chart_data[idx].win_count++;
        }
        if (el.placement >= 1 && el.placement <= 4) {
          chart_data[idx].good_count++;
        } else {
          chart_data[idx].bad_count++;
        }
        chart_data[idx].pick_count++;
        chart_data[idx].sum += el.placement;
      });
      
      chart_data.forEach((el) => {
        el.win_ratio = (el.win_count / el.pick_count * 100);
        el.good_ratio = (el.good_count / el.pick_count * 100);
        //el.bad_ratio = (el.bad_count / el.pick_count * 100);
        el.pick_ratio = (el.pick_count / log_hero_list.length * 100);
        el.avg = el.sum / el.pick_count;
      });

      chart_data.sort((el1, el2) => {     //  sort of el.comp
        if (el1.pick_ratio < el2.pick_ratio) return 1;
        else return -1;
      });
      this.heroTable = chart_data;
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
          win_count: 0,
          good_count: 0,
          bad_count: 0,
          pick_count: 0,
          win_ratio: 0,
          good_ratio: 0,
          bad_ratio: 0,
          pick_ratio: 0,
          sum: 0,
          avg: 0
        };
        chart_data.push(obj);
      });

      this.array_filter_log().forEach((el) => {
        //arr_comp.indexOf(el.comp): idx of { chart_data[idx] }
        const idx = arr_comp.indexOf(el.comp);
        if (el.placement == 1) {
          chart_data[idx].win_count++;
        }
        if (el.placement >= 1 && el.placement <= 4) {
          chart_data[idx].good_count++;
        } else {
          chart_data[idx].bad_count++;
        }
        chart_data[idx].pick_count++;
        chart_data[idx].sum += el.placement;
      });
      
      chart_data.forEach((el) => {
        el.win_ratio = (el.win_count / el.pick_count * 100);
        el.good_ratio = (el.good_count / el.pick_count * 100);
        el.pick_ratio = (el.pick_count / log_comp_list.length * 100);
        el.avg = el.sum / el.pick_count;
      });

      chart_data.sort((el1, el2) => {     //  sort of el.comp
        if (el1.pick_ratio < el2.pick_ratio) return 1;
        else return -1;
      });
      this.compTable = chart_data;
    }
  }
}
</script>

<style scoped lang="scss">
.banner_wrap {
  text-align: center;
}
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
    .placement-list {
      background-color: #fff;
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

.placement-list {
  font-size: 0.8em;
  .img-hero-cell {
    width: 30px;
    height: 36px;
    margin: -10px;
  }
  img.img-hero-cell + b {
    padding-left: 20px;
  }
  ul.progress-include-span {
    display: flex;
    margin-bottom: 0px;
    .progress-in-cell {
      flex: 80% 1 1;
      align-self: center;
    }
    .span-with-progress {
      flex: 20% 1 1;
      text-indent: 5px;
      font-size: 0.9em;
    }
  }
  .cell {
    &.above {
      font-weight: bold;
      color: #3d95e5;
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
  .filter {
    .div-form {
      flex: 100% 0 0;
    }
    .div-title {
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
