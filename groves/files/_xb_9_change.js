减去开学周一课程: reduceDakeShu([
  ..._.filter(infos, (info) => {
    return (
      lecturePeriod["一1∽2"].charCodeAt() <= info.column.charCodeAt() &&
      info.column.charCodeAt() <= lecturePeriod["一9∽10"].charCodeAt() && !(~periods.indexOf(info.period) || ~sizhengLectures.indexOf(info.lecture)) && 
      info.period === '1-18(全周)'
    );
  }),
]) * 2,
加上9_28课程: ~outTeachers.indexOf(teacher)
  ? reduceDakeShu(_9_28_infos) * 2 : 0,
减去国庆节课程: ~outTeachers.indexOf(teacher)
  ? reduceDakeShu(guoQingJie_infos) * 2 : 0,