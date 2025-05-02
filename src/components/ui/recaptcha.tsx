"use client";

import { useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface ReCaptchaProps {
  onChange: (token: string | null) => void;
  onExpired?: () => void;
}

export function ReCaptcha({ onChange, onExpired }: ReCaptchaProps) {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    // Load the reCAPTCHA script
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="6Lea4isrAAAAAO3CpDU7nolnfi7DAtHacvs2XB_y" // Updated site key
        onChange={onChange}
        onExpired={onExpired}
      />
    </div>
  );
} 