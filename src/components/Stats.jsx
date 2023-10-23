const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>You can start preparing your luggage 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You've got everything, you are ready to go! 🛫"
          : `👜You have ${numItems} items on your list, and you already packed
          ${numPacked} item(s) (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
