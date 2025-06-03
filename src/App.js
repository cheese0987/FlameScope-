import './App.css';
import Header from './Header';
import Map from './Map';
import { useState, useEffect } from 'react';
import RadarLoader from './RadarLoader';

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <div className="App">
      <Header />
      { !loading ? <Map eventData={eventData} /> : <RadarLoader /> }
    </div>
  );
}

export default App;
