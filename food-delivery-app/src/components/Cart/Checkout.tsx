import classes from "./Checkout.module.scss";

type Props = {
  closeModal: () => void;
};

const Checkout = ({ closeModal }: Props) => {
  const confirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={confirmHandler}>
        <div>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" />
        </div>

        <div>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" />
        </div>
        <div>
          <label htmlFor="postal">Postal code</label>
          <input type="text" id="postal" />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input type="text" id="city" />
        </div>

        <button onClick={closeModal}>Cancel</button>
        <button>Confirm</button>
      </form>
    </div>
  );
};

export default Checkout;
