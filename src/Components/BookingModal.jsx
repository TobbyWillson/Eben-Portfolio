import React, { useState } from "react";
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

  // Prevent rendering if not open
  if (!isOpen) {
    return null;
  }

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        notes: "",
      });
    }, 2000);
  };

  // Generate time slots
  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

  return (
    <div className='fixed inset-0 z-[9999] flex items-center justify-center' style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}>
      {/* Backdrop */}
      <div className='absolute inset-0 bg-black/50 backdrop-blur-sm' onClick={onClose} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}></div>

      {/* Modal Content */}
      <div className='relative bg-white rounded-2xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto shadow-2xl' style={{ position: "relative", zIndex: 10000 }}>
        {/* Close Button */}
        <button onClick={onClose} className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors' style={{ zIndex: 10001 }}>
          <IoClose size={24} />
        </button>

        {isSubmitted ? (
          <div className='p-8 text-center'>
            <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg className='w-8 h-8 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
              </svg>
            </div>
            <h3 className='text-2xl font-bold text-gray-800 mb-2'>Booking Request Sent!</h3>
            <p className='text-gray-600'>I'll get back to you within 24 hours to confirm your call.</p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className='p-6 pb-4 border-b'>
              <h2 className='text-2xl font-bold text-gray-800'>Schedule a Call</h2>
              <p className='text-gray-500 mt-1'>Pick a time that works best for you</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className='p-6 space-y-4'>
              {/* Name */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Name</label>
                <input type='text' name='name' required value={formData.name} onChange={handleChange} placeholder='Your name' className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all' />
              </div>

              {/* Email */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
                <input type='email' name='email' required value={formData.email} onChange={handleChange} placeholder='your@email.com' className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all' />
              </div>

              {/* Phone */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Phone Number</label>
                <input type='tel' name='phone' required value={formData.phone} onChange={handleChange} placeholder='+1 (555) 000-0000' className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all' />
              </div>

              {/* Date */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Preferred Date</label>
                <input type='date' name='date' required value={formData.date} onChange={handleChange} min={new Date().toISOString().split("T")[0]} className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all' />
              </div>

              {/* Time Slots */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Preferred Time</label>
                <div className='grid grid-cols-3 gap-2'>
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type='button'
                      onClick={() => setFormData({ ...formData, time: slot })}
                      className={`py-2 px-3 text-sm rounded-lg border transition-all ${formData.time === slot ? "bg-blue-600 text-white border-blue-600" : "border-gray-300 hover:border-blue-500 hover:text-blue-600"}`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Additional Notes (Optional)</label>
                <textarea
                  name='notes'
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder='Tell me about what you want to discuss...'
                  rows={3}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none'
                />
              </div>

              {/* Submit Button */}
              <button type='submit' disabled={!formData.time} className='w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed'>
                Confirm Booking
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
