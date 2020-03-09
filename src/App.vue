<template>
  <div id="app">
    <div id="header">
      <div id="nav">
        <b-navbar toggleable="lg" type="dark">
          <b-navbar-brand id="web-title" href="#">{{ $t('pageTitle') }}</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="enzo-nav-items" v-for="entry in menus" :key="entry.title">
                <b-nav-item href="#" v-if="entry.sub.length == 0">
                  <router-link :to="entry.linkTo">{{ $t(entry.title) }}</router-link>
                </b-nav-item>

                <b-nav-item-dropdown :text="$t(entry.title)" v-if="entry.sub.length > 0">
                  <b-dropdown-item
                  href="#"
                  class="enzo-nav-items-dropdown"
                  v-for="sub_entry in entry.sub"
                  :key="sub_entry.title">
                    <router-link :to="sub_entry.linkTo">{{ $t(sub_entry.title) }}</router-link>
                  </b-dropdown-item>
                </b-nav-item-dropdown>
              </b-navbar-nav>

              <b-navbar-nav class="ml-auto">
                <b-nav-form>
                  <b-form-input size="sm" class="mr-sm-2 hidden" :placeholder="$t('search')"></b-form-input>
                  <b-button size="sm" class="my-2 my-sm-0 hidden" type="submit">{{ $t('search') }}</b-button>
                </b-nav-form>

                <b-nav-item-dropdown class="ml-2" :text="$t('lang')" right>
                  <b-dropdown-item href="#" v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
                    <flag :iso="entry.flag" v-bind:squared=false />
                    {{ entry.title }}
                  </b-dropdown-item>
                </b-nav-item-dropdown>
              </b-navbar-nav>
            </b-collapse>
        </b-navbar>
      </div>
    </div>
    <div id="body-wrapper">

      <aside id="t-ad">
        <ins class="kakao_ad_area" style="display:none;" 
        data-ad-unit    = "DAN-ureklmg6kg8i" 
        data-ad-width   = "320" 
        data-ad-height  = "100"></ins>
      </aside>

      <aside id="l-ad">
        <div class="ad-wrapper">
          <ins class="kakao_ad_area" style="display:none;" 
          data-ad-unit    = "DAN-1jyoczcff0x10" 
          data-ad-width   = "160" 
          data-ad-height  = "600"></ins>
        </div>
      </aside>

      <div id="container">
        <router-view />
      </div>

      <aside id="r-ad">
        <div class="ad-wrapper">
          <ins class="kakao_ad_area" style="display:none;" 
          data-ad-unit    = "DAN-qxlk5lq8xx0i" 
          data-ad-width   = "160" 
          data-ad-height  = "600"></ins>
        </div>
      </aside>

    </div>
    <div id="footer">
      현재 백수라 시간이 있어서 만들어보았습니다. 피드백 및 연락은 메일로 부탁드립니다.<br/>
      e-mail: shyuniz@naver.com | home: <a href="https://shyuni4u.github.io/homepage/dist/">https://shyuni4u.github.io/homepage/dist/</a><br/>
      Copyright 2020. shyuniz. All rights reserved.<br/>
    </div>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';
import common from '@/mixins/common';

export default {
  name: "App",
  mixins: [common],
  data() {
    return {
      loadingStatus : false,
      menus: [
        {
          linkTo: '/',
          title: 'menuHome',
          sub: []
        },
        {
          linkTo: '/notice',
          title: 'menuNotice',
          sub: []
        },
        {
          linkTo: '/creator',
          title: 'menuCreator',
          sub: []
        },
        {
          linkTo: '/uploader',
          title: 'menuUploader',
          sub: []
        }
      ],
      languages: [
        {
          flag: 'kr',
          language: 'kr',
          title: '한국어'
        },
        {
          flag: 'us',
          language: 'en',
          title: 'English'
        }
      ]
    }
  },
  created () {
    i18n.locale = (this.getCookie('bl_lang') || 'kr');
  },
  methods: {
    changeLocale (locale) {
      i18n.locale = locale;
      this.setCookie('bl_lang', locale, 365);
    }
  }
};
</script>

<style lang="scss">
.hidden {
  display: none !important;
}
#app {
  background-color: #eaeaea;
  font-family: 'Helvetica, "Malgun Gothic", "Apple SD Gothic Neo", AppleGothic, Dotum, Arial, Tahoma, Helvetica,"Malgun Gothic","Apple SD Gothic Neo",AppleGothic,Dotum,Arial,Tahoma';
}
#nav {
  background-color: #5383e8;
  #web-title {
    font-family: '나눔바른고딕';
    font-weight: bold;
    font-size: 1.4rem;
    color: #fff;
  }
}
.enzo-nav-items {
  font-weight: bold;
  &.active {
    color: #fff;
  }
  a {
    color: rgba(255, 255, 255, 0.5);

    &:hover, &:focus {
      color: rgba(255, 255, 255, 0.75);
      text-decoration: none;
    }

    .router-link-exact-active {
      color: rgba(255, 255, 255, 0.5);
      &:hover, &:focus {
        color: rgba(255, 255, 255, 0.75);
        text-decoration: none;
      }
    }
  }
}

.enzo-nav-items-dropdown {
  a {
    color: #16181b;

    &:hover, &:focus {
      color: #16181b;
    }

    .router-link-exact-active {
      color: #16181b;
      &:hover, &:focus {
        color: #16181b;
        text-decoration: none;
      }
    }
  }
}

#body-wrapper {
  width: 100%;
  display: flex;
  #container {
    margin: 0 auto;
    flex: 1280px 0 1;
    text-align: left;
    zoom: 1;
  }
  aside {
    flex: 1;
    margin: 5px auto;
    div.ad-wrapper {
      position: sticky;
      top: 5px;
      text-align: center;
    }
  }
}

@media (min-width: 1280px) {
  #body-wrapper {
    display: flex;
    flex-wrap: nowrap;
    #t-ad {
      display: none;
    }
  }
}

@media (max-width: 1280px) {
  #body-wrapper {
    display: flex;
    flex-wrap: wrap;
    #l-ad, #r-ad {
      display: none;
    }
  }
}

#footer {
  background-color: #0c0c13;
  text-align: center;
  color: #fff;
  font-size: 13px;
  height: 80px;
  width: 100%;
  padding: 10px;
  a {
    color: #fff;
  }
}
</style>
