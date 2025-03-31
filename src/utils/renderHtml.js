import parse from 'html-react-parser';
import Link from 'next/link';

export const renderHTML = text => {
  return parse(text, {
    replace: domNode => {
      if (domNode.name === 'a') {
        if (domNode.attribs['data-modal'] === 'true') {
          return (
            <Link
              href={domNode.attribs['href']}
              className="open-modal"
              style={{
                color: '#FF4500',
                backgroundColor: 'transparent',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              {domNode.children.map(child => child.data).join('')}
            </Link>
          );
        } else {
          return (
            <a
              href={domNode.attribs['href']}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#0000EE',
                textDecoration: 'none',
              }}
            >
              {domNode.children.map(child => child.data).join('')}
            </a>
          );
        }
      }
    },
  });
};
