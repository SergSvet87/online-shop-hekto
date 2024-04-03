
import BreadCrumbs from '../../components/breadcrumbs/BreadCrumbs';
import Goods from '../../components/order/goods/Goods';
import User from '../../components/order/user/User';

const Order = () => {
  

  return (
    <section>
      <div className="bg-bg_product">
        <div className="container pt-24 pb-32">
          <h1 className="title-h1 mt-2">Order</h1>
          <BreadCrumbs home='Cart' page="Order" />
        </div>
      </div>

      <div className="container pt-32 pb-36 flex justify-between items-start gap-5 bg-white">
        <User />
        <Goods />        
      </div>
    </section>
  );
};

export default Order;
