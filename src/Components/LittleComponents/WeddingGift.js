// import React, { useState } from "react";
// import { FaCopy } from "react-icons/fa";
// import Button from "./Button";
// import orn6 from "../../assets/images/Orn-06.png";

// const WeddingGift = () => {
//   const [selectedBank, setSelectedBank] = useState("BCA");
//   const [copied, setCopied] = useState(false);
//   const [showUpload, setShowUpload] = useState(false);
//   const [file, setFile] = useState(null);
//   const [fileURL, setFileURL] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     accountOwner: "",
//     message: "",
//     amount: "",
//   });
//   const [notification, setNotification] = useState("");

//   const bankDetails = {
//     BCA: {
//       bankCode: "014",
//       accountNumber: "8375180797",
//       accountName: "Rachel Queen",
//     },
//     BRI: {
//       bankCode: "002",
//       accountNumber: "1234567890",
//       accountName: "John Doe",
//     },
//   };

//   const handleBankChange = (event) => {
//     setSelectedBank(event.target.value);
//   };

//   const handleCopy = (text) => {
//     navigator.clipboard.writeText(text).then(() => {
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     });
//   };

//   const handleNext = () => {
//     setShowUpload((show) => !show);
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setFile(file);
//       setFileURL(URL.createObjectURL(file));
//     }
//   };

//   const handleConfirm = () => {
//     const { name, accountOwner, message, amount } = formData;
//     if (name && accountOwner && message && amount && file) {
//       setNotification("Image successfully uploaded!");
//     } else {
//       setNotification("Please fill in all required fields!");
//     }
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const resetFormData = () => {
//     setFormData({
//       name: "",
//       accountOwner: "",
//       message: "",
//       amount: "",
//     });
//   };

//   const resetFileData = () => {
//     setFile(null);
//     setFileURL(null);
//   };

//   const handleBack = () => {
//     setShowUpload(false);
//     resetFormData();
//     resetFileData();
//   };

//   const currentBankDetails = bankDetails[selectedBank];

//   return (
//     <div className="font-playfair flex items-center justify-center">
//       <div className={`p-8 rounded-lg w-full max-w-md`}>
//         {copied && <div className="mb-4 bg-green-100 text-green-800 p-2 rounded-lg text-center">Nomor rekening berhasil disalin!</div>}
//         <div className="text-center mb-6">
//           <div className="flex justify-center mb-4">
//             <div className="w-16 h-16 rounded-full bg-[#f5d89f] border-primaryColor border-[1px] flex items-center justify-center">
//               <img src={orn6} alt="orn" />
//             </div>
//           </div>
//           <h1 className="text-2xl font-bold text-red-600">WEDDING GIFT</h1>
//           <p className="text-gray-600">Your blessing and coming to our wedding are enough for us. However, if you want to give a gift we provide a Digital Envelope to make it easier for you. Thank you</p>
//         </div>
//         {/* section 1 */}
//         <div className={`${showUpload ? "hidden" : "block animate-slideRight"}`}>
//           <div className={`mb-6 bg-[#f5d89f] p-4 rounded-lg `}>
//             <label className="block text-gray-700 font-bold mb-2">Select Bank</label>
//             <select value={selectedBank} onChange={handleBankChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4 bg-primaryColor text-white">
//               <option value="BCA">BANK BCA</option>
//               <option value="BRI">BANK BRI</option>
//             </select>
//             <div className="bg-yellow-100 p-4 rounded-lg flex items-center justify-between">
//               <div>
//                 <p className="text-gray-700">
//                   BANK {selectedBank} ({currentBankDetails.bankCode})
//                 </p>
//                 <p className="text-gray-700">Account Number</p>
//                 <p className="text-gray-700 font-bold">{currentBankDetails.accountNumber}</p>
//                 <p className="text-gray-700">Account Name</p>
//                 <p className="text-gray-700 font-bold">{currentBankDetails.accountName}</p>
//               </div>
//               <button onClick={() => handleCopy(currentBankDetails.accountNumber)} className="ml-4 bg-primaryColor text-white px-3 py-1 rounded-lg">
//                 <FaCopy />
//               </button>
//             </div>
//           </div>
//           <form>
//             <div className="mb-4">
//               <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Katsudoto" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-primaryColor focus:ring-primaryColor" />
//             </div>
//             <div className="mb-4">
//               <input
//                 type="text"
//                 name="accountOwner"
//                 value={formData.accountOwner}
//                 onChange={handleInputChange}
//                 placeholder="Account Owner Name"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-primaryColor focus:ring-primaryColor"
//               />
//             </div>
//             <div className="mb-4">
//               <input type="text" name="message" value={formData.message} onChange={handleInputChange} placeholder="Message" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-primaryColor focus:ring-primaryColor" />
//             </div>
//             <div className="mb-4">
//               <input type="text" name="amount" value={formData.amount} onChange={handleInputChange} placeholder="Amount" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-primaryColor focus:ring-primaryColor" />
//             </div>
//             <div className="text-center">
//               <button type="button" onClick={handleNext} className="bg-primaryColor text-white px-4 py-2 rounded-lg">
//                 Next
//               </button>
//             </div>
//           </form>
//         </div>
//         {showUpload && (
//           <div className="">
//             <div className="text-left m-2 ping">
//               <button type="button" onClick={handleBack} className="bg-primaryColor text-white px-4 py-2 rounded-lg">
//                 Back
//               </button>
//             </div>
//             <div className={`transition-transform duration-500 ${showUpload ? "block animate-slideLeft" : "hidden"} p-6 rounded-lg text-center w-full max-w-md`}>
//               <p className="mb-4">Upload proof of transfer Screen Shoot / Photo Slip Transfer</p>
//               <input type="file" onChange={handleFileChange} className="mb-4" />
//               {fileURL && <img src={fileURL} alt="Uploaded proof" className="mb-4 max-h-64 mx-auto" />}
//               <button type="button" onClick={handleConfirm} className="bg-red-600 text-white px-4 py-2 rounded-lg">
//                 Confirm
//               </button>
//               {notification && <div className={`mt-4 p-2 rounded-lg text-center ${notification.includes("successfully") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>{notification}</div>}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WeddingGift;

import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import Button from "./Button";
import orn6 from "../../assets/images/Orn-06.png";
import Title from "./Title";
import useVisibility from "../../hook/useVisibility";

const WeddingGift = () => {
  const { sectionRef, isVisible } = useVisibility(0.3);
  const [selectedBank, setSelectedBank] = useState("BCA");
  const [copied, setCopied] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    accountOwner: "",
    message: "",
    amount: "",
  });
  const [notification, setNotification] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const bankDetails = {
    BCA: {
      bankCode: "014",
      accountNumber: "8375180797",
      accountName: "Rachel Queen",
    },
    BRI: {
      bankCode: "002",
      accountNumber: "1234567890",
      accountName: "John Doe",
    },
  };

  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleNext = () => {
    setShowUpload((show) => !show);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      setFileURL(URL.createObjectURL(file));
    }
  };

  const handleConfirm = () => {
    const { name, accountOwner, message, amount } = formData;
    if (name && accountOwner && message && amount && file) {
      setNotification("Image successfully uploaded!");
      setShowSuccess(true);
    } else {
      setNotification("Please fill in all required fields!");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetFormData = () => {
    setFormData({
      name: "",
      accountOwner: "",
      message: "",
      amount: "",
    });
  };

  const resetFileData = () => {
    setFile(null);
    setFileURL(null);
  };

  const handleBack = () => {
    setShowUpload(false);
    resetFormData();
    resetFileData();
    setNotification("");
    setShowSuccess(false);
  };

  const currentBankDetails = bankDetails[selectedBank];

  return (
    <div ref={sectionRef} className={`font-playfair flex mb-24 items-center justify-center ${isVisible ? "opacity-100 animate-fadeInScale" : "opacity-0"}`}>
      <div className={`p-8 rounded-lg w-full max-w-md`}>
        {copied && <div className="mb-4 bg-green-100 text-green-800 p-2 rounded-lg text-center">Nomor rekening berhasil disalin!</div>}
        {!showSuccess && (
          <>
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#f5d89f] border-primaryColor border-[1px] flex items-center justify-center">
                  <img src={orn6} alt="orn" />
                </div>
              </div>
              <Title title={"Wedding Gift"} />
              <p className="text-gray-600">Your blessing and coming to our wedding are enough for us. However, if you want to give a gift we provide a Digital Envelope to make it easier for you. Thank you</p>
            </div>
            {/* section 1 */}
            <div className={`${showUpload ? "hidden" : "block animate-slideRight"}`}>
              <div className={`mb-6 bg-[#f5d89f] p-4 rounded-lg`}>
                <label className="block text-gray-700 font-bold mb-2">Select Bank</label>
                <select value={selectedBank} onChange={handleBankChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4 bg-primaryColor text-white">
                  <option value="BCA">BANK BCA</option>
                  <option value="BRI">BANK BRI</option>
                </select>
                <div className="bg-yellow-100 p-4 rounded-lg flex items-center justify-between">
                  <div>
                    <p className="text-gray-700">
                      BANK {selectedBank} ({currentBankDetails.bankCode})
                    </p>
                    <p className="text-gray-700">Account Number</p>
                    <p className="text-gray-700 font-bold">{currentBankDetails.accountNumber}</p>
                    <p className="text-gray-700">Account Name</p>
                    <p className="text-gray-700 font-bold">{currentBankDetails.accountName}</p>
                  </div>
                  <button onClick={() => handleCopy(currentBankDetails.accountNumber)} className="ml-4 bg-primaryColor text-white px-3 py-1 rounded-lg">
                    <FaCopy />
                  </button>
                </div>
              </div>
              <form>
                <div className="mb-4">
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Katsudoto" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-primaryColor focus:ring-primaryColor" />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="accountOwner"
                    value={formData.accountOwner}
                    onChange={handleInputChange}
                    placeholder="Account Owner Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-primaryColor focus:ring-primaryColor"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-primaryColor focus:ring-primaryColor"
                  />
                </div>
                <div className="mb-4">
                  <input type="text" name="amount" value={formData.amount} onChange={handleInputChange} placeholder="Amount" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-primaryColor focus:ring-primaryColor" />
                </div>
                <div className="text-center">
                  <button type="button" onClick={handleNext} className="bg-primaryColor text-white px-4 py-2 rounded-lg">
                    Next
                  </button>
                </div>
              </form>
            </div>
            {showUpload && (
              <div className="">
                <div className="text-left m-2 ping">
                  <button type="button" onClick={handleBack} className="bg-primaryColor text-white px-4 py-2 rounded-lg">
                    Back
                  </button>
                </div>
                <div className={`transition-transform duration-500 ${showUpload ? "block animate-slideLeft" : "hidden"} p-6 rounded-lg text-center w-full max-w-md`}>
                  <p className="mb-4">Upload proof of transfer Screen Shoot / Photo Slip Transfer</p>
                  <input type="file" onChange={handleFileChange} className="mb-4" />
                  {fileURL && <img src={fileURL} alt="Uploaded proof" className="mb-4 max-h-64 mx-auto" />}
                  <button type="button" onClick={handleConfirm} className="bg-red-600 text-white px-4 py-2 rounded-lg">
                    Confirm
                  </button>
                  {notification && <div className={`mt-4 p-2 rounded-lg text-center ${notification.includes("successfully") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>{notification}</div>}
                </div>
              </div>
            )}
          </>
        )}
        {showSuccess && (
          <div className="text-center p-8 rounded-lg shadow-lg bg-white">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-maroon flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 6-3 6m3-6h4m0 0l4-6m-4 6h4M3 6h4"></path>
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-green-600">Success</h2>
            <p className="text-lg text-gray-700">Your wedding gift submission has been received successfully. Thank you for your generous contribution!</p>
            <button onClick={handleBack} className="mt-6 bg-primaryColor text-white px-4 py-2 rounded-lg">
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeddingGift;
