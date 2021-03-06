import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';
// import mapboxgl from 'mapbox-gl';
// import Geocoder from 'react-map-gl-geocoder'
// import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
// import accessTokens from '../../data/tokens';

const Search = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');

  // mapboxgl.accessToken = accessTokens.mapboxgl;

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
        </FromToIcons>
        <InputBoxes>
          <Input
            className="goecoder"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="Enter Pickup Location"
          />
          <Input
            className="goecoder"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            placeholder="Where to?"
          />
        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlaces>
      <Link
        href={{
          pathname: '/confirm',
          query: {
            pickup: pickup != '' ? pickup : 'Highlands Ranch, CO',
            dropoff: dropoff != '' ? dropoff : 'Denver, CO',
          },
        }}
      >
        <ConfirmLocations>
          <ConfirmButton>Confirm Locations</ConfirmButton>
        </ConfirmLocations>
      </Link>
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`bg-gray-200 h-screen`;
const ButtonContainer = tw.div`bg-white px-4`;
const BackButton = tw.img`cursor-pointer`;
const InputContainer = tw.div`flex bg-white items-center px-4 mb-2`;
const FromToIcons = tw.div`w-10 flex flex-col mr-2 items-center`;
const Circle = tw.img`h-2.5 `;
const Line = tw.img`h-10`;
const Square = tw.img`h-3`;
const InputBoxes = tw.div`flex flex-col flex-1`;
const Input = tw.input`h-10 bg-gray-200 my-2 rounded-md p-2 outline-none border-none`;
const PlusIcon = tw.img`w-10 h-10 bg-gray-200 rounded-full ml-3`;
const SavedPlaces = tw.div`flex items-center bg-white px-4 py-2`;
const StarIcon = tw.img`bg-gray-400 w-10 h-10 p-2 rounded-full mr-2`;
const ConfirmLocations = tw.div`flex items-center m-5 `;
const ConfirmButton = tw.button`w-screen bg-black text-white text-lg font-bold p-4 rounded-md`;
