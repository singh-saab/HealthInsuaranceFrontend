import React, { useState } from 'react';

function ClaimForm() {
  const [claimData, setClaimData] = useState({
    policyNumber: '',
    claimType: '',
    incidentDate: '',
    // ... other fields
  });
  const [documents, setDocuments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit claim data and documents to the backend
  };

  const handleDocumentChange = (e) => {
    setDocuments([...documents, e.target.files[0]]);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">File a Claim</h2>
      <form onSubmit={handleSubmit}>
        {/* Claim form fields */}
        <input
          type="text"
          name="policyNumber"
          value={claimData.policyNumber}
          onChange={(e) => setClaimData({ ...claimData, policyNumber: e.target.value })}
          className="border border-gray-300 rounded-md p-2 w-full mb-4"
          placeholder="Policy Number"
        />
        {/* Other fields */}
        <div className="mb-4">
          <label htmlFor="documents" className="block text-gray-700 font-bold">
            Upload Documents
          </label>
          <input type="file" id="documents" name="documents" multiple onChange={handleDocumentChange} />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit Claim
        </button>
      </form>
    </div>
  );
}

export default ClaimForm;
