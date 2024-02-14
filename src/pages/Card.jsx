const Card = ({ item }) => {
  const { gender, name, phone, email, picture, location } = item;
  console.log(item);
  return (
    <div className="card lg:card-side font-serif bg-base-100 shadow-xl m-2 lg:m-20 lg:p-10 lg:space-x-4">
      <figure className="w-full lg:w-[30%]">
        <img className="w-full" src={picture?.large} alt="Album" />
      </figure>
      <div className="card-body font-semibold text-gray-200 bg-gray-500 lg:rounded-l-none rounded-b-lg lg:rounded-r-lg">
        <div className="flex gap-5">
          <h1 className="text-lg">First Name: {name?.first}</h1>
          <h1 className="text-lg">Last Name: {name?.last}</h1>
        </div>

        <h1 className="font-semibold">Location: {location?.city}</h1>
        <h1 className="font-semibold">Gender: {gender}</h1>
        <p className="flex-grow-0">Phone Number: {phone}</p>
        <p>Gmail: {email}</p>
      </div>
    </div>
  );
};

export default Card;
