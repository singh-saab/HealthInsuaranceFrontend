
import React from 'react';
import PolicyCard from './PolicyCard'; // Assuming the component is in the same directory

function PolicyList() {
  const policies = [
    {
      "policyType": "Individual",
      "policyName": "Comprehensive Health Insurance",
      "premiumAmount": 15000,
      "coverageAmount": 500000,
      "duration": "1 year"
    },
    {
      "policyType": "Family Floater",
      "policyName": "Family Health Insurance",
      "premiumAmount": 25000,
      "coverageAmount": 800000,
      "duration": "1 year"
    },
    {
      "policyType": "Senior Citizen",
      "policyName": "Senior Citizen Health Insurance",
      "premiumAmount": 20000,
      "coverageAmount": 400000,
      "duration": "1 year"
    },
    {
      "policyType": "Critical Illness",
      "policyName": "Critical Illness Cover",
      "premiumAmount": 12000,
      "coverageAmount": 600000,
      "duration": "1 year"
    },
    {
      "policyType": "Personal Accident",
      "policyName": "Personal Accident Cover",
      "premiumAmount": 5000,
      "coverageAmount": 300000,
      "duration": "1 year"
    },
    {
      "policyType": "Maternity",
      "policyName": "Maternity Insurance",
      "premiumAmount": 18000,
      "coverageAmount": 150000,
      "duration": "9 months"
    },
    {
      "policyType": "Top-Up",
      "policyName": "Health Insurance Top-Up",
      "premiumAmount": 8000,
      "coverageAmount": 500000,
      "duration": "1 year"
    },
    {
      "policyType": "Group Health Insurance",
      "policyName": "Group Health Cover",
      "premiumAmount": 12000, // Placeholder, actual premium varies
      "coverageAmount": 400000, // Placeholder, actual coverage varies
      "duration": "1 year"
    },
    {
      "policyType": "Overseas Travel Insurance",
      "policyName": "Travel Insurance",
      "premiumAmount": 3000,
      "coverageAmount": 200000,
      "duration": "Trip duration"
    },
    {
      "policyType": "Child Health Insurance",
      "policyName": "Child Health Cover",
      "premiumAmount": 7000,
      "coverageAmount": 300000,
      "duration": "1 year"
    }
  ]
; 

  return (
    <div className="grid  sm:grid-cols-1 md:grid-cols-2 gap-4 mt-16 mb-16">
      {policies.map((policy, index) => (
        <PolicyCard key={index} policy={policy} />
      ))}
    </div>
  );
}

export default PolicyList;
