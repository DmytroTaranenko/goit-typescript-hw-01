enum DayOfWeek {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

const isWeekend = (day: DayOfWeek): boolean => {
    return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};

const dayOfWeeks = {
  Monday: 'Monday',
} as const
 
const isWeekend2 = (day: 'Monday'| 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday') => {
  return day === 'Saturday' || day === 'Sunday'
}

isWeekend2(dayOfWeeks.Monday)
isWeekend2('Monday')

isWeekend(DayOfWeek.Friday)
// isWeekend('Friday')
