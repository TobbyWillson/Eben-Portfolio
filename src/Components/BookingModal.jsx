import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", date: "", time: "", notes: "" });
    }, 2500);
  };

  const timeSlots = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];

  return (
    <div className='fixed inset-0 z-[9999] flex items-center justify-center p-4'>
      {/* Backdrop */}
      <div className='absolute inset-0 bg-slate-900/60 backdrop-blur-sm' onClick={onClose} />

      {/* Modal Content */}
      <div className='relative bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300'>
        <button onClick={onClose} className='absolute top-4 right-4 text-gray-400 hover:text-red-600 transition-colors cursor-pointer'>
          <IoClose size={24} />
        </button>

        {isSubmitted ? (
          <div className='p-12 text-center'>
            <div className='w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-gray-900'>Request Sent!</h3>
            <p className='text-gray-500 mt-2'>Talk to you soon.</p>
          </div>
        ) : (
          <div className='p-6 md:p-8'>
            <div>
              <h2 className='text-2xl font-bold text-gray-900'>Schedule a Call</h2>
            </div>
            <form onSubmit={handleSubmit} className='mt-6 space-y-4'>
              <input type='text' name='name' placeholder='Full Name' required value={formData.name} onChange={handleChange} className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all' />
              <input type='email' name='email' placeholder='Email Address' required value={formData.email} onChange={handleChange} className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all' />
              <input type='number' name='phone' placeholder='Phone Number' required value={formData.phone} onChange={handleChange} className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all' />

              <div className='grid grid-cols-2 gap-4'>
                <input type='date' name='date' required value={formData.date} onChange={handleChange} className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none' />
                <select name='time' required value={formData.time} onChange={handleChange} className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none'>
                  <option value=''>Select Time</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <textarea name='notes' placeholder='How can I help?' rows={3} value={formData.notes} onChange={handleChange} className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none resize-none' />

              <button type='submit' className='w-full py-4 bg-blue-600 hover:bg-[#2563EB] text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-95 cursor-pointer'>
                Confirm Booking
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
