减去中秋节课程: ~outTeachers.indexOf(teacher)
  ? reduceDakeShu(zhongQiuJie_infos) * 2 : 0,
减去讲座停课课程: ~outTeachers.indexOf(teacher) ? reduceDakeShu([
  ..._.filter(infos, (info) => {
    return (
      lecturePeriod["二5∽6"].charCodeAt() <= info.column.charCodeAt() &&
      info.column.charCodeAt() <= lecturePeriod["二7∽8"].charCodeAt() && !(~periods.indexOf(info.period) || ~sizhengLectures.indexOf(info.lecture))
    );
  }),
]) * 2 : 0,
减去彩排停课课程: ~outTeachers.indexOf(teacher) ? reduceDakeShu([
  ..._.filter(infos, (info) => {
    return (
      lecturePeriod["三5∽6"].charCodeAt() <= info.column.charCodeAt() &&
      info.column.charCodeAt() <= lecturePeriod["三5∽6"].charCodeAt() && !(~periods.indexOf(info.period) || ~sizhengLectures.indexOf(info.lecture))
    );
  }),
]) * 2 : 0,