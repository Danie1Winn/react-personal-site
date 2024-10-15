import React from 'react';

const GoogleDocumentViewer = () => {
  const documentURL = 'https://docs.google.com/document/d/18ruW-n0G9JdoWunZtRMOMat4QnrHMkd-iu29MxyHGGQ/edit?usp=sharing';
  return (
    <div>
      <iframe src={documentURL} width="100%" height="1000px" />
    </div>
  );
};
export default GoogleDocumentViewer;