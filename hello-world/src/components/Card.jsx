export default function Card({ name, email, bio }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>Email: {email}</h2>
      <h2>Bio: {bio}</h2>
    </div>
  );
}
