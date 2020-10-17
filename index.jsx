const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

const MusicButton = ({ keyTrigger, id, url, handleClick, borderColor }) => {
  return (
    <button
      id={id}
      onMouseDown={(e) => {
        e.preventDefault();
      }}
      onClick={(e) => {
        handleClick(e.target.children[0]);
      }}
      className={
        "bg-gray-500 border-4 lg:border-8 border-gray-700 lg:h-40 lg:w-40 h-24 w-24 grid place-content-center rounded shadow-md transition duration-100 focus:outline-none drum-pad focus:border-" +
        borderColor
      }
    >
      <audio id={keyTrigger} src={url} className="clip"></audio>
      <span className="font-bold text-2xl text-white">{keyTrigger}</span>
    </button>
  );
};

const MusicButtonsWrapper = ({ bank, handleClick, borderColor }) => {
  return (
    <div className="col-span-7 grid grid-cols-3 lg:gap-6 gap-2 w-full h-full place-content-center ">
      {bank.map((sound) => (
        <MusicButton
          key={sound.id}
          keyCode={sound.keyCode}
          keyTrigger={sound.keyTrigger}
          id={sound.id}
          url={sound.url}
          handleClick={handleClick}
          borderColor={borderColor}
        />
      ))}
    </div>
  );
};

const Logo = () => (
  <div className="flex justify-center items-center">
    <img
      id="logo-img"
      src="https://svgshare.com/i/QdM.svg"
      alt="logo"
      className="lg:w-20 w-10"
    />
    <div
      id="logo"
      className="lg:text-5xl text-3xl font-bold font-serif text-left ml-2 tracking-widest lg:leading-8 leading-5 lg:py-12 py-4"
    >
      Drum
      <br />
      <span className="lg:text-4xl text-xl tracking-wide">Machine</span>
    </div>
  </div>
);

const BankSwitcher = ({ name, handleSwitch, active }) => {
  const bankSwitchClasses =
    name === active ? "border-red-500" : "border-gray-700";

  return (
    <div
      id={"bank-switch-" + name}
      className={`lg:w-24 lg:h-24 lg:p-4 w-16 h-16 w-full cursor-pointer bg-gray-600 grid place-content-center border-4 lg:border-8 rounded shadow-md ${
        name == "A" && " mr-2"
      } ${bankSwitchClasses}`}
      onClick={() => handleSwitch(name)}
    >
      <span className="font-bold text-2xl text-white">{name}</span>
    </div>
  );
};

const Display = ({ text }) => (
  <div
    id="display"
    className="w-full bg-gray-300 lg:py-6 py-2 my-2 rounded shadow-lg text-center"
  >
    <span className="text-gray-900 text-lg font-bold lg:font-normal lg:text-2xl font-mono">
      {text}
    </span>
  </div>
);

const Author = () => (
  <div className="lg:text-lg text-sm text-right text-gray-200 font-normal mt-auto justify-self-end">
    by{" "}
    <a
      href="https://github.com/devCayacoa"
      target="_blank"
      className="font-semibold font-mono text-purple-500 hover:text-white"
    >
      devCayacoa
    </a>
  </div>
);

const DrumMachine = ({
  bank,
  handleClick,
  display,
  bankSwitch,
  active,
  borderColor,
}) => {
  return (
    <div
      id="drum-machine"
      className="p-4 w-full mx-auto bg-gray-800 border-gray-900 grid grid-cols-12 shadow-xl rounded-md place-content-center"
    >
      <MusicButtonsWrapper
        bank={bank}
        handleClick={handleClick}
        borderColor={borderColor}
      />
      <div className="col-span-5 w-full mx-auto flex flex-col justify-start pl-8">
        <Logo />
        <Display text={display} />
        <div className="flex justify-between lg:mt-8 mt-2">
          <BankSwitcher name={"A"} handleSwitch={bankSwitch} active={active} />
          <BankSwitcher name={"B"} handleSwitch={bankSwitch} active={active} />
        </div>
        <Author />
      </div>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bank: [...bankOne],
      display: " ",
      active: "A",
      borderColor: "purple-400",
    };
  }

  componentDidMount() {
    this.setState({ ...this.state, display: "Heater Kit" });
    document.addEventListener("keypress", (e) => {
      const key = e.key.toUpperCase();
      const sound = document.getElementById(key);
      sound.parentElement.focus();
      this.handleClick(sound);
    });
  }

  componentWillUnmount() {
    document.removeEventListener("keypress");
  }

  handleClick = (sound) => {
    sound.currentTime = 0;
    sound.play();
    sound.parentElement.focus();
    const display = sound.parentElement.id.replace("-", " ");
    const borderColor = this.randomColorPicker(this.colorsArr);
    this.setState({ ...this.state, display, borderColor });
  };

  bankSwitch = (name) => {
    const bank = name == "A" ? [...bankOne] : [...bankTwo];
    const display = name == "A" ? "Heater Kit" : "Piano Kit";
    this.setState({ ...this.state, bank, display, active: name });
  };

  colorsArr = [
    "red-600",
    "orange-400",
    "orange-500",
    "yellow-400",
    "green-400",
    "green-600",
    "teal-400",
    "teal-600",
    "blue-300",
    "blue-500",
    "indigo-600",
    "purple-500",
    "purple-600",
    "pink-400",
    "pink-600",
  ];

  randomColorPicker(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  render() {
    return (
      <div
        className={"select-none grid h-screen place-content-center antialiased"}
      >
        <DrumMachine
          bank={this.state.bank}
          display={this.state.display}
          handleClick={this.handleClick}
          bankSwitch={this.bankSwitch}
          active={this.state.active}
          borderColor={this.state.borderColor}
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
