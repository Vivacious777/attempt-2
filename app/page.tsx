import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Next',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/park-1.png`,
    aspectRatio: '1:1',
  },

  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'Frame2',
  description: 'This is a gallery frame that showcases 4 pictures',
  openGraph: {
    title: 'Frame2',
    description: 'This is a gallery frame that showcases 4 pictures',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Hello there!</h1>
    </>
  );
}
