import React, { useState } from 'react';
import axios from 'axios';

import './FetchImporter.scss';

const FetchImporter = () => {
  const [importedFiles, setImportedFiles] = useState([]);
  const [isImagesFetched, setIsImagesFetched] = useState(true);

  const fetchImagesFromAPI = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setImportedFiles(response.data);
      setIsImagesFetched(true);
    } catch (error) {
      console.error('Error fetching files from API:', error);
      alert('Error fetching files from API! :(');
    }
  };

  const fetchFilesFromAPI = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setImportedFiles(response.data);
      setIsImagesFetched(false);
    } catch (error) {
      console.error('Error fetching files from API:', error);
      alert('Error fetching files from API! :(');
    }
  };

  return (
    <div>
      <div className="fetchButtons">
        <div className="fetchImagesButton">
          <h3>Images from API:</h3>
          <button onClick={fetchImagesFromAPI}>Fetch Images from API</button>
        </div>
        <div className="fetchFilesButton">
          <h3>Files from API:</h3>
          <button onClick={fetchFilesFromAPI}>Fetch Files from API</button>
        </div>
      </div>
      <ul className="fetchedData">
        {importedFiles.map((file) =>
          isImagesFetched ? (
            <li key={file.id}>
              <img src={file.url} alt={file.title} width="100" height="100" />
              <span>{file.title}</span>
            </li>
          ) : (
            <li key={file.id}>
              <span>- {file.title}</span>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default FetchImporter;
