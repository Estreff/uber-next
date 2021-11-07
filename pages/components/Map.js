import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZXN0cmVmZiIsImEiOiJja3ZscmZkY24ydmhzMnRudXVjdHJ6bzY1In0.vYyoSlZysdyypIUX80VkdA';

const Map = (props) => {
  useEffect(() => {
    const center = [];
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
    };

    const success = ({ coords }) => {
      center = [[coords.latitude, coords.longitude]];
      console.log(center);
    };

    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);

    const map = new mapboxgl.Map(
      {
        container: 'map',
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
        center: [-99.29011, 39.39172],
        zoom: 3,
      },
      []
    );

    if (props.pickupCoords && props.dropOffCoords.length) {
      addToMap(map, props.pickupCoords);
      addToMap(map, props.dropOffCoords);
      zoomToFit(map);
    }
  }, [props.pickupCoords, props.dropOffCoords]);

  const addToMap = (map, coords) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coords).addTo(map);
  };

  const zoomToFit = (map) => {
    map.fitBounds([props.pickupCoords, props.dropOffCoords], { padding: 60 });
  };

  return <Wrapper id="map"></Wrapper>;
};

const Wrapper = tw.div`
  flex-1 h-1/2
`;

export default Map;
