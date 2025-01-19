import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import RandomQuote from "./components/quotes_app/components/RandomQuote.jsx";
import FormName from "./components/FormName.jsx";
const quotes = [
  {
    author: "Albert Einstein",
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  },
  {
    author: "Isaac Newton",
    quote:
      "If I have seen further it is by standing on the shoulders of Giants.",
  },
  {
    author: "Marie Curie",
    quote: "Be less curious about people and more curious about ideas.",
  },
  {
    author: "Nikola Tesla",
    quote:
      "The present is theirs; the future, for which I really worked, is mine.",
  },
  { author: "Leonardo da Vinci", quote: "Learning never exhausts the mind." },
  {
    author: "Aristotle",
    quote: "The more you know, the more you realize you don't know.",
  },
  {
    author: "Galileo Galilei",
    quote:
      "You cannot teach a man anything; you can only help him discover it in himself.",
  },
  { author: "Socrates", quote: "The unexamined life is not worth living." },
  {
    author: "Plato",
    quote:
      "Wise men speak because they have something to say; fools because they have to say something.",
  },
  {
    author: "Confucius",
    quote: "It does not matter how slowly you go as long as you do not stop.",
  },
  {
    author: "Mark Twain",
    quote: "The secret of getting ahead is getting started.",
  },
  {
    author: "Winston Churchill",
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  },
  {
    author: "Theodore Roosevelt",
    quote: "Do what you can, with what you have, where you are.",
  },
  {
    author: "Helen Keller",
    quote: "Alone we can do so little; together we can do so much.",
  },
  {
    author: "Benjamin Franklin",
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
  },
  {
    author: "Abraham Lincoln",
    quote: "The best way to predict your future is to create it.",
  },
  {
    author: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
  },
  {
    author: "Mother Teresa",
    quote:
      "Not all of us can do great things. But we can do small things with great love.",
  },
  {
    author: "Dalai Lama",
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
  },
  {
    author: "Nelson Mandela",
    quote: "It always seems impossible until it’s done.",
  },
  {
    author: "Steve Jobs",
    quote: "Innovation distinguishes between a leader and a follower.",
  },
  {
    author: "Bill Gates",
    quote:
      "Success is a lousy teacher. It seduces smart people into thinking they can’t lose.",
  },
  {
    author: "Elon Musk",
    quote:
      "When something is important enough, you do it even if the odds are not in your favor.",
  },
  {
    author: "Jeff Bezos",
    quote:
      "I knew that if I failed I wouldn’t regret that, but I knew the one thing I might regret is not trying.",
  },
  {
    author: "Oprah Winfrey",
    quote:
      "The biggest adventure you can take is to live the life of your dreams.",
  },
  {
    author: "Barack Obama",
    quote:
      "The future rewards those who press on. I don’t have time to feel sorry for myself.",
  },
  {
    author: "Ruth Bader Ginsburg",
    quote:
      "Fight for the things that you care about, but do it in a way that will lead others to join you.",
  },
  {
    author: "Malala Yousafzai",
    quote: "One child, one teacher, one book, one pen can change the world.",
  },
  {
    author: "Stephen Hawking",
    quote: "Intelligence is the ability to adapt to change.",
  },
  {
    author: "Carl Sagan",
    quote: "Somewhere, something incredible is waiting to be known.",
  },
  {
    author: "Richard Feynman",
    quote:
      "I would rather have questions that can’t be answered than answers that can’t be questioned.",
  },
  {
    author: "Jane Goodall",
    quote:
      "What you do makes a difference, and you have to decide what kind of difference you want to make.",
  },
  {
    author: "Ralph Waldo Emerson",
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  },
  {
    author: "Henry David Thoreau",
    quote:
      "Go confidently in the direction of your dreams. Live the life you have imagined.",
  },
  {
    author: "John Lennon",
    quote: "Life is what happens when you’re busy making other plans.",
  },
  {
    author: "Bob Marley",
    quote:
      "The greatness of a man is not in how much wealth he acquires, but in his integrity and his ability to affect those around him positively.",
  },
  {
    author: "J.K. Rowling",
    quote:
      "It is our choices that show what we truly are, far more than our abilities.",
  },
  {
    author: "Dr. Seuss",
    quote:
      "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
  },
  { author: "Maya Angelou", quote: "Try to be a rainbow in someone’s cloud." },
  {
    author: "Virginia Woolf",
    quote: "You cannot find peace by avoiding life.",
  },
  { author: "Ernest Hemingway", quote: "Courage is grace under pressure." },
  {
    author: "William Shakespeare",
    quote: "It is not in the stars to hold our destiny but in ourselves.",
  },
  {
    author: "Toni Morrison",
    quote:
      "If you want to fly, you have to give up the things that weigh you down.",
  },
  {
    author: "Victor Hugo",
    quote: "Even the darkest night will end and the sun will rise.",
  },
  {
    author: "Friedrich Nietzsche",
    quote: "He who has a why to live can bear almost any how.",
  },
  {
    author: "Blaise Pascal",
    quote:
      "All of humanity’s problems stem from man’s inability to sit quietly in a room alone.",
  },
  {
    author: "Marcus Aurelius",
    quote:
      "You have power over your mind – not outside events. Realize this, and you will find strength.",
  },
  {
    author: "Epictetus",
    quote:
      "It’s not what happens to you, but how you react to it that matters.",
  },
  {
    author: "Seneca",
    quote: "Luck is what happens when preparation meets opportunity.",
  },
];
import AddGRoceriesCopy from "./components/grocery_list/components/Grocery_List_copy.jsx";
import GroceryNav from "./components/grocery_list/components/Grocery_Nav.jsx";
import GroceryFooter from "./components/grocery_list/components/Grocery_Footer.jsx";
import GroceryForm from "./components/grocery_list/components/Grocery_Form.jsx";
// import Book from "./components/Book.jsx";
// import { booksData } from "./data.js";

function App() {
  // ************************************************************** //
  const [count, setCount] = useState(0);
  const [quote, setQuote] = useState(quotes[0]);
  const [color, setColor] = useState("bg-dark");

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
    setColor(getRandomColor());
  };

  const getRandomColor = () => {
    const colors = [
      "bg-primary",
      "bg-secondary",
      "bg-success",
      "bg-danger",
      "bg-warning",
      "bg-info",
      "bg-dark",
      "bg-white",
      "bg-transparent",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // ************************************************************** //

  const [groceries, setGroceries] = useState([]);
  const [groceriesInput, setGroceriesInput] = useState("");

  function handleOnChange(event) {
    setGroceriesInput(event.target.value);
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    const newGrocery = {
      id: Date.now(),
      name: groceriesInput,
      bought: false,
    };
    setGroceries([newGrocery, ...groceries]);
    setGroceriesInput("");
  }

  function toogleBought(id) {
    const updatedGRoceries = groceries.map((grocery) => {
      if (grocery.id === id) {
        grocery.bought = !grocery.bought;
      }
      return grocery;
    });
    setGroceries(updatedGRoceries);
  }

  function handleDeleteGrocery(id) {
    const remainingGroceries = groceries.filter((item) => item.id !== id);
    console.log(remainingGroceries);
    setGroceries(remainingGroceries);
  }

  return (
    <div className="container pt-2">
      <GroceryNav />
      <GroceryForm
        item={groceriesInput}
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
      />
      <AddGRoceriesCopy
        items={groceries}
        handleOnToggle={toogleBought}
        handleDeleteGrocery={handleDeleteGrocery}
      />
      <GroceryFooter items={groceries} />

      {/* <IncrementButton onIncrease={increment} count={count} />
      <DecrementButton onDecrease={decrement} count={count} />
      <RandomQuote quote={quote} color={color} onChangeQuote={getRandomQuote} />
      booksData.items.map((book, index) => (
        <Book
          Key={index}
          title={book.volume.title}
          subtitle={book.volume.subtitle}
          author={book.volume.authors}  
          description={book.volume.description}
          image={book.volume.image}
        />
      ))*/}
    </div>
  );
}

export default App;

function IncrementButton({ onIncrease, count }) {
  return (
    <div>
      <button className="btn btn-success" onClick={onIncrease}>
        Increment
      </button>
      <p>Count: {count}</p>
    </div>
  );
}

function DecrementButton({ onDecrease }) {
  return (
    <div>
      <button className="btn btn-danger" onClick={onDecrease}>
        Decrement
      </button>
    </div>
  );
}
