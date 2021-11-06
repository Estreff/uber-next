import React from 'react';
import tw from 'tailwind-styled-components';
import { carList } from '../data/carList';

const RideSelector = () => {
  const time = 5;
  const cost = 10.12;

  const renderedList = carList.map((car, index) => {
    return (
      <SelectCar key={index}>
        <CarImage src={car.imgUrl} />
        <CarDetails>
          <CarType>{car.service}</CarType>
          <Time>{`${Math.round(time * car.multiplier)} min away`}</Time>
        </CarDetails>
        <RideCost>{`$${parseFloat(cost * car.multiplier).toFixed(
          2
        )}`}</RideCost>
      </SelectCar>
    );
  });
  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarsContainer>{renderedList}</CarsContainer>
    </Wrapper>
  );
};

export default RideSelector;

const Wrapper = tw.div`flex flex-1 flex-col overflow-y-hidden`;
const Title = tw.div`border-b-2 border-gray-200 text-gray-400 text-center py-1`;
const CarsContainer = tw.div`overflow-y-scroll`;
const SelectCar = tw.div`flex flex-row flex-1 items-center p-4`;
const CarImage = tw.img`flex-.5 h-14 m-4`;
const CarDetails = tw.div`flex-1 px-2`;
const CarType = tw.div`font-medium`;
const Time = tw.div`text-xs text-blue-500`;
const RideCost = tw.div`flex-.5 px-2 text-sm`;
