import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*(){}[]+-/_~`'";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md px-4 mx-auto my-8 text-orange-500 bg-gray-800 rounded-lg shadow-md">
      <h1 className="my-5 text-center text-white">Password Generator</h1>
      <div className="flex py-5 mb-4 overflow-hidden rounded-lg shadow">
        <input
          type="text"
          value={password}
          className='w-full px-3 py-1 outline-none'
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className="px-3 py-0.5 text-white bg-blue-700 outline-none shrink-0 hover:bg-cyan-700">Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" min={8} max={20} value={length} className='cursor-pointer' onChange={(e) => setLength(parseInt(e.target.value))} />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" checked={numberAllowed} onChange={(e) => setNumberAllowed(e.target.checked)} />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" checked={characterAllowed} onChange={(e) => setCharacterAllowed(e.target.checked)} />
          <label>Special Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
