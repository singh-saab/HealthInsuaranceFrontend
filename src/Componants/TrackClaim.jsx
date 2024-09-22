import React, { useState, useEffect } from 'react';

function TrackClaim({ claimId }) {
    const { user, isAuthenticated } = useAuth();
    const [claims, setClaims] = useState([]);
  
    useEffect(() => {
      if (isAuthenticated) {
        axios.get('/api/user/claims')
          .then(response => setClaims(response.data))
          .catch(error => console.error('Error fetching claims:', error));
      }
    }, [isAuthenticated]);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Track Your Claim</h2>
      {claimData ? (
        <div>
          <p>Claim Number: {claimData.claimNumber}</p>
          <p>Claim Status: {claimData.status}</p>
          <p>Claim Filed Date: {claimData.filedDate}</p>
          <p>Claim Amount: ₹{claimData.amount}</p>
          {/* Display claim status updates */}
        </div>
      ) : (
        <p>Loading claim data...</p>
      )}
    </div>
  );
}

export default TrackClaim;
