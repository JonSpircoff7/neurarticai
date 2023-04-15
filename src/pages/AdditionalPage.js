import React from 'react';
import Header from '../components/Header';
import InfoSection from '../components/InfoSection';

const AdditionalPage = () => {
  const additionalContents = [
    {
      text: 'Some additional information or content related to the website.',
      image: { src: '/assets/images/additional1.jpg', alt: 'Additional 1' },
    },
    {
      text: 'Another piece of information or content that might be interesting to visitors.',
      image: { src: '/assets/images/additional2.jpg', alt: 'Additional 2' },
    },
    {
      text: 'A final piece of information or content that adds value to the website.',
      image: { src: '/assets/images/additional3.jpg', alt: 'Additional 3' },
    },
  ];

  return (
    <main className="additional-page">
      <Header title="Additional Page" subtitle="Extra Information" />
      <InfoSection contents={additionalContents} />
    </main>
  );
};

export default AdditionalPage;
