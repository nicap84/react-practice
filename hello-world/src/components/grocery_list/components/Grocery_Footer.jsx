export default function GroceryFooter({ items }) {
  const count = items.filter((item) => item.bought).length;

  return (
    <div className="footer">
      <footer className="bg-light text-dark text-center p-3">
        <p className="display-6">{`${count} of ${items.length} items have been bought`}</p>
      </footer>
    </div>
  );
}
