import React, { useEffect, useState } from "react";

function App() {
  const [ipInfo, setIpInfo] = useState(null);

  useEffect(() => {
    async function fetchIpInfo() {
      const YOUR_API_KEY = "38b8ec35e34f4db68f4aed06212a1967";
      const response = await fetch(
        `https://api.ipgeolocation.io/ipgeo?apiKey=${YOUR_API_KEY}&ip=8.8.8.8`
      );
      const data = await response.json();

      setIpInfo(data);
      console.log(data);
    }

    fetchIpInfo();
  }, []);

  if (!ipInfo) {
    return <h1>Loading geolocation information...</h1>;
  }

  return (
    <div>
      <h1>Geolocation Information for {ipInfo.ip}</h1>
      <ul>
        <li>{ipInfo.time_zone.current_time}</li>
      </ul>
    </div>
  );
}

export default App;
