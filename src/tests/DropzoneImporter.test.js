import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DropzoneImporter from '../components/DropzoneImporter/index';

describe('DropzoneImporter Component', () => {
  test('should render the component without errors', () => {
    render(<DropzoneImporter />);
  });

  test('should display the correct dropzone message', () => {
    const { getByText } = render(<DropzoneImporter />);
    expect(
      getByText("Drag 'n' drop some files here, or click to select files"),
    ).toBeInTheDocument();
  });

  test('should not allow importing files if no files are selected', () => {
    const { getByText } = render(<DropzoneImporter />);
    const importButton = getByText('Import');
    fireEvent.click(importButton);

    expect(getByText('There are no files to import!')).toBeInTheDocument();
  });
});
