减去运动会停课课程: ~outTeachers.indexOf(teacher) ? reduceDakeShu([
  ..._.filter(infos, (info) => {
    return (
      lecturePeriod["一1∽2"].charCodeAt() <= info.column.charCodeAt() &&
      info.column.charCodeAt() <= lecturePeriod["五5∽6"].charCodeAt() && !(~periods.indexOf(info.period) || ~sizhengLectures.indexOf(info.lecture))
    );
  }),
]) * 2 : 0,