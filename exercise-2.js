const order = {};

/*if (
  order &&
  order.customer &&
  order.customer.address &&
  !order.customer.address.city
) */ {
}

// il codice si può semplificare grazie all'utilizzo dell'optional chaining in questo modo
console.log(order?.customer?.address?.city);
console.log("City is required");
