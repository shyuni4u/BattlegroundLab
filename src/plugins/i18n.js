import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    lang: `Lang`,
    menuHome: ``,
    date: `Date`,
    pageTitle: `Battleground Lab`,
    dateStart: `Start`,
    dateEnd: `End`,
    select: `Select`,
    hero: `Hero`,
    comp: `Comp`,
    pick_count: `Play count`,
    pick_ratio: `Play ratio`,
    avg_placement: `Avg rank`,
    win_count: `1st`,
    win_ratio: `1st ratio`,
    good_count: `Win`,
    good_ratio: `Win ratio`,
    bad_count: `Defeat`,

    Alexstrasa: `Alexstrasa`,
    Reno: `Reno`,
    Yog: `Yog`,
    Nozdormu: `Nozdormu`,
    Malygos: `Malygos`,
    Deryl: `Deryl`,
    Deathwing: `Deathwing`,
    Tirion: `Tirion`,
    Edwin: `Edwin`,
    Rafam: `Rafam`,
    Toki: `Toki`,
    Shudderwock: `Shudderwock`,
    Curator: `Curator`,
    Galakrond: `Galakrond`,
    Afk: `A.F.Key`,
    Elise: `Elise`,
    George: `George`,
    Ysera: `Ysera`,
    Sindragosa: `Sindragosa`,
    Bartender: `Bartender`,
    Akazamzarak: `Akazamzarak`,
    Lich_queen: `Lich_queen`,
    Sylvannas: `Sylvannas`,
    Ragnaros: `Ragnaros`,
    Rat_king: `Rat king`,
    Patchwork: `Patchwork`,
    Lich_king: `Lich_king`,
    Pyramad: `Pyramad`,
    Nefarian: `Nefarian`,
    Jaraxxus: `Jaraxxus`,
    Patches: `Patches`,

    Guardian: `Guardian`,
    Mixed: `Mixed`,
    Divine: `Divine`,
    Big_dragon: `Big_dragon`,
    Beast: `Beast`,
    Jugglers: `Jugglers`,
    Bran_mixed: `Bran_mixed`,
    Dragon: `Dragon`,
    Murloc: `Murloc`,
    Divine_dragon: `Divine_dragon`,
    Deathrattle: `Deathrattle`,
    Mech_deathrattle: `Mech_deathrattle`,
    Watcher_weaver: `Watcher_weaver`,
    Kadgar: `Kadgar`,
    None: `None`,
    Battlecry: `Battlecry`,
    Lightfang: `Lightfang`,
    Neutral: `Neutral`,
    Tog_dragon: `Tog_dragon`,
    Daemon: `Daemon`,
    Mech: `Mech`,
    Divine_lightfang: `Divine_lightfang`,
    Stack: `Stack`,
    Watcher_weaver_jugglers: `Watcher_weaver_jugglers`,
    Pogo: `Pogo`,
    One_lv_dragon: `One_lv_dragon`
  },
  kr: {
    lang: `언어`,
    menuHome: ``,
    date: `기간`,
    pageTitle: `전장 연구소`,
    dateStart: `시작`,
    dateEnd: `종료`,
    select: `선택`,
    hero: `영웅`,
    comp: `조합`,
    pick_count: `플레이 수`,
    pick_ratio: `픽률`,
    avg_placement: `평균등수`,
    win_count: `1등`,
    win_ratio: `1등 확률`,
    good_count: `순방`,
    good_ratio: `순방 확률`,
    bad_count: `패배`,

    Alexstrasa: `알렉스트라자`,
    Reno: `리노 잭슨`,
    Yog: `요그사론`,
    Nozdormu: `노즈도르무`,
    Malygos: `말리고스`,
    Deryl: `춤추는 다릴`,
    Deathwing: `데스윙`,
    Tirion: `티리온 폴드링`,
    Edwin: `에드윈 밴클리프`,
    Rafam: `대악당 라팜`,
    Toki: `무한의 토키`,
    Shudderwock: `두억시니`,
    Curator: `전시관리인`,
    Galakrond: `갈라크론드`,
    Afk: `A. F. 케이`,
    Elise: `엘리스 스타시커`,
    George: `타락한 조지`,
    Ysera: `이세라`,
    Sindragosa: `신드라고사`,
    Bartender: `바텐더`,
    Akazamzarak: `위대한 아카잠자락`,
    Lich_queen: `리치 바즈하이알`,
    Sylvannas: `실바나스 윈드러너`,
    Ragnaros: `불의 군주 라그나로스`,
    Rat_king: `왕쥐`,
    Patchwork: `패치워크`,
    Lich_king: `리치킹`,
    Pyramad: `피라마드`,
    Nefarian: `네파리안`,
    Jaraxxus: `군주 자락서스`,
    Patches: `해적 패치스`,

    Guardian: `코발트`,
    Mixed: `혼합체`,
    Divine: `천상의보호막`,
    Big_dragon: `빅 용`,
    Beast: `야수덱`,
    Jugglers: `슈팅덱`,
    Bran_mixed: `브란버프 혼합체`,
    Dragon: `용`,
    Murloc: `멀록`,
    Divine_dragon: `천보 용`,
    Deathrattle: `죽음의메아리`,
    Mech_deathrattle: `기계 죽음의메아리`,
    Watcher_weaver: `명인 감시자`,
    Kadgar: `카드가`,
    None: `정의할 수 없음`,
    Battlecry: `전투의 함성`,
    Lightfang: `빛송곳니`,
    Neutral: `중립`,
    Tog_dragon: `밀랍기수 용`,
    Daemon: `악마`,
    Mech: `기계`,
    Divine_lightfang: `천보 빛송곳니 혼합`,
    Stack: `다릴영능`,
    Watcher_weaver_jugglers: `명인 감시자 곡예사 혼합`,
    Pogo: `콩콩이`,
    One_lv_dragon: `1렙 용`
  }
};

export default new VueI18n({
  locale: `kr`, // set locale
  fallbackLocale: `en`, // set fallback locale
  messages // set locale messages
});
