import { useState, useEffect } from "react";
import "./style.css"; 

const Header = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    const titleText = "Hi, my name is Ilya"; 
    const titleWords = titleText.split(" "); 
    const name = "Ilya"; 
    const letterColor = '#5c62ec'; 

    return (
        <header className="header">
            <div className="circles">
                <ul>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <li key={index} className={`circle circle-${index + 1}`}></li>
                    ))}
                </ul>
            </div>
            <div className={!visible ? 'hide' : 'visible'}>
                <div className="header__wrapper">
                    <h1 className={`header__title slide-in`}>
                        {titleWords.map((word, wordIndex) => (
                            <span key={wordIndex} className="word">
                                {word === "Ilya" ? (
                                    name.split("").map((letter, index) => (
                                        <span
                                            key={index}
                                            className={`letter`}
                                            style={{
                                                animationDelay: `${(wordIndex * 0.5) + (index * 0.05)}s`,
                                                color: letterColor, 
                                            }}
                                        >
                                            {letter}
                                        </span>
                                    ))
                                ) : (
                                    word.split("").map((letter, index) => (
                                        <span
                                            key={index}
                                            className={`letter`}
                                            style={{
                                                animationDelay: `${(wordIndex * 0.5) + (index * 0.05)}s`,
                                            }}
                                        >
                                            {letter}
                                        </span>
                                    ))
                                )}
                                <span className="space"> </span>
                            </span>
                        ))}
                        <br />
                        <span className={`slide-in`}>a frontend developer</span>
                    </h1>
                    <div className={`header__text slide-in`}>
                        <p>with passion for learning and creating.</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
