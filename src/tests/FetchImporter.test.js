import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import FetchImporter from '../components/FetchImporter/index';

jest.mock('axios');

describe('FetchImporter Component', () => {
  test('fetches images from API correctly', async () => {
    const mockResponse = {
      data: [
        { id: 1, url: 'https://example.com/image1.png', title: 'Image 1' },
        { id: 2, url: 'https://example.com/image2.png', title: 'Image 2' },
      ],
    };
    axios.get.mockResolvedValueOnce(mockResponse);

    render(<FetchImporter />);
    const fetchImagesButton = screen.getByText('Fetch Images from API');
    fireEvent.click(fetchImagesButton);

    await waitFor(() => {
      const imageElement1 = screen.getByAltText('Image 1');
      const imageElement2 = screen.getByAltText('Image 2');
      expect(imageElement1).toBeInTheDocument();
      expect(imageElement2).toBeInTheDocument();
    });
  });

  test('fetches files from API correctly', async () => {
    const mockResponse = {
      data: [
        { id: 1, title: 'File 1' },
        { id: 2, title: 'File 2' },
      ],
    };
    axios.get.mockResolvedValueOnce(mockResponse);

    render(<FetchImporter />);
    const fetchFilesButton = screen.getByText('Fetch Files from API');
    fireEvent.click(fetchFilesButton);

    await waitFor(() => {
      const fileElement1 = screen.getByText(/- File 1/i);
      const fileElement2 = screen.getByText(/- File 2/i);
      expect(fileElement1).toBeInTheDocument();
      expect(fileElement2).toBeInTheDocument();
    });
  });
});
