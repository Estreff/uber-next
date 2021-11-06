import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';
import Map from '../.next/components/Map';
import { useRouter } from 'next/router';
import RideSelector from '../.next/components/RideSelector';

const confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickupCoords, setPickUpCoords] = useState('');
  const [dropOffCoords, setDropOffCoords] = useState('');

  const getPickUpCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1IjoiZXN0cmVmZiIsImEiOiJja3ZscmZkY24ydmhzMnRudXVjdHJ6bzY1In0.vYyoSlZysdyypIUX80VkdA',
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickUpCoords(data.features[0].center);
      });
  };

  const getDropOffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1IjoiZXN0cmVmZiIsImEiOiJja3ZscmZkY24ydmhzMnRudXVjdHJ6bzY1In0.vYyoSlZysdyypIUX80VkdA',
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropOffCoords(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickUpCoordinates(pickup);
    getDropOffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/search">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      <Map pickupCoords={pickupCoords} dropOffCoords={dropOffCoords} />
      <RideContainer>
        <RideSelector />
        <ConfirmLocations>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmLocations>
      </RideContainer>
    </Wrapper>
  );
};

export default confirm;

const Wrapper = tw.div`flex flex-col h-screen`;
const RideContainer = tw.div`flex flex-1 flex-col  h-1/2`;
const ButtonContainer = tw.div`px-4 absolute top-1 left-1 z-10`;
const BackButton = tw.img`bg-gray-200 rounded-full cursor-pointer`;
const ConfirmLocations = tw.div`flex items-center border-t-2`;
const ConfirmButton = tw.button`w-screen bg-black text-white text-lg font-bold p-4 rounded-md m-4`;
