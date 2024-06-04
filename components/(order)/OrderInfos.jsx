// OrderInfos.jsx
import AccountSkeleton from "../(account)/AccountSkeleton";

export default function OrderInfos({ orders, ordersLoading }) {
  return (
    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto mt-20">
      <div className="w-full flex-col justify-start items-start lg:gap-14 md:gap-10 gap-8 inline-flex">
        <div className="w-full flex-col justify-start items-start gap-4 flex">
          <h1 className="text-primary font-black text-5xl w-full">
            Mes commandes
          </h1>
          <p className="text-secondary text-base font-light leading-relaxed">
            Retrouvez la liste de vos commandes passées sur notre site.
          </p>
        </div>

        {ordersLoading && <AccountSkeleton />}
        {!ordersLoading && (
          <div className="w-full flex-col justify-start items-start gap-6 flex">
            {orders.length > 0 ? (
              orders.map((order) => (
                <div
                  key={order.id}
                  className="w-full flex-col justify-start items-start gap-4 flex"
                >
                  <div className="collapse collapse-arrow bg-base-200 w-full">
                    <input
                      type="radio"
                      name="order-accordion"
                      id={`order-${order.id}`}
                      defaultChecked={false}
                    />
                    <div className="text-primary collapse-title text-xl font-bold">
                      Commande #{order.id} -{" "}
                      {new Date(order.orderDate).toLocaleDateString()}
                      <span className="ml-4 text-secondary text-base font-light">
                        <br />
                        Statut: {order.status}
                      </span>
                    </div>
                    <div className="collapse-content mt-4">
                      <div className="w-full flex-col justify-start items-start gap-4 flex">
                        {order.details && order.details.length > 0 ? (
                          order.details.map((item) => (
                            <div
                              key={item.id}
                              className="w-full flex justify-between items-center"
                            >
                              <img
                                src={item.thumbnail}
                                alt={item.name}
                                className="w-16 h-16 rounded-lg"
                              />
                              <div className="text-primary text-base font-normal leading-relaxed">
                                {item.name}
                              </div>
                              <div className="text-primary text-base font-normal leading-relaxed">
                                Quantité: {item.quantity}
                              </div>
                              <div className="text-primary text-base font-normal leading-relaxed">
                                Prix: {item.price} €
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-secondary text-base font-light leading-relaxed">
                            Aucun article dans cette commande.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-secondary text-base font-light leading-relaxed">
                Vous n'avez pas encore passé de commande.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
