const ChildComponent = ({ greeting }) => {
  return <h2>{greeting}</h2>;
};

const App = () => {
  return (
    <div>
      hello
      <ChildComponent greeting="おはよう" />
    </div>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
