export default function Friend({ friend }) {
  let { name, email, id, address } = friend;
  return (
    <div className="box">
        <p>Id: {id}</p>
      <h3>Name: {name} </h3>
      <p>Email: {email} </p>
      <p>Address: {address.city} </p>
      <p>Zip Code: {address.zipcode}</p>
    </div>
  );
}
