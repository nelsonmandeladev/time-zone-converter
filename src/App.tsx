import { useState, useEffect } from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';
import { TimeDisplay } from './components/TimeDisplay';
import { TimezoneSelect } from './components/TimezoneSelect';
import { timeZones } from './types/timezone';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedZone, setSelectedZone] = useState(timeZones[0].value);
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <ClockIcon className="h-8 w-8 text-blue-500 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">World Time Converter</h1>
        </div>

        <div className="space-y-6">
          <TimeDisplay
            time={currentTime}
            timezone="local"
            label="Your Local Time"
            showTimezone={false}
          />

          <div className="space-y-4">
            <TimezoneSelect
              value={selectedZone}
              onChange={setSelectedZone}
              timeZones={timeZones}
            />

            <TimeDisplay
              time={currentTime}
              timezone={selectedZone}
              label="Selected Time Zone"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;