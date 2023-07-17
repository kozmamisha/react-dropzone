import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

import './DropzoneImporter.scss';

const DropzoneImporter = () => {
  const [files, setFiles] = useState([]);

  const handleImport = () => {
    if (files.length === 0) {
      return;
    }

    files.forEach((file) => {
      console.log('Importing file:', file.name);
    });

    alert('Files imported successfully!');
    setFiles([]);
  };

  const handleDelete = (file) => {
    setFiles((prevFiles) => prevFiles.filter((f) => f !== file));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    },
  });

  return (
    <>
      <div className="dropzone" {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <h3>Files to Import:</h3>
      <ul>
        {files.length > 0 ? (
          files.map((file) => (
            <li key={file.name}>
              {file.type.startsWith('image/') ? (
                <img src={URL.createObjectURL(file)} alt={file.name} width="100" height="100" />
              ) : (
                <span>{file.name}</span>
              )}
              <button className="deleteButton" onClick={() => handleDelete(file)}>
                Delete
              </button>
            </li>
          ))
        ) : (
          <span>There are no files to import!</span>
        )}
      </ul>
      <button className="importButton" onClick={handleImport} disabled={files.length === 0}>
        Import
      </button>
    </>
  );
};

export default DropzoneImporter;
