import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { Calendar, CaretLeft, CaretRight } from '@phosphor-icons/react';

export interface DatePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: Date | string;
  onChange?: (date: Date) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean | string;
}

export interface DayInfo {
  date: Date;
  isCurrentMonth: boolean;
}

const DatePicker = ({ 
  value,
  onChange,
  placeholder = 'Sélectionner une date',
  className,
  disabled,
  error,
  ...props 
}: DatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(value ? new Date(value) : new Date());
  
  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  const formatDate = (date?: Date | string): string => {
    if (!date) return '';
    return new Intl.DateTimeFormat('fr-FR').format(new Date(date));
  };

  const getDaysInMonth = (date: Date): DayInfo[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstDayWeek = firstDay.getDay();
    const daysInMonth = lastDay.getDate();

    const days: DayInfo[] = [];
    
    // Jours du mois précédent
    for (let i = firstDayWeek - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i);
      days.push({ date: prevDate, isCurrentMonth: false });
    }
    
    // Jours du mois actuel
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      days.push({ date, isCurrentMonth: true });
    }
    
    // Compléter la grille avec les jours du mois suivant
    const remainingDays = 42 - days.length;
    for (let day = 1; day <= remainingDays; day++) {
      const nextDate = new Date(year, month + 1, day);
      days.push({ date: nextDate, isCurrentMonth: false });
    }
    
    return days;
  };

  const handleDateSelect = (date: Date) => {
    onChange?.(date);
    setIsOpen(false);
  };

  const navigateMonth = (direction: number) => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const isSelected = (date: Date): boolean => {
    if (!value) return false;
    const selectedDate = new Date(value);
    return date.toDateString() === selectedDate.toDateString();
  };

  const isToday = (date: Date): boolean => {
    return date.toDateString() === new Date().toDateString();
  };

  return (
    <div className={cn('relative', className)} {...props}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={cn(
          'flex h-10 w-full items-center justify-between rounded-lg border border-border bg-background px-3 py-2 text-sm',
          'focus-ring hover:border-border transition-colors',
          error && 'border-destructive focus:ring-destructive',
          disabled && 'opacity-50 cursor-not-allowed bg-muted',
          !value && 'text-muted-foreground'
        )}
        disabled={disabled}
      >
        <span>{value ? formatDate(value) : placeholder}</span>
        <Calendar size={16} className="text-muted-foreground" weight="duotone" />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-72 bg-background border border-border rounded-lg shadow-lg animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <button
              type="button"
              onClick={() => navigateMonth(-1)}
              className="p-1 hover:bg-muted rounded transition-colors focus-ring"
            >
              <CaretLeft size={16} />
            </button>
            
            <h3 className="font-medium">
              {months[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>
            
            <button
              type="button"
              onClick={() => navigateMonth(1)}
              className="p-1 hover:bg-muted rounded transition-colors focus-ring"
            >
              <CaretRight size={16} />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="p-4">
            {/* Days of week */}
            <div className="grid grid-cols-7 mb-2">
              {['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'].map(day => (
                <div key={day} className="text-xs text-muted-foreground text-center py-2 font-medium">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar days */}
            <div className="grid grid-cols-7 gap-1">
              {getDaysInMonth(currentDate).map(({ date, isCurrentMonth }, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => isCurrentMonth && handleDateSelect(date)}
                  className={cn(
                    'h-8 w-8 text-sm rounded transition-colors',
                    isCurrentMonth 
                      ? 'hover:bg-muted text-foreground' 
                      : 'text-muted-foreground/50 cursor-default',
                    isSelected(date) && isCurrentMonth && 'bg-primary text-primary-foreground hover:bg-primary/90',
                    isToday(date) && isCurrentMonth && !isSelected(date) && 'bg-muted font-semibold'
                  )}
                  disabled={!isCurrentMonth}
                >
                  {date.getDate()}
                </button>
              ))}
            </div>
          </div>

          {/* Today button */}
          <div className="p-4 border-t border-border">
            <button
              type="button"
              onClick={() => handleDateSelect(new Date())}
              className="w-full px-3 py-2 text-sm text-primary hover:bg-primary/10 rounded transition-colors focus-ring"
            >
              Aujourd'hui
            </button>
          </div>
        </div>
      )}

      {/* Overlay pour fermer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default DatePicker;