
import ContactForm from './ContactForm';
import AddressForm from './AddressForm';

const User = () => {
  const handlerSubmit = () => {
    console.log('Данные отправлены');
  };

  return (
    <form onSubmit={handlerSubmit} className="basis-2/3 px-7 py-16 bg-bg-form rounded-md">
      <ContactForm />
      <AddressForm />

      <button
        className="px-6 py-3 bg-accent rounded-sm text-center text-white hover:bg-sky-blue"
        type="submit">
        Submit
      </button>
    </form>
  );
};

export default User;
