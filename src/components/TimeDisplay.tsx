import { format } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

interface TimeDisplayProps {
  time: Date;
  timezone: string;
  label: string;
  showTimezone?: boolean;
}

export function TimeDisplay({ time, timezone, label, showTimezone = true }: TimeDisplayProps) {
  const formattedTime = timezone === 'local' 
    ? format(time, 'HH:mm:ss')
    : formatInTimeZone(time, timezone, 'HH:mm:ss');

  const formattedDate = timezone === 'local'
    ? format(time, 'EEEE, MMMM d, yyyy')
    : formatInTimeZone(time, timezone, 'EEEE, MMMM d, yyyy');

  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h2 className="text-sm font-medium text-gray-600 mb-2">{label}</h2>
      <div className="text-3xl font-bold text-gray-800">
        {formattedTime}
      </div>
      <div className="text-sm text-gray-500 mt-1">
        {formattedDate}
      </div>
      {showTimezone && (
        <div className="text-xs text-gray-400 mt-1">
          {timezone}
        </div>
      )}
    </div>
  );
}