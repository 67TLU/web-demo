import React from 'react';
import Style from './ContracLinks.module.css';
import { linksConfig } from './linksConfig.jsx'; // Import cấu hình ở trên

function ContractLinks() {
  return (
    <ul className={Style['example-2']}>
      {linksConfig.map((item) => (
        <li key={item.name} className={Style["icon-content"]}>
          <a
            href={item.url}
            aria-label={item.name}
            data-social={item.social}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={Style["filled"]}/>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className={`bi bi-${item.social}`}
              viewBox={item.viewBox}
              xmlSpace="preserve"
            >
              {item.isCustomSvg ? (
                item.svgContent
              ) : (
                <path d={item.svgPath} fill="currentColor" />
              )}
            </svg>
          </a>
          <div className={Style["tooltip"]}>{item.name}</div>
        </li>
      ))}
    </ul>
  );
}

export default ContractLinks;
