import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader, AlertCircle, Check, AlertTriangle } from 'lucide-react';

function Results() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get('/api/videos/results');
        setResults(response.data);
      } catch (error) {
        if (!error.response) {
          setError('Network error. Please check your internet connection.');
        } else if (error.response.status === 404) {
          setError('No results found. Please upload a video first.');
        } else {
          setError('Failed to fetch results. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Loader className="w-12 h-12 text-blue-500 animate-spin mb-4" />
        <p className="text-lg text-gray-700">Loading analysis results...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
        <p className="text-xl text-center text-gray-800">{error}</p>
      </div>
    );
  }

  if (results && (!results.probability || results.abnormalities.length === 0 || !results.technique)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        <AlertTriangle className="w-16 h-16 text-yellow-500 mb-4" />
        <p className="text-xl text-center text-gray-800">No analysis data available. Please try again later.</p>
      </div>
    );
  }

  const getProbabilityColor = (probability) => {
    switch (true) {
      case probability < 30:
        return 'text-green-500';
      case probability < 70:
        return 'text-yellow-500';
      default:
        return 'text-red-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Analysis Results</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Deepfake Probability</h3>
            <div className="flex items-center">
              <div className={`text-4xl font-bold ${getProbabilityColor(results.probability)}`}>
                {results.probability}%
              </div>
              <div className="ml-4">
                {results.probability < 30 ? (
                  <Check className="w-8 h-8 text-green-500" />
                ) : results.probability < 70 ? (
                  <AlertTriangle className="w-8 h-8 text-yellow-500" />
                ) : (
                  <AlertCircle className="w-8 h-8 text-red-500" />
                )}
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Detected Abnormalities</h3>
            <ul className="list-disc pl-5 space-y-2">
              {results.abnormalities.map((abnormality, index) => (
                <li key={index} className="text-gray-700">{abnormality}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Underlying Technique</h3>
            <p className="text-gray-700">{results.technique}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
