import { startOfDay, addHours, isSameHour, getHours, isWithinInterval, startOfWeek, addDays, isSameDay, getDay, format } from "date-fns";

export function createTimeLine(day) {
  const timeline = [];
  for (let start = 0; start < 24; start++) {
    timeline.push(addHours(startOfDay(day), start));
  }
  return timeline;
}

export function createDays() {
  let currentDay = startOfWeek(new Date())
  const days = []
  for (let i = 0; i < 7; i++) {
    const day = {
      id: i,
      value: addDays(currentDay, i),
      label: format(addDays(currentDay, i), "ccc")
    }
    days.push(day)
  }
  return days
}

export function createData(date) {
    console.log("creating Data")
    const data = [];
    let max = 500;
    let i = 1;
    while (i <= max) {
        const checkedIn = Math.floor(Math.random() * (1 - 0 + 1) + 0);
        const user  = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        const day = Math.floor(Math.random() * (6 - 0 + 1) + 0);
        const time = Math.floor(Math.random() * (20 - 4 + 1) + 4);
        const duration = time + Math.floor(Math.random() * (4 - 1 + 1) + 1);
        const newCheckIn = {
            id: i,
            name: `User ${user}`,
            startTime: addHours(addDays(startOfWeek(date), day), time),
            endTime: addHours(addDays(startOfWeek(date), day), duration),
        }
        if (checkedIn) {
            data.push(newCheckIn);
        }
        i++;
    }
    return data;
}

export function getValue(data, time) {
  const count = data.filter((item) => isWithinInterval(time, {start: item.startTime, end: item.endTime}));
  return count.length;
}

export function getMinMax(item) {
    const start = getHours(item.startTime)
    const end = getHours(item.endTime)
    const min = Math.ceil((start / 24) * 100);
    const max = 100 - Math.ceil((end / 24) * 100);
    return { min, max };
}
