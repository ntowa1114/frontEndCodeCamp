const { useState, useEffect, useRef } = React;



export const OTPGenerator = () => {

  const [otp, setOtp] = useState();

  const [timer, setTimer] =useState(0);

  const [isActive, setIsActive] =useState(false);


const generateOTP = () => {
  const code = Math.floor(100000 +Math.random() * 900000).toString();
  setOtp(code);
  setTimer(5);
  setIsActive(true);

}

  useEffect(() => {

    let interval;

    if(isActive && timer > 0){

      interval = setInterval(()=>{

        setTimer((prev) =>prev -1);

      },1000);

   

    }else if (timer ==0){

      setIsActive(false);

      clearInterval(interval);

    }

    return() => clearInterval(interval);

  }, [isActive, timer]);

  return(

    <div class="container">

      <h1 id="otp-title">OTP Generator</h1>

      <h2 id="otp-display">
        {otp ? otp : "Click 'Generate OTP' to get a code"}
      </h2>
      
    <p id="otp-timer" aria-live="polite">
        {isActive && timer > 0 
          ? `Expires in: ${timer} seconds` 
          : otp && timer === 0 
            ? "OTP expired. Click the button to generate a new OTP." 
            : "" }
      </p>

      <button id="generate-otp-button" onClick={generateOTP} disabled={isActive}>Generate OTP</button>

    </div> 

  );

};