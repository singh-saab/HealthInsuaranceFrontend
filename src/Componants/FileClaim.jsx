import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Assuming you have an authentication context

function FileAClaim() {
  const { user, isAuthenticated } = useAuth();
  const [policies, setPolicies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      axios.get('/api/user/policies')
        .then(response => setPolicies(response.data))
        .catch(error => console.error('Error fetching policies:', error));
    }
  }, [isAuthenticated]);

  // ... form to select policy and file claim

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming claimData is prepared
    axios.post('/api/claims', claimData)
      .then(response => {
        // Handle successful claim submission
      })
      .catch(error => {
        // Handle error
      });
  };

  // ... form to select policy and file claim

  return (
    <div className="container mx-auto p-8">
      <h2>File a Claim</h2>
      {isAuthenticated ? (
        <div>
          {/* Select policy dropdown */}
          {/* Claim form */}
        </div>
      ) : (
        <p>Please login to file a claim.</p>
      )}
    </div>
  );
}

export default FileAClaim;
