import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    lang: `Lang`,
    notice: `Notice`,
    send_data: `Send Data`,
    menuHome: ``,
    date: `Date`,
    pageTitle: `Battleground Lab`,
    player: `Creator`,
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

    Dtn_seho: `dtn_seho`,
    Educated_Collins: `Educated_Collins`,
    EndoZoa: `EndoZoa`,
    Portialyn: `portialyn`,
    Bebe872: `bebe872`,

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
    Mixed_mixed: `Mixed_mixed`,
    Mixed_divine: `Mixed_divine`,
    Dragon_battlecry: `Dragon_battlecry`,
    Dragon_mixed: `Dragon_mixed`,
    Beast_deathrattle: `Beast_deathrattle`,
    Mixed_battlecry: `Mixed_battlecry`,
    Mixed_deathrattle: `Mixed_deathrattle`,
    Jugglers: `Jugglers`,
    Murloc_mixed: `Murloc_mixed`,
    Dragon_none: `Dragon_none`,
    Mech_deathrattle: `Mech_deathrattle`,
    Watcher_weaver: `Watcher_weaver`,
    Kadgar: `Kadgar`,
    None: `None`,
    Lightfang: `Lightfang`,
    Neutral_divine: `Neutral_divine`,
    Neutral_mixed: `Neutral_mixed`,
    Daemon_none: `Daemon_none`,
    Mech_battlecry: `Mech_battlecry`,
    Mech_mixed: `Mech_mixed`,
    Daemon_mixed: `Daemon_mixed`,
    Dragon_divine: `Dragon_divine`,
    Mech_none: `Mech_none`,
    Mixed_none: `Mixed_none`,
    Stack: `Stack`,
    Pogo: `Pogo`,

    notice_20200304: `<i><b>2020.03.04</b></i>
    <h5>## About Data ##</h5>
    There is no record API. I am counting by hand.

    If you want to add data,
    please send an email to <i>(shyuniz@naver.com)</i> in the form <b>[send data]</b>.

    The DB is not available due to the charge issue. I will improve it later.

    Thank you.`
  },
  kr: {
    lang: `Lang`,
    notice: `공지`,
    send_data: `데이터 보내기`,
    menuHome: ``,
    date: `기간`,
    pageTitle: `전장 연구소`,
    player: `스트리머`,
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

    Dtn_seho: `정세호`,
    Educated_Collins: `Educated_Collins`,
    EndoZoa: `EndoZoa`,
    Portialyn: `포셔`,
    Bebe872: `bebe872`,

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
    Mixed_mixed: `혼합체 다수효과`,
    Mixed_divine: `혼합체 천상의보호막`,
    Dragon_battlecry: `용 전투의함성`,
    Dragon_mixed: `용 다수효과`,
    Beast_deathrattle: `야수 죽음의메아리`,
    Mixed_battlecry: `혼합체 전투의함성`,
    Mixed_deathrattle: `혼합체 죽음의메아리`,
    Jugglers: `슈팅덱`,
    Murloc_mixed: `멀록 다수효과`,
    Dragon_none: `용`,
    Mech_deathrattle: `기계 죽음의메아리`,
    Watcher_weaver: `명인 감시자`,
    Kadgar: `카드가`,
    None: `정의할 수 없음`,
    Lightfang: `빛송곳니`,
    Neutral_divine: `중립 천상의보호막`,
    Neutral_mixed: `중립 다수효과`,
    Daemon_none: `악마`,
    Mech_battlecry: `기계 전투의함성`,
    Mech_mixed: `기계 다수효과`,
    Daemon_mixed: `악마 다수효과`,
    Dragon_divine: `용 천상의보호막`,
    Mech_none: `기계`,
    Mixed_none: `혼합체`,
    Stack: `다릴영능`,
    Pogo: `콩콩이`,

    notice_20200304: `<i><b>2020.03.04</b></i>
    <h5># DATA에 관하여</h5>
    &nbsp;아직 쓸만한 전장 API가 없기 때문에 수작업으로 데이터를 수집하고 있습니다.

    &nbsp;데이터 추가를 원하시면 <b>[데이터 보내기]</b>의 양식대로 메일(<i>shyuniz@naver.com</i>)로 보내주시기 바랍니다.

    &nbsp;요금 문제로 인하여 DB를 사용 못하고 있습니다. 차후 개선해나가겠습니다.

    &nbsp;피드백 또한 메일로 보내주시면 감사합니다.`
  }
};

export default new VueI18n({
  locale: `kr`, // set locale
  fallbackLocale: `en`, // set fallback locale
  messages // set locale messages
});
