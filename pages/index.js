import React, { useRef, useEffect, useState } from 'react';
import Map from './components/Map';
import tw from 'tailwind-styled-components';
import Link from 'next/link';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

export default function Home() {
  const [user, setUser] = useState(null);
  const [currentCoords, setCurrentCoords] = useState([]);
  const router = useRouter();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photoURL: user.photoURL,
        });
      } else {
        setUser(null);
        router.push('/login');
      }
    });
  }, []);

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage
              onClick={() => signOut(auth)}
              src={user && user.photoURL}
            />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <Link href="#">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png " />2
              Wheels
            </ActionButton>
          </Link>
          <Link href="#">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
              Reserve
            </ActionButton>
          </Link>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen
  `;

const ActionItems = tw.div`
  flex-1 p-4
  `;

const Header = tw.div`
  flex justify-between items-center
`;
const UberLogo = tw.img`
  h-28
`;
const Profile = tw.div`
  flex items-center
`;
const Name = tw.div`
mr-4 w-20 text-sm
`;
const UserImage = tw.img`
h-12 w-12 rounded-full border-gray-200 p-px cursor-pointer
`;

const ActionButtons = tw.div`
  flex
`;

const ActionButton = tw.div`
  flex flex-1 bg-gray-200 m-1 h-32 items-center flex-col justify-center rounded-lg
  transform hover:scale-105 transition text-xl
`;

const ActionButtonImage = tw.img`
h-3/5
`;

const InputButton = tw.div`
  h-20 bg-gray-200 text-xl rounded-lg p-4 flex items-center ml-1 mr-1 mt-8
`;
