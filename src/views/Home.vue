<template>
  <div class="home">
    <div class="filter">
      <div class="div-form">
        <b-form class="filter-form">
          <b-input-group class="streamer">
            <span class="">{{ $t('select') }}</span>
            <div class="custom-control custom-checkbox" v-for="entry of streamers" :key="entry.id">
              <input type="checkbox" :id="entry.id" :value="entry.id" class="custom-control-input" v-model="checkStremers" @change="change_filter()">
              <label class="custom-control-label" :for="entry.id">{{ entry.name }}</label>
            </div>
          </b-input-group>
        </b-form>
      </div>
    </div>

    <div class="banner_wrap">
      <ins class="kakao_ad_area" style="display:none;" 
      data-ad-unit    = "DAN-1jyoczcff0x10" 
      data-ad-width   = "728" 
      data-ad-height  = "90"></ins>
    </div>

    <div class="main-container">
      <section class="main-info">
        <div class="box">
          <b-tabs card>
            <b-tab :title="$t('hero')" active>
              <hero-data
              :startDate="startDate"
              :endDate="endDate"
              :paramStremers="checkStremers"/>
            </b-tab>

            <b-tab :title="$t('comp')">
              <comp-data
              :startDate="startDate"
              :endDate="endDate"
              :paramStremers="checkStremers"/>
            </b-tab>
          </b-tabs>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import HeroData from '@/components/HeroData.vue'
import CompData from '@/components/CompData.vue'

import StreamerData from '@/json/streamer.json';

import common from '@/mixins/common';

export default {
  name: 'home',
  mixins: [common],
  components: {
    'hero-data': HeroData,
    'comp-data': CompData
  },
  data: () => {
    const streamJson = StreamerData;
    return {
      startDate: new Date('2020-02-27T00:00:00+09:00'),
      endDate: new Date(),
      streamers: streamJson,
      checkStremers: streamJson.map(el => el.id)
    }
  },
  created() {
    this.checkStremers = (this.getCookieArray('bl_checkStremers') === null ? this.checkStremers : this.getCookieArray('bl_checkStremers'));
    this.change_filter();
    this.load_adfit();
  },
  methods: {
    change_filter () {
      this.setCookieArray('bl_checkStremers', this.checkStremers, 365);
    }
  }
}
</script>

<style scoped lang="scss">
div.filter {
  margin: 0px;
  margin-bottom: 5px;
  background-color: #333;
  color: #fff;
  font-size: 0.9rem;
  display: flex;
  .div-form {
    flex: 100% 1 1;
    .filter-form {
      padding: 10px;
      .datepicker {
        max-width: 550px;
        label {
          padding: 5px 10px 5px 5px;
        }
      }
      .streamer {
        padding: 0px;
        div.custom-checkbox {
          padding-left: 50px;
        }
      }
    }
  }
}
div.banner_wrap {
  text-align: center;
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
