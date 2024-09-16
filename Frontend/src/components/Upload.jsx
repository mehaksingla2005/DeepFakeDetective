import React, { useState } from 'react';
import axios from 'axios';
import { Upload as UploadIcon, CheckCircle, AlertCircle } from 'lucide-react';

function Upload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('video', file);

    setUploading(true);
    try {
      const response = await axios.post('/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(response.data);
      setUploadStatus('success');
      // Redirect to results page or handle response
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus('error');
    }
    setUploading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">
            Upload Video for Analysis
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                      accept="video/*"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  MP4, AVI, MOV up to 10MB
                </p>
              </div>
            </div>
            {file && (
              <div className="text-sm text-gray-500 text-center">
                Selected file: {file.name}
              </div>
            )}
            <div>
              <button
                type="submit"
                disabled={!file || uploading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  !file || uploading
                    ? 'bg-indigo-400 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                }`}
              >
                {uploading ? 'Uploading...' : 'Upload'}
              </button>
            </div>
          </form>
          {uploadStatus && (
            <div className={`mt-4 ${
              uploadStatus === 'success' ? 'text-green-600' : 'text-red-600'
            }`}>
              {uploadStatus === 'success' ? (
                <div className="flex items-center justify-center">
                  <CheckCircle className="mr-2" />
                  <span>Upload successful!</span>
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <AlertCircle className="mr-2" />
                  <span>Upload failed. Please try again.</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Upload;