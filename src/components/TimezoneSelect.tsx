import { TimeZone } from '../types/timezone';

interface TimezoneSelectProps {
  value: string;
  onChange: (value: string) => void;
  timeZones: TimeZone[];
}

export function TimezoneSelect({ value, onChange, timeZones }: TimezoneSelectProps) {
  return (
    <div>
      <label htmlFor="timezone" className="block text-sm font-medium text-gray-600 mb-2">
        Select Time Zone
      </label>
      <select
        id="timezone"
        className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {timeZones.map((zone) => (
          <option key={zone.id} value={zone.value}>
            {zone.name}
          </option>
        ))}
      </select>
    </div>
  );
}