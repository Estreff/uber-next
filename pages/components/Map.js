import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZXN0cmVmZiIsImEiOiJja3ZscmZkY24ydmhzMnRudXVjdHJ6bzY1In0.vYyoSlZysdyypIUX80VkdA';

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  }, []);

  return <Wrapper id="map"></Wrapper>;
};

const Wrapper = tw.div`
  flex-1
`;

export default Map;
