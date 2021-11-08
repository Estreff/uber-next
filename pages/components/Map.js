import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZXN0cmVmZiIsImEiOiJja3ZscmZkY24ydmhzMnRudXVjdHJ6bzY1In0.vYyoSlZysdyypIUX80VkdA';

const Map = (props) => {
  const [currentCoords, setCurrentCoords] = useState(null);
  useEffect(() => {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
      };

      const success = ({ coords }) => {
        setCurrentCoords([coords.longitude, coords.latitude]);
      };

      const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      };

      navigator.geolocation.getCurrentPosition(success, error, options);
  },[])

  useEffect(() => {
      if(currentCoords) {
      const map = new mapboxgl.Map(
        {
          container: 'map',
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: currentCoords,
          zoom: 10,
        },
        []
      );
      }

      if(Object.entries(props).length === 0) {
        addToMap(map, currentCoords, 'blue')
      } else if  (props.pickupCoords && props.dropOffCoords) {
        addToMap(map, props.pickupCoords, 'green');
        addToMap(map, props.dropOffCoords, 'red');
        zoomToFit(map);
      }
  }, [currentCoords, props.pickupCoords, props.dropOffCoords]);

  const addToMap = (map, coords, color) => {
    const marker = new mapboxgl.Marker({color: color})
.setLngLat(coords)
.addTo(map);
  };

  const zoomToFit = (map) => {
    map.fitBounds([props.pickupCoords, props.dropOffCoords], { padding: 60 });
  };

  return <Wrapper id="map"></Wrapper>;
};

const Wrapper = tw.div`
  flex-1 h-1/2 m-5 border-2 border-blue-500 rounded-lg
`;

export default Map;
