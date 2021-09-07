import { useState } from 'react'

import mockCardData from './lib/mockCardData';
import { CardJS } from './components/cardjs';

const HomeJS = () => {
  const [cardData] = useState(mockCardData);

  return (
    <div>
      <pre>
        { JSON.stringify(cardData, null, 2) }
        {/* TODO: For each element in `cardData`
        render a CardJS component with that data. */}
      </pre>
    </div>
  )
}

export default HomeJS
