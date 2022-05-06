import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import clsx from 'clsx';
import { addMonths, format } from 'date-fns';
import { useAtom } from 'jotai';

import { Suspense, useState, lazy } from 'react';
import { AppIcon } from '../../../components/utils/AppIcon';
import { calendarAppStore } from '../../../stores/calendar.app.store';
import css from './Calendar.module.scss';

const DayView = lazy(() => import('./Views/DayView'));
const MonthView = lazy(() => import('./Views/MonthView'));
const WeekView = lazy(() => import('./Views/WeekView'));
const YearView = lazy(() => import('./Views/YearView'));

type ViewOptions = 'year' | 'month' | 'week' | 'day';

const Calendar = () => {
  const [view] = useState<ViewOptions>('month');
  const [selectedDate, setSelectedDate] = useAtom(calendarAppStore);

  const goToday = () => {
    setSelectedDate(new Date());
  };

  const goPrevMonth = () => {
    setSelectedDate(addMonths(selectedDate, -1));
  };

  const goNextMonth = () => {
    setSelectedDate(addMonths(selectedDate, 1));
  };

  return (
    <section className={css.container}>
      <header className={clsx('app-window-drag-handle', css.titleBar)}></header>

      <section className={css.mainArea}>
        <div className={css.calendarHeader}>
          <div>
            <span className={css.month}>{format(selectedDate, 'MMMM')}</span>{' '}
            <span className={css.year}>{format(selectedDate, 'yyyy')}</span>
          </div>
          <div className={css.controlButtons}>
            <button onClick={goPrevMonth}>
              <AppIcon size={18} path={mdiChevronLeft} />
            </button>
            <button onClick={goToday}>Today</button>
            <button onClick={goNextMonth}>
              <AppIcon size={18} path={mdiChevronRight} />
            </button>
          </div>
        </div>
        <Suspense fallback={<></>}>
          {view === 'year' && <YearView />}
          {view === 'month' && <MonthView />}
          {view === 'week' && <WeekView />}
          {view === 'day' && <DayView />}
        </Suspense>
      </section>
    </section>
    // </CalendarAppContext.Provider>
  );
};
function isLeapYear(arg0: number) {
  throw new Error('Function not implemented.');
}

export default Calendar;
