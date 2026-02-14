import React from 'react';

const Map = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9501.296541484859!2d-2.238611!3d53.462667!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1f36a70dc8b%3A0xeec76e8f6adfa6af!2sBase!5e0!3m2!1sen!2sus!4v1770615409891!5m2!1sen!2sus"
        width="100%"
        height="140"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default Map;
