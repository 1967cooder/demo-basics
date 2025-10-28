const Footer = ({ count, setCount }) => {
  return (
    <footer className="attribution">
      <div>
        Copyright <a href="#">Silvana Lindholm</a>
      </div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>{count}</div>
      <button onClick={() => setCount(count - 1)}>-</button>
    </footer>
  );
};
export default Footer;
