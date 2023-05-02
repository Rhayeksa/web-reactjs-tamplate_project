import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../logo.svg';

const Page2 = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <div style={{ "float": "left" }}>
                    <Link
                        className="App-link"
                        to={"/"}
                        style={{ "margin": "15px" }}
                    >
                        Home
                    </Link>
                    <Link
                        className="App-link"
                        to={"/page1"}
                        style={{ "margin": "15px" }}
                    >
                        Page 1
                    </Link>
                    <Link
                        className="App-link"
                        to={"/page2"}
                        style={{ "margin": "15px" }}
                    >
                        Page 2
                    </Link>
                    <Link
                        className="App-link"
                        to={"/page3"}
                        style={{ "margin": "15px" }}
                    >
                        Page 3
                    </Link>
                </div>
                <div>
                    <h1>Page 2</h1>
                </div>
            </header>
        </div>
    );
}

export default Page2;
