import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader 
  speed={2}
  width={270}
  height={464}
  viewBox="0 0 270 464"
  backgroundColor="#f3f3f3"
  foregroundColor="#ecebeb"
>
  <rect x="16" y="8" rx="0" ry="0" width="210" height="210" /> 
  <rect x="7" y="234" rx="0" ry="0" width="228" height="31" /> 
  <rect x="7" y="277" rx="0" ry="0" width="228" height="88" /> 
  <rect x="7" y="387" rx="14" ry="14" width="120" height="45" /> 
  <rect x="149" y="392" rx="18" ry="18" width="91" height="38" /> 
  <rect x="189" y="411" rx="0" ry="0" width="0" height="5" />
</ContentLoader>
)

export default Skeleton;