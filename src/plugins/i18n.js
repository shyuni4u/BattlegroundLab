import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    lang: `Lang`,
    notice: `Notice`,
    search: `Search`,
    send_data: `Send Data`,
    notyet: `Coming soon ...`,
    upload: `Upload`,
    menuHome: ``,
    menuNotice: `Notice`,
    menuStatic: `Statistics`,
    menuCreator: `Creator`,
    menuUploader: `Uploader`,
    menuUpload: `Upload`,
    checkNotice: `Check Notice. Please.`,
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
    Maleficent: `Maleficent`,
    Millhouse: `Maleficent`,
    Wagtoggle:  `Wagtoggle`,

    Guardian: `Guardian`,
    Mixed_none: `Mixed_none`,
    Mixed_mixed: `Mixed_mixed`,
    Mixed_divine: `Mixed_divine`,
    Mixed_battlecry: `Mixed_battlecry`,
    Mixed_deathrattle: `Mixed_deathrattle`,
    Dragon_none: `Dragon_none`,
    Dragon_mixed: `Dragon_mixed`,
    Dragon_divine: `Dragon_divine`,
    Dragon_battlecry: `Dragon_battlecry`,
    Beast_deathrattle: `Beast_deathrattle`,
    Beast_none: `Beast_none`,
    Murloc_mixed: `Murloc_mixed`,
    Mech_none: `Mech_none`,
    Mech_mixed: `Mech_mixed`,
    Mech_battlecry: `Mech_battlecry`,
    Mech_deathrattle: `Mech_deathrattle`,
    Neutral_divine: `Neutral_divine`,
    Neutral_mixed: `Neutral_mixed`,
    Daemon_none: `Daemon_none`,
    Daemon_mixed: `Daemon_mixed`,
    Jugglers: `Jugglers`,
    Watcher_weaver: `Watcher_weaver`,
    Kadgar: `Kadgar`,
    None: `None`,
    Lightfang: `Lightfang`,
    Stack: `Stack`,
    Pogo: `Pogo`,

    noticeList: [
      {
        header: `# Deck Tracker Battleground Plugin Development State 2`,
        content: `The plugin has been developed.

        You can download it <b><a href="https://github.com/shyuni4u/hdt-battleground-log-plugin/releases" target="_blank">[here]</a></b>.

        The website is still under development. You can check the progress <b><a href="http://battlegroundlab.com" target="_blank">[here]</a></b>.`,
        date: `2020.03.19`,
        desc: `Your interest is a great help to me. Thank you.`
      },
      {
        header: `# Deck Tracker Battleground Plugin Development State 1`,
        content: `It is being developed to manage records only by installing HDT plugin.
        
        The plugin is nearing completion and we will be developing the server soon.
        
        Development is expected to be completed within March, and domains may change when servers are developed.`,
        date: `2020.03.16`,
        desc: `Your interest is a great help to me. Thank you.`
      },
      {
        header: `## About Data ##`,
        date: `2020.03.04`,
        content: `There is no record API. I am counting by hand.

        If you want to add data,
        please send an email to <i>(shyuniz@naver.com)</i> in the <b><a href="https://docs.google.com/spreadsheets/d/13ZwYlseXl82gXaEXvbvFe0QmtV2gBJB4-m8Hn40Cd-Y/edit#gid=13835457" target="_blank">[Form]</a></b>.
    
        The DB is not available due to the charge issue. I will improve it later.
    
        Thank you.`,
        desc: `Thank you for your feedback.`
      }
    ]
  },
  kr: {
    lang: `Lang`,
    notice: `공지`,
    search: `검색`,
    send_data: `데이터 보내기`,
    notyet: `개발 진행중입니다.`,
    upload: `업로드`,
    menuHome: ``,
    menuNotice: `공지`,
    menuStatic: `통계`,
    menuCreator: `스트리머`,
    menuUploader: `업로더`,
    menuUpload: `업로드`,
    checkNotice: `공지 확인해주세요.`,
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
    Maleficent: `밀리피센트 마나스톰`,
    Millhouse: `밀하우스 마나스톰`,
    Wagtoggle: `여왕 왜그토글`,

    Guardian: `코발트`,
    Mixed_none: `혼합체`,
    Mixed_mixed: `혼합체 다수효과`,
    Mixed_divine: `혼합체 천상의보호막`,
    Mixed_battlecry: `혼합체 전투의함성`,
    Mixed_deathrattle: `혼합체 죽음의메아리`,
    Dragon_none: `용`,
    Dragon_mixed: `용 다수효과`,
    Dragon_divine: `용 천상의보호막`,
    Dragon_battlecry: `용 전투의함성`,
    Beast_none: `야수`,
    Beast_deathrattle: `야수 죽음의메아리`,
    Murloc_mixed: `멀록 다수효과`,
    Mech_none: `기계`,
    Mech_mixed: `기계 다수효과`,
    Mech_battlecry: `기계 전투의함성`,
    Mech_deathrattle: `기계 죽음의메아리`,
    Neutral_divine: `중립 천상의보호막`,
    Neutral_mixed: `중립 다수효과`,
    Daemon_none: `악마`,
    Daemon_mixed: `악마 다수효과`,
    Jugglers: `슈팅덱`,
    Watcher_weaver: `명인 감시자`,
    Kadgar: `카드가`,
    None: `정의할 수 없음`,
    Lightfang: `빛송곳니`,
    Stack: `다릴영능`,
    Pogo: `콩콩이`,

    noticeList: [
      {
        header: `# 덱트래커 전장 로그 플러그인 개발 현황 2`,
        content: `플러그인이 개발 완료되었습니다.

        <b><a href="https://github.com/shyuni4u/hdt-battleground-log-plugin/releases" target="_blank">[여기]</a></b>에서 다운받을 수 있습니다.

        사이트는 아직 개발중입니다. 진행상황은 <b><a href="http://battlegroundlab.com" target="_blank">[여기]</a></b>에서 확인하실 수 있습니다.`,
        date: `2020.03.19`,
        desc: `여러분의 관심은 저에게 큰 힘이 됩니다. 감사합니다.`
      },
      {
        header: `# 덱트래커 전장 로그 플러그인 개발 현황 1`,
        content: `플러그인만 설치하면 기록을 관리할 수 있도록 개발 중입니다.
        
        플러그인은 거의 완성단계에 있으며 곧 서버를 개발 할 예정입니다.

        3월 이내에 개발이 완료될 예정이며 서버가 개발되면 도메인이 바뀔 수 있습니다.`,
        date: `2020.03.16`,
        desc: `여러분의 관심은 저에게 큰 힘이 됩니다. 감사합니다.`
      },
      {
        header: `# DATA에 관하여`,
        content: `아직 쓸만한 전장 API가 없기 때문에 수작업으로 데이터를 수집하고 있습니다.
        
        데이터 추가를 원하시면 <b><a href="https://docs.google.com/spreadsheets/d/13ZwYlseXl82gXaEXvbvFe0QmtV2gBJB4-m8Hn40Cd-Y/edit#gid=13835457" target="_blank">[양식]</a></b>대로 메일(<i>shyuniz@naver.com</i>)로 보내주시기 바랍니다.
    
        요금 문제로 인하여 DB를 사용 못하고 있습니다. 차후 개선해나가겠습니다.`,
        date: `2020.03.04`,
        desc: `피드백 또한 메일로 보내주시면 감사합니다.`
      }
    ]
  }
};

export default new VueI18n({
  locale: `kr`, // set locale
  fallbackLocale: `en`, // set fallback locale
  messages // set locale messages
});
