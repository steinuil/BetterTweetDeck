import React from 'dom-chef';

import {DCFactory} from '../helpers/domHelpers';

export interface ThumbnailProps {
  url: string;
  imageUrl: string;
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const makeMediumThumbnail: DCFactory<ThumbnailProps> = ({onClick, imageUrl, url}) => {
  return (
    <div className="js-media media-preview position-rel" data-btd-thumbnail>
      <div className=" js-media-preview-container media-preview-container position-rel width-p--100 margin-vm">
        <a
          className="js-media-image-link block med-link media-item media-size-medium is-zoomable"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          style={{
            backgroundImage: `url("${imageUrl}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        />
      </div>
    </div>
  );
};

export const makeSmallThumbnail: DCFactory<ThumbnailProps> = ({url, imageUrl, onClick}) => (
  <div className="js-media media-preview position-rel">
    <div className=" js-media-preview-container media-preview-container position-rel width-p--100 margin-vm is-paused  ">
      <a
        className="js-media-image-link block med-link media-item media-size-small is-zoomable"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        style={{
          backgroundImage: `url("${imageUrl}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      />
    </div>
  </div>
);

export const makeLargeThumbnail: DCFactory<ThumbnailProps> = ({url, imageUrl, onClick}) => (
  <div className="js-media position-rel item-box-full-bleed margin-tm">
    <div className=" js-media-preview-container media-preview-container position-rel width-p--100 margin-t--20 is-paused">
      <div className="media-caret" />
      <a
        className="js-media-image-link block med-link media-item media-size-large is-zoomable"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        style={{
          backgroundImage: `url("${imageUrl}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      />
    </div>
  </div>
);
