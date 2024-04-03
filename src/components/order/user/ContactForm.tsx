import { useState } from 'react';

import CheckIcon from '../../../assets/images/icons/check.svg?react';

const ContactForm = () => {
  const [acceptWithRules, setAcceptWithRules] = useState(false);

  const toggleAcceptWithRules = () => setAcceptWithRules(() => !acceptWithRules);

  return (
    <div className="w-full mb-28">
      <div className="flex justify-between items-center">
        <h3 className="title-h4 font-bold text-base">Contact Information</h3>
        <div className="flex gap-2 font-main font-medium text-sm text-gray">
          <p>Already have an account?</p>
          <button className='hover:text-accent' type="button">Log in</button>
        </div>
      </div>

      <label className="labelUserForm">
        <input className='inputUserForm' type="text" placeholder="First Name" name="First Name" />
      </label>

      <label className="relative flex items-center gap-2 ml-1 cursor-pointer">
        <input
          className="absolute opacity-0"
          type="checkbox"
          onChange={toggleAcceptWithRules}
          name="type"
        />
        <span className="">
          <CheckIcon />
        </span>
        <span className="font-main font-normal text-xs text-grey">
          Shipping & taxes calculated at checkout
        </span>
      </label>
    </div>
  );
};

export default ContactForm;
