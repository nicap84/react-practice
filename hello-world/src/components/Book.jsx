import { useState } from "react";

export default function Book({
  key,
  title,
  subtitle,
  author,
  description,
  image,
}) {
  const [isRead, setIsRead] = useState(false);
  return (
    <div className="user-profile" key={key}>
      <img src={image} alt={title}></img>
      <h2>Title: {title}</h2>
      <span>Subtitle: {subtitle}</span>
      <h3>Author: {author}</h3>
      <p>description: {description}</p>
      <button onClick={() => console.log("hello world")}>Mark as read</button>
    </div>
  );
}
