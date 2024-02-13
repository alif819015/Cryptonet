const Card = ({ item }) => {
  const { gender, name, phone, email } = item;
  console.log(item);
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl m-2 lg:m-20 lg:p-10">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
          alt="Album"
        />
      </figure>
      <div className="card-body font-semibold">
        <div className="flex gap-5">
          <h1 className="card-title">First Name: {name?.first}</h1>
          <h1 className="card-title">Last Name: {name?.last}</h1>
        </div>
        <h1 className="font-semibold">Gender: {gender}</h1>
        <p className="flex-grow-0">Phone Number: {phone}</p>
        <p>Gmail: {email}</p>
      </div>
    </div>
  );
};

export default Card;
