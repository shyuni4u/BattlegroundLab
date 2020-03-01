import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    lang: `Lang`,
    pageTitle: `BattlegroundLab`,
    goRepository: `Go Repository`,
    more: `More`,
    shortcut: 'Shortcut',
    menuHome: ``,
    date: `Date`
  },
  kr: {
    lang: `언어`,
    pageTitle: `전장연구소`,
    goRepository: `저장소 바로가기`,
    more: `더보기`,
    shortcut: '바로가기',
    menuHome: ``,
    date: `기간`
  }
};

export default new VueI18n({
  locale: `kr`, // set locale
  fallbackLocale: `en`, // set fallback locale
  messages // set locale messages
});
