import React from 'react'

const PolicyCardModal = ({policy ,handleCloseModal}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 relative w-full max-w-md">
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-gray-500">
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{policy.policyName}</h2>
            {/* Display detailed policy information here */}
            <div className="flex justify-end mt-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                Buy Now
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">
                Save for Later
              </button>
            </div>
          </div>
        </div>
  )
}

export default PolicyCardModal