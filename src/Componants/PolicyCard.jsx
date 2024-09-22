import React, { useState } from "react";
import PolicyCardModal from "./PolicyCardModal";
import { FaCheck } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";

function PolicyCard({ policy }) {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

  return (
    <div className="bg-white shadow-lg rounded-xl p-5 ">
      {/* Heading  */}
      <h2 className="text-xl font-semibold mb-4">{policy.policyName}</h2>

      <div className="grid grid-cols-2 gap-1">
        {/* first part */}
        <div>
          <ul className="text-xs leading-6">
            
            <li>
              <span>
                <FaCheck className="inline-block text-green-500 mr-2" />
                No Room Rent Limit
              </span>
            </li>
            <li>
              <span>
                <FaCheck className="inline-block text-green-500 mr-2" />
                ₹7.5 lakh Renewal Bonus
              </span>
            </li>
            <li className="">
              <span>
                <FaCheck className="inline-block text-green-500 mr-2" />
                Unlimited Restoration of cover
              </span>
            </li>
          </ul>
        </div>

        {/* second part */}
        <div className="flex flex-col justify-between gap-3">
            
          <div className="flex justify-around">
          <div>
            <p className="text-gray-500 text-sm font-semibold" >Coverage</p>
            <p className="text-sm font-semibold"><FaRupeeSign className="inline-block font-semibold"/>{policy.coverageAmount}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm font-semibold" >Cashless Hospitals</p>
            <p className="text-sm font-semibold">103</p>
          </div>
          </div>
          
          
          <button type="button" class="focus:outline-none text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-100 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-900">Buy Now</button>
          
        </div>
      </div>
      {/* Modoal Alag part hai  */}
      {showModal && (
        <PolicyCardModal policy={policy} handleCloseModal={handleCloseModal} />
      )}
    </div>
  );
}

export default PolicyCard;
