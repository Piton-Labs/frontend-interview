import type { NextPage } from 'next'
import { useState } from 'react'

import mockCardData from './lib/mockCardData';
import { Card } from './components/card';

const Home: NextPage = () => {
  const [cardData] = useState(mockCardData);

  return (
    <div>
      <pre>
        { JSON.stringify(cardData, null, 2) }
        {/* TODO: For each element in `cardData`
        render a Card component with that data. */}
      </pre>
    </div>
  )
}

export default Home
