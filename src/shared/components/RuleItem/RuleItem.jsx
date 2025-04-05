import Image from 'next/image.js';

import { IMAGE_BASE_URL } from '../../constants/constants.js';
import renderHTML from '@/utils/renderHtml.js';

const RuleItem = ({ item }) => {
  const imageKeys = [
    'img1src',
    'img2src',
    'img3src',
    'img4src',
    'img5src',
    'img6src',
    'img7src',
  ];
  const safeText = item.text ? renderHTML(item.text) : null;

  return (
    <div style={{ marginBottom: '20px' }}>
      {item.number.charAt(0) !== '~' ? (
        <div>
          <h3>{item.number}</h3>
          <div>{safeText}</div>
        </div>
      ) : (
        <div>{safeText}</div>
      )}
      <div
        style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          marginTop: '10px',
        }}
      >
        {imageKeys.map((key, index) =>
          item[key] ? (
            <Image
              key={index}
              src={`${IMAGE_BASE_URL}${item[key]}`}
              alt={`Image ${index + 1}`}
              width={800}
              height={800}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                // maxWidth: '800px',
                // maxHeight: '800px',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          ) : null,
        )}
      </div>
    </div>
  );
};

export default RuleItem;
