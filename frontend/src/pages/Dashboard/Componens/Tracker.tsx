import { useState } from 'react';

export const Tracker = () => {
  const [events, setEvents] = useState<string[]>([
    'User logged in',
    'User clicked button',
    'Data fetched',
  ]);

  const addEvent = () => {
    setEvents((prev) => [...prev, `New event at ${new Date().toLocaleTimeString()}`]);
  };

  return (
    <div>
      <h3>Tracker</h3>

      <button onClick={addEvent}></button>
      <ul>
        {events.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
