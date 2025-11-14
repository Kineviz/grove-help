//外聘9.28周二
let _9_28_infos = _.filter(infos, (info) => {
            return (
              lecturePeriod["二1∽2"].charCodeAt() <= info.column.charCodeAt() &&
              info.column.charCodeAt() <= lecturePeriod["二9∽10"].charCodeAt() && !(~periods.indexOf(info.period) || ~sizhengLectures.indexOf(info.lecture))
            );
          })
//国庆三天
let guoQingJie_infos = _.filter(infos, (info) => {
            return (
              lecturePeriod["三1∽2"].charCodeAt() <= info.column.charCodeAt() &&
              info.column.charCodeAt() <= lecturePeriod["五5∽6"].charCodeAt() && !(~periods.indexOf(info.period) || ~sizhengLectures.indexOf(info.lecture))
            );
          })
//中秋两天
let zhongQiuJie_infos = _.filter(infos, (info) => {
            return (
              lecturePeriod["一1∽2"].charCodeAt() <= info.column.charCodeAt() &&
              info.column.charCodeAt() <= lecturePeriod["二9∽10"].charCodeAt() && !(~periods.indexOf(info.period) || ~sizhengLectures.indexOf(info.lecture))
            );
          })
//讲座停课
let jiangzuo_infos = _.filter(infos, (info) => {
            return (
              lecturePeriod["二5∽6"].charCodeAt() <= info.column.charCodeAt() &&
              info.column.charCodeAt() <= lecturePeriod["二7∽8"].charCodeAt() && !(~periods.indexOf(info.period) || ~sizhengLectures.indexOf(info.lecture))
            );
          })
//彩排停课
let 彩排_infos = _.filter(infos, (info) => {
            return (
              lecturePeriod["三5∽6"].charCodeAt() <= info.column.charCodeAt() &&
              info.column.charCodeAt() <= lecturePeriod["三5∽6"].charCodeAt() && !(~periods.indexOf(info.period) || ~sizhengLectures.indexOf(info.lecture))
            );
          })
//运动会停课
let 运动会_infos = _.filter(infos, (info) => {
            return (
              lecturePeriod["一1∽2"].charCodeAt() <= info.column.charCodeAt() &&
              info.column.charCodeAt() <= lecturePeriod["五5∽6"].charCodeAt() && !(~periods.indexOf(info.period) || ~sizhengLectures.indexOf(info.lecture))
            );
          })
//本校4/5周劳动周的防止多减
cancelInfos._4 = guoQingJie_infos;
cancelInfos._5 = zhongQiuJie_infos;
cancelInfos._7 = jiangzuo_infos;
cancelInfos._8 = 彩排_infos;
cancelInfos._9 = 运动会_infos;