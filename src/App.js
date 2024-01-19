import logo from './logo.svg';
import './App.css';
import EightBall from './EightBall';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EightBall />
      </header>
    </div>
  );
}

EightBall.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "#27ae60" },
    { msg: "It is decidedly so.", color: "#27ae60" },
    { msg: "Without a doubt.", color: "#27ae60" },
    { msg: "Yes - definitely.", color: "#27ae60" },
    { msg: "You may rely on it.", color: "#27ae60" },
    { msg: "As I see it, yes.", color: "#27ae60" },
    { msg: "Most likely.", color: "#27ae60" },
    { msg: "Outlook good.", color: "#27ae60" },
    { msg: "Yes.", color: "#27ae60" },
    { msg: "Signs point to yes.", color: "#f39c12" },
    { msg: "Reply hazy, try again.", color: "#f39c12" },
    { msg: "Ask again later.", color: "#f39c12" },
    { msg: "Better not tell you now.", color: "#f39c12" },
    { msg: "Cannot predict now.", color: "#f39c12" },
    { msg: "Concentrate and ask again.", color: "#f39c12" },
    { msg: "Don't count on it.", color: "#c0392b" },
    { msg: "My reply is no.", color: "#c0392b" },
    { msg: "My sources say no.", color: "#c0392b" },
    { msg: "Outlook not so good.", color: "#c0392b" },
    { msg: "Very doubtful.", color: "#c0392b" },
  ]
}

export default App;
