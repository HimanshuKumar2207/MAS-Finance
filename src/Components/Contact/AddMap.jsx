import React from "react";

const AddMap = () => {
  const map =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8413.576840922131!2d85.10033786390947!3d25.603690753483168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57f53a21d783%3A0x142ae07d92802222!2sBihar%20State%20Electronics%20Development%20Corporation!5e0!3m2!1sen!2sin!4v1739007257238!5m2!1sen!2sin";
  return (
    <>
      <div className="mt-20">
        <iframe
          src={map}
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default AddMap;
