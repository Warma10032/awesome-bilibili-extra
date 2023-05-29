// ==UserScript==
// @name         Awesome Bilibili Filter
// @namespace    awesome-bilibili-extra
// @version      0.1
// @description  项目过滤
// @author       HCLonely
// @include      /https:\/\/github\.com\/search\?.*q=bili.*/
// @include      https://greasyfork.org/zh-CN/scripts/by-site/bilibili.com*
// @run-at       document-end
// @require      https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/dayjs@1.11.1/dayjs.min.js
// ==/UserScript==

(async function () {
  'use strict';
  let addedItem = ["https://github.com/flanker/bilibili-dark-mode","https://github.com/xlzy520/bilibili-img-uploader","https://github.com/gaogaotiantian/biliscope","https://github.com/tuntun0609/tun-bili-tool","https://github.com/bilibili-helper/bilibili-helper-o","https://github.com/cyio/audio-only-bilibili","https://github.com/chitosai/bili-guessYouLike","https://github.com/Taosky/BiliMini","https://github.com/MNTMDEV/bilidown_lite","https://github.com/nightstream/bilimap","https://github.com/Missde/Edge-Bilibili","https://github.com/xmcp/pakku.js","https://unblockbilibili.app/","https://github.com/IndieKKY/bilibili-subtitle","https://github.com/eric2788/bilibili-jimaku-filter","https://github.com/zhw2590582/bilibili-live-recorder","https://greasyfork.org/zh-CN/scripts/428453","https://greasyfork.org/zh-CN/scripts/395575","https://github.com/HCLonely/bili-senior-newbie-qa","https://greasyfork.org/zh-CN/scripts/441403","https://github.com/the1812/Bilibili-Evolved","https://github.com/sheep-realms/Bilibili-Popups","https://github.com/lyzoris/BilibiliComments-userTag","https://greasyfork.org/zh-CN/scripts/422227","https://greasyfork.org/zh-CN/scripts/438461","https://greasyfork.org/zh-CN/scripts/374894","https://greasyfork.org/zh-CN/scripts/395456","https://greasyfork.org/zh-CN/scripts/368446","https://greasyfork.org/zh-CN/scripts/411092","https://greasyfork.org/zh-CN/scripts/437528","https://greasyfork.org/zh-CN/scripts/408526","https://github.com/kuzen/Bili-Recommended-List-Blocker","https://github.com/monSteRhhe/bili-msg-read","https://github.com/SynRGB/BiliBili-PassInteractiveVideo","https://github.com/SynRGB/BiliBili-EasyCopy","https://github.com/RSSYLY/BiliFilterX","https://github.com/NicerWang/Bili_Video_Speed_Controller","https://greasyfork.org/zh-CN/scripts/378513","https://greasyfork.org/zh-CN/scripts/425696","https://greasyfork.org/zh-CN/scripts/429152","https://greasyfork.org/zh-CN/scripts/396032","https://github.com/gamekingv/bilibili-oversea-search","https://greasyfork.org/zh-CN/scripts/432283","https://greasyfork.org/zh-CN/scripts/413228","https://greasyfork.org/zh-CN/scripts/384723","https://github.com/LuckyPuppy514/Bilibili-Markdown","https://github.com/insorker/Bilibili-Minus-Minus","https://github.com/MotooriKashin/Bilibili-Old","https://github.com/MaxChang3/Bilibili-Trackpad-Scroll-Reverser","https://github.com/magicdawn/bilibili-app-recommend","https://github.com/kghost/bilibili-area-limit","https://github.com/Cansiny0320/bilibili-block-plus","https://github.com/trychen/bilibili-comment-checker","https://github.com/monSteRhhe/bilibili-dynamic-del","https://github.com/lilei2603/bilibili-follow","https://github.com/PC6live/bilibili-joybook-tampermonkey","https://github.com/hakadao/bilibili-simple-home","https://github.com/Kr328/bilibili-subtitle-tweaks","https://github.com/hi94740/bilibili-timeline-filter.user.js","https://github.com/zweix123/BilibiliProgressBar","https://greasyfork.org/zh-CN/scripts/30367","https://github.com/liqi0816/bilitwin","https://github.com/owendswang/Download-Pictures-from-Bilibili-Timeline","https://github.com/SoonIter/tampermonkey-removePrefix-bilibili","https://github.com/QingXia-Ela/unlock-bilibili-PcBrowser-comment","https://github.com/fython/userscript-enhance-bilibili-player","https://greasyfork.org/zh-CN/scripts/428895","https://greasyfork.org/zh-CN/scripts/372289","https://greasyfork.org/zh-CN/scripts/428222","https://greasyfork.org/zh-CN/scripts/429205","https://greasyfork.org/zh-CN/scripts/398500","https://greasyfork.org/zh-CN/scripts/437941","https://greasyfork.org/zh-CN/scripts/398655","https://greasyfork.org/zh-CN/scripts/428342","https://github.com/jerryshell/better-bilibili","https://greasyfork.org/zh-CN/scripts/428746","https://greasyfork.org/zh-CN/scripts/25718","https://greasyfork.org/zh-CN/scripts/439169","https://greasyfork.org/zh-CN/scripts/406048","https://greasyfork.org/zh-CN/scripts/435623","https://greasyfork.org/zh-CN/scripts/429846","https://greasyfork.org/zh-CN/scripts/21416","https://github.com/c-basalt/bilibili-live-seeker-script","https://greasyfork.org/zh-CN/scripts/387120","https://greasyfork.org/zh-CN/scripts/368635","https://github.com/SeaLoong/BLRHH","https://github.com/isma123HH/bilibili_live-assistant","https://github.com/xfgryujk/bliveproxy","https://greasyfork.org/zh-CN/scripts/416768","https://greasyfork.org/zh-CN/scripts/418195","https://github.com/vooidzero/B23Downloader","https://github.com/nilaoda/BBDown","https://github.com/M-Kepler/beautify_bilibili_folder","https://github.com/niuhuan/bili-cli-rs","https://github.com/yu1745/bili-dl","https://github.com/feilongproject/bili-downloader","https://github.com/heartalborada-del/bili-downloader","https://github.com/BarryLiu1995/bili-fav-sniffer","https://github.com/mouxiaohui/bili-go","https://github.com/ZiAzusa/bili-video-merger","https://github.com/ScottSloan/Bili23-Downloader-CLI","https://github.com/ScottSloan/Bili23-Downloader","https://github.com/sgpublic/BiliBangumiDownloader","https://github.com/Zeal-L/BiliBili-Manga-Downloader","https://github.com/lc6464/BiliBiliDecryptor","https://github.com/IgnatiusGL/BiliBiliVideoDownload","https://github.com/KafuuNeko/BiliDownload","https://github.com/Naptie/BiliDownload","https://github.com/Harlan-H/BiliDownloader","https://github.com/JimmyLiang-lzm/biliDownloader","https://github.com/Majjcom/BiliDownloader","https://github.com/JimmyLiang-lzm/biliDownloader_GUI","https://github.com/kengwang/BiliDuang","https://github.com/jingfelix/BiliFM","https://github.com/Left024/BiliFavoritesDownloader","https://github.com/fangxx3863/biliNovel2Epub","https://github.com/lifegpc/bili","https://github.com/Montaro2017/bili_novel_packer","https://github.com/littleplus/Bilibili-Album-Download","https://github.com/here200/Bilibili-Download-Extension","https://github.com/judgeou/bilibili-api-client","https://github.com/yaoxi-std/bilibili-bangumi-downloader","https://github.com/imzusheng/bilibili-download","https://github.com/lecepin/bilibili-download","https://github.com/ZhelinCheng/bilibili-downloader","https://github.com/stevenjoezhang/bilibili-downloader","https://github.com/tyokyo320/bilibili-downloader","https://github.com/ibook86/bilibili-pic","https://github.com/Youky1/bilibili-save-nodejs","https://github.com/niyuancheng/bilibili-service","https://github.com/gaoyia/bilibili-uwp-download-fixtool","https://github.com/wxsms/bilibili-video2mp3","https://github.com/LJason77/bilibili-webhook","https://github.com/qingshanking/Bilibili.Album.Download","https://github.com/NorthSkybk/BilibiliAnimeDownload","https://github.com/Quandong-Zhang/BilibiliAudioDownloader-rebuild","https://github.com/Quandong-Zhang/bilibiliAudioDownloader.ps1","https://github.com/nuster1128/bilibiliAudioDownloader","https://github.com/molihuan/BilibiliCacheVideoMerge","https://github.com/VindenChen/BilibiliDecode","https://github.com/nICEnnnnnnnLee/BilibiliDown","https://github.com/lycode404/BilibiliDownloadExtract","https://github.com/YuSitong1999/BilibiliMemory","https://github.com/MunMunMiao/BilibiliVideoDownload","https://github.com/blogwy/BilibiliVideoDownload","https://github.com/ggdream/bilibili","https://github.com/misssonder/bilibili","https://github.com/binghe021/Bilibili_DownVideoToMp4","https://github.com/MarySueTeam/Bilibili_UP_Spider","https://github.com/lihe07/bilibili_comics_downloader","https://github.com/dzc217/bilibili_download","https://github.com/haogaulle/bilibili_downloader","https://github.com/Randark-JMT/Bilibili_manga_download","https://github.com/MOMOYATW/bilibili_manga_downloader","https://github.com/Henryhaohao/Bilibili_video_download","https://github.com/speakstone/bilibili_video_download_upid","https://github.com/1250422131/bilibilias","https://github.com/clostou/Bilili","https://github.com/yutto-dev/bilili","https://github.com/aoout/bilimusic","https://github.com/HFrost0/bilix","https://github.com/DuckBurnIncense/decode_bilibili_uwp_download_video","https://github.com/sodaling/FastestBilibiliDownloader","https://github.com/Xiaobaishushu25/JavaFx-BilibiliDownLoad","https://github.com/CeriChen/tiny-bilibili-downloader","https://github.com/yutto-dev/yutto","https://github.com/leiurayer/downkyi","https://github.com/MoyuScript/double-mouse-downloader","https://github.com/XL7Z/BILiveChat.js","https://github.com/orangelckc/bili-bot","https://github.com/chocotan/bili-recorder","https://github.com/yjqiang/bili2.0","https://github.com/qiaoshouzi/BiliBiliLiveAutoRec","https://github.com/SoingSaika/BiliBiliSongHime","https://github.com/Nemo2011/BiliDown","https://github.com/BanqiJane/BiliLiveChat","https://github.com/yunhuanyx/biliLiveNotification","https://github.com/See-Night/BiliLive","https://github.com/REV-Unit/BiliRec","https://github.com/summerkirakira/biliRecorder","https://github.com/TenyaChannel/biliVTS","https://github.com/qydysky/bili_danmu","https://github.com/FHChen0420/bili_live_shield_words","https://github.com/shr-go/bili_live_tui","https://github.com/Discreater/Bilibili-Live-Danmaku-vscode","https://github.com/iwxyi/Bilibili-MagicalDanmaku","https://github.com/dd-center/bilibili-dd-monitor","https://github.com/Tsuk1ko/bilibili-live-chat","https://github.com/JmPotato/bilibili-live-danmu-rs","https://github.com/LiangYuxuan/bilibili-live-helper","https://github.com/pandaGao/bilibili-live-helper","https://github.com/Beats0/bilibili-live-stream","https://github.com/ikexing-cn/bilibili-live-stream","https://github.com/Dawnnnnnn/bilibili-live-tools","https://github.com/filwsx/Bilibili-live","https://github.com/xiaoan-1/bilibili-ordersong-plugin","https://github.com/DarrenIce/bilibili-recording-go","https://github.com/dd-center/bilibili-vtuber-danmaku","https://github.com/Kurris/BilibiliDanMu","https://github.com/C1manyd/BilibiliLiveNotifier_WPF","https://github.com/HMBSbige/BilibiliLiveRecordDownLoader","https://github.com/withsalt/BilibiliLiveTools","https://github.com/BanqiJane/Bilibili_Danmuji","https://github.com/boxie123/Bilibili_GetReceivedGiftStream","https://github.com/mk-ling/Bilibili_Song_Player","https://github.com/windowsair/bilibili_danmaku","https://github.com/yaocccc/bilibili_live_tui","https://github.com/ddiu8081/bilicli","https://github.com/eric2788/biligo-live-ws","https://github.com/hr3lxphr6j/bililive-go","https://github.com/Gliese129/bililive-uploader","https://github.com/lxfly2000/BililiveAutoDanmaku","https://github.com/Executor-Cheng/BililiveNotification","https://github.com/BililiveRecorder/BililiveRecorder-WebUI","https://github.com/jkfujr/BililiveRecorder.cli-ds","https://github.com/BililiveRecorder/BililiveRecorder","https://github.com/Seyyu0015/Bililive_contribution_leaderboards","https://github.com/copyliu/bililive_dm","https://github.com/Moraxyc/Bililiveauto","https://github.com/zyzsdy/biliroku","https://github.com/limitcool/bilistream","https://github.com/Beats0/bilive-danmaku","https://github.com/Nauxscript/bilive","https://github.com/xfgryujk/blivechat","https://github.com/acgnhiki/blrec","https://github.com/3Shain/Comen","https://github.com/AsaChiri/DDRecorder","https://github.com/CHKZL/DDTV","https://github.com/congHu/DD_Monitor-android-kotlin","https://github.com/zhimingshenjun/DD_Monitor","https://github.com/champkeh/danmaku.bilibili","https://github.com/OToNaShiAKi/material-douden-tool","https://github.com/HsiangNianian/OlivaBiliLive","https://github.com/ZhangMingZhao1/StreamerHelper","https://github.com/Drelf2018/vue-bili-danmaku","https://github.com/valkjsaaa/auto-bilibili-recorder","https://github.com/googidaddy/bili-trash-bin","https://github.com/googidaddy/bili_upload_tool","https://github.com/AS042971/bili-auto-note","https://github.com/greats3an/bilibili-toolman","https://github.com/Gliese129/bililive-record-uploader","https://github.com/ForgQi/biliup-app","https://github.com/XiaoMiku01/biliup-go","https://github.com/ForgQi/biliup-rs","https://github.com/biliup/biliup","https://github.com/nasawz/lucky_bilibili_web","https://github.com/Gingmzmzx/TubeToBili","https://github.com/ame-yu/u2bili","https://github.com/LucasLee99/youlive2bili","https://github.com/INSIinc/Youtube2Bili","https://github.com/gaoxiaoduan/YoutubeToBilibiliHelp","https://github.com/HarukaKinen/YoutubeToBilibili","https://github.com/simon300000/bili-api","https://github.com/vapehacker/bili-auth","https://github.com/BotPlayerNeo/bili-live-api","https://github.com/LU-JIEJIE/bili-live-listener","https://github.com/MingxuanGame/BiliBiliQ","https://github.com/Neutralization/BiliBiliRankingScripts","https://github.com/TiyaAnlite/BiliCenter","https://github.com/xuzhb24/BiliPlayer","https://github.com/yanyvgongzuoshi/biliSDK","https://github.com/reveever/biliapi","https://github.com/OlafZhang/bilib","https://github.com/SocialSisterYi/bilibili-API-collect","https://github.com/hans362/Bilibili-Bangumi-JS","https://github.com/lovelyyoshino/Bilibili-Live-API","https://github.com/GoldrenEggs/Bilibili-Live-Message","https://github.com/Hsury/Bilibili-Toolkit","https://github.com/Nemo2011/bilibili-api-ts","https://github.com/Nemo2011/bilibili-api","https://github.com/Vespa314/bilibili-api","https://github.com/xlz122/bilibili-api","https://github.com/79W/bilibili-bullet","https://github.com/Ninzore/bilibili-captain","https://github.com/simon300000/bilibili-live-ws","https://github.com/pandaGao/bilibili-live","https://github.com/MoyuScript/bilibili-login-js","https://github.com/airingursb/bilibili-user","https://github.com/varieget/bilibili-ws-client","https://github.com/jingyuexing/bilibiliAPI","https://github.com/zimoyin/BilibiliAPI","https://github.com/lllk140/BilibiliLogin","https://github.com/CuteReimu/bilibili","https://github.com/Nemo2011/bilibili_api","https://github.com/MerlynAllen/bilibili_danmaku","https://github.com/iyear/biligo-live","https://github.com/iyear/biligo","https://github.com/PhotonQuantum/bililive-rs","https://github.com/SK-415/bilireq","https://github.com/niuhuan/bilirust","https://github.com/4t145/bilive-danmaku","https://github.com/Akegarasu/blivedm-go","https://github.com/FishZe/go-bili-chat","https://github.com/FishZe/go_bili_chat","https://github.com/LanMeiX/Imit_Bilibili","https://github.com/go-olive/olive","https://github.com/starknt/tiny-bilibili-ws","https://github.com/SDLMoe/Yabapi","https://github.com/zuiho1595440844/zuiho_bilibili","https://github.com/yichengchen/ATV-Bilibili-demo","https://github.com/xiaye13579/BBLL","https://github.com/KakarottoCui/BiLiBiLiSys","https://github.com/Richasy/Bili.Uwp","https://github.com/TANGhz17/BiliData","https://github.com/LeonNOV/BiliHub","https://github.com/BlameTwo/BiliStart","https://github.com/lucinhu/bili_you","https://github.com/12345-mcpython/bilibili-console","https://github.com/msojocs/bilibili-linux","https://github.com/reekystive/bilibili-ports","https://github.com/cwuom/bilibili-tools","https://github.com/dove-team/Bilibili.Manga","https://github.com/duzhaokun123/BilibiliHD2","https://github.com/MUedsa/BilibiliLiveTV","https://github.com/peacefulprogram/BilibiliTv","https://github.com/YeZC/bilibili","https://github.com/hdtls/bilibili","https://github.com/minured/bilibili","https://github.com/Shift-Ctrl-Alt/bilibili_project","https://github.com/10miaomiao/bilimiao2","https://github.com/xiaoyaocz/biliuwp-lite","https://github.com/aaa1115910/bv","https://github.com/Raftern/fake_bilibili","https://github.com/dxx/react-bilibili","https://github.com/lemon3yo/vue3-ts-bilibili","https://github.com/chunxiao01/vue3-vant4-bilibili","https://github.com/xfangfang/wiliwili","https://github.com/RayWangQvQ/BiliBiliToolPro","https://github.com/ICE99125/BiliBili_Checkin","https://github.com/lkeme/BiliHelper-personal","https://github.com/MociLSeng/BiliLiveAutoInteract","https://github.com/Cruii/bilibili-helper-hub","https://github.com/RealBeBetter/bilibili-helper","https://github.com/Wyatt1026/BilibiliDailyUp","https://github.com/RedSTARO/bilibiliHelper","https://github.com/chuiba/BilibiliTask_3","https://github.com/r3inbowari/bilicoin","https://github.com/bilive/bilive_client","https://github.com/XiaoMiku01/fansMedalHelper","https://github.com/djkcyl/BBot-Graia","https://github.com/kushidou/bili-notice-hoshino","https://github.com/nfe-w/bili_dynamic_push","https://github.com/cnscj/Bilibili-Notification","https://github.com/Colter23/bilibili-dynamic-mirai-plugin","https://github.com/cssxsh/bilibili-helper","https://github.com/FEINIAO233/bilibili-live-dm-qq-bot","https://github.com/xuejianxianzun/bilibili-live-push-qq","https://github.com/catandA/BilibiliBOT-1","https://github.com/xiaokexiang/bilibili_api","https://github.com/Arisuakip/bilivedioSnap","https://github.com/Coloryr/BotBiliBili","https://github.com/azusemst/discord-bilibili-embed","https://github.com/SK-415/HarukaBot","https://github.com/Nekoer/mirai-plugins-bilibili","https://github.com/Aunly/nonebot-plugin-bilichat","https://github.com/A-kirami/nonebot-plugin-bilicover","https://github.com/Shadow403/nonebot_plugin_BiliRequestAll","https://github.com/mengshouer/nonebot_plugin_analysis_bilibili","https://github.com/knva/nonebot_plugin_biliav","https://github.com/ASTWY/nonebot_plugin_bilibili_viode","https://github.com/TDK1969/nonebot_plugin_bilibilibot","https://github.com/Agnes4m/nonebot_plugin_bilifan","https://github.com/Ikaros-521/nonebot_plugin_searchBiliInfo","https://github.com/OhnkytaBlabdey/SagumeAutomata","https://github.com/simonsmh/telegram-bili-feed-helper","https://github.com/eric2788/vup_monitors","https://github.com/greyblueP/zhenxun_bot_bilibili_ding","https://github.com/HaruhiYunona/BiliVido-For-Typecho","https://github.com/chen310/BilibiliPotPlayer","https://github.com/HCLonely/hexo-bilibili-bangumi","https://github.com/pk5ls20/hexo-bilibili-plus","https://github.com/itKelis/MPV-Play-BiliBili-Comments","https://github.com/xlzy520/picgo-plugin-bilibili","https://github.com/xlzy520/typora-plugin-bilibili","https://github.com/Richasy/BIli.Mac.MenuBar","https://github.com/XiaoMiku01/bili-fans-medal-box","https://github.com/xlzy520/bili-short-url","https://github.com/Privilege-privacy/BiliBackup","https://github.com/rongchenlin/BiliBili-Lucky-Draw","https://github.com/Moemu/BiliBili-favorites-list-saver","https://github.com/hd80606b/BiliBili_Private_Msg","https://github.com/InJeCTrL/BiliCLOnline","https://github.com/lrhtony/BiliEmoji","https://github.com/OtomadWiki/mediawiki-extension-BilibiliInfo","https://github.com/cicidoll/BiliLottery","https://github.com/Xinrea/BiliMessengerElectron","https://github.com/LeoChen98/BiliRaffle","https://github.com/david082321/BiliRoaming-PHP-Server","https://github.com/pchpub/BiliRoaming-Rust-Server","https://github.com/yujincheng08/BiliRoaming","https://github.com/Ghauster/BiliUserInfo","https://github.com/CzJam/Bili_Realtime_Data","https://github.com/zjkwdy/bili_app_splash","https://github.com/cntvc/Bilibili-Toolkit","https://github.com/NaiboWang/Bilibili-XMLSubtitle-to-ASS","https://github.com/xiaofeiTM233/bilibili-activity-theme","https://github.com/Senasiko/bilibili-anime","https://github.com/moyuweiqing/bilibili-barrage-analysis","https://github.com/ImMappyJ/bilibili-catcher","https://github.com/circle-hotaru/bilibili-comment2png","https://github.com/Mark9804/bilibili-danmaku-regex","https://github.com/ccmuyuu/bilibili-emotes","https://github.com/flamego-examples/bilibili-lottery","https://github.com/wojiangkuanglong/bilibili-lucky","https://github.com/ashaowena/Bilibili-monitoring-system-server","https://github.com/injahow/bilibili-parse","https://github.com/Rovniced/bilibili-skin","https://github.com/lonelyion/bilibili-stats-badges","https://github.com/kaichii/bilibili-stats","https://github.com/zmh-program/bilibili-stats","https://github.com/Ghauster/BilibiliCommentScraper","https://github.com/Magi2B0y/BilibiliComments","https://github.com/vinouno/BilibiliDanmuCrawler","https://github.com/Bernankez/BilibiliFans","https://github.com/gitofleonardo/BilibiliFork","https://github.com/freysu/bilibiliLearningToolCLI","https://github.com/silie666/bilibiliLottery","https://github.com/fireworks99/bilibiliNoteExport","https://github.com/lllk140/BilibiliSuitBuy","https://github.com/givemefivw/BilibiliTranscoding","https://github.com/cwuom/BilibiliUnfollowingListener","https://github.com/MGMCN/bilibiliWordCloud","https://github.com/RubyRose-TAT/bilibili_Data_Analysis-Clout_Prediction","https://github.com/Ikaros-521/bilibili_draw","https://github.com/hexie2108/bilibili_dynamic_lottery","https://github.com/sandboxdream/bilibili_lottery_dynamic_del","https://github.com/dzxmxd/bilibili_master","https://github.com/lixiang810/bilibili_subscriber","https://github.com/powersee/bilibili_unread","https://github.com/lrzjbyx/Bilibili_video_convert_pdf","https://github.com/MotooriKashin/bilibiliplayer","https://github.com/chitosai/bilimini","https://github.com/JasonKhew96/biliroaming-go-server","https://github.com/bili-vd-bak/biliroaming-ts-server-vercel","https://github.com/96bearli/biliup_record","https://github.com/Ghauster/Bilivideoinfo","https://github.com/jiran214/chatBilibili","https://github.com/cangkongman/crawling-bilibili-personal-collect","https://github.com/cwuom/GetBilibiliUserInfo","https://github.com/shanmiteko/LotteryAutoScript","https://github.com/uyoungco/puppeteer-bilibili-up-dynamic","https://github.com/sudoskys/Tool-Asoul-Music","https://github.com/Nomination-NRB/VisualBilibili"];
  if (window.location.host === 'github.com') $('[data-testid="results-list"]>div').filter((i, e) => $(e).find('span.search-match').length < 2 || addedItem.includes(new URL($(e).find('a').attr('href'), 'https://github.com/').href)).hide();
  if (window.location.host === 'greasyfork.org') $('#browse-script-list>li').filter((i, e) => addedItem.includes($(e).find('a.script-link').attr('href').match(/(https:\/\/greasyfork.org\/zh-CN\/scripts\/[\d]+?)-/)?.[1])).hide();
  const observer = new MutationObserver(function () {
    if (window.location.host === 'github.com') $('[data-testid="results-list"]>div').filter((i, e) => $(e).find('span.search-match').length < 2 || addedItem.includes(new URL($(e).find('a').attr('href'), 'https://github.com/').href)).hide();
    if (window.location.host === 'greasyfork.org') $('#browse-script-list>li').filter((i, e) => addedItem.includes($(e).find('a.script-link').attr('href').match(/(https:\/\/greasyfork.org\/zh-CN\/scripts\/[\d]+?)-/)?.[1])).hide();
  });
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
