

const AddressForm = () => {

  return (
    <div className='w-full'>
      <h3 className="title-h4 font-bold text-base mb-10">Shipping address</h3>
      <fieldset className='flex gap-9'>
        <label className="labelUserForm">
          <input className='inputUserForm' type="text" placeholder="First Name" name="First Name" />
        </label>
        <label className="labelUserForm">
          <input className='inputUserForm' type="text" placeholder="First Name" name="First Name" />
        </label>
      </fieldset>

      <label className="labelUserForm">
        <input className='inputUserForm' type="text" placeholder="Address" name="Address" />
      </label>

      <label className="labelUserForm">
        <input className='inputUserForm'
          type="text"
          placeholder="Appaetnentment,suit,e.t.c (optinal)"
          name="Appaetnentment,suit,e.t.c (optinal)"
        />
      </label>

      <label className="labelUserForm">
        <input className='inputUserForm' type="text" placeholder="City" name="City" />
      </label>

      <fieldset className='flex gap-9'>
        <label className="labelUserForm">
          <input className='inputUserForm' type="text" placeholder="Bangladesh" name="Bangladesh" />
        </label>
        <label className="labelUserForm">
          <input className='inputUserForm' type="text" placeholder="Postal Code" name="Postal Code" />
        </label>
      </fieldset>
    </div>
  );
};

export default AddressForm;
