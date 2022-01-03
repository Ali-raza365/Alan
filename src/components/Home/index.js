import React, { useState, useEffect, useContext } from "react";
import { Typography } from "@material-ui/core";
import wordsToNumbers from "words-to-numbers";
import alanBtn from "@alan-ai/alan-sdk-web";
import { NewsCards, Modal } from "../index";
import useStyles from "./styles";
import { Redirect, useHistory } from "react-router";
import { AuthContext } from "../../Context";
import { auth } from "../../firebase";
import Comments from "../AddComments/Comments";
import CreatedBy from '../Created'

const App = () => {


    const history = useHistory();

    const { user } = useContext(AuthContext);
    const [activeArticle, setActiveArticle] = useState(0);
    const [newsArticles, setNewsArticles] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [Created, setCreated] = useState(true);
    const classes = useStyles();
    const LogoutHandler = () => {
        localStorage.removeItem('user')
        auth.signOut()
        history.push('./signin')
    }
    useEffect(() => {
        const userExit = localStorage.getItem("user");

        alanBtn({
            key: "64370f4c903e66c5b517887fefa45c1b2e956eca572e1d8b807a3e2338fdd0dc/stage",
            onCommand: ({ command, articles, number }) => {
                if (command === "newHeadlines") {
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                } else if (command === "instructions") {
                    setIsOpen(true);
                } else if (command === "highlight") {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                } else if (command === "open") {
                    const parsedNumber =
                        number.length > 2
                            ? wordsToNumbers(number, { fuzzy: true })
                            : number;
                    const article = articles[parsedNumber - 1];
                    if (parsedNumber > articles.length) {
                        alanBtn().playText("Please try that again...");
                    } else if (article) {
                        window.open(article.url, "_blank");
                        alanBtn().playText("Opening...");
                    } else {
                        alanBtn().playText("Please try that again...");
                    }
                }
            },
        });
        if (!userExit) {
            history.push("./signin");
        }
    }, []);
    useEffect(() => {
        setTimeout(() => {
            setCreated(false)
        }, 1000);
    }, [])
    if (Created) {
        return <CreatedBy />
    }

    return (
        <div style={{ position: "realitive", height: "100vh", overflowY: "scroll" }}>
            <div className="logoutCantainer">
                <button
                    className="logout"
                    onClick={(evt) => {
                        LogoutHandler(evt);
                    }}
                >
                    Log Out
                </button>
            </div>
            <div className={classes.logoContainer}>
                {newsArticles.length ? (
                    <div className={classes.infoContainer}>
                        <div className={classes.card}>
                            <Typography variant="h5" component="h2">
                                Try saying: <br />
                                <br />
                                Open article number [4]
                            </Typography>
                        </div>
                        <div className={classes.card}>
                            <Typography variant="h5" component="h2">
                                Try saying: <br />
                                <br />
                                Go back
                            </Typography>
                        </div>
                    </div>
                ) : null}
                <img
                    src="https://rainmakrr.com/wp-content/uploads/2020/05/Fintech-Startups-Paris-Fintech-Startups-France-Fintech-companies-paris-fintech-companies-France-Alan.png"
                    className={classes.alanLogo}
                    alt="logo"
                />
            </div>
            <div>

                <NewsCards articles={newsArticles} activeArticle={activeArticle} />
                <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <Comments />
            {/* {!newsArticles.length ? (
                <div className={classes.footer}>
                    <Typography variant="body1" component="h2">
                        Created by
                        <a
                            className={classes.link}
                            href="https://www.linkedin.com/in/adrian-hajdin/"
                        >
                            {" "}
                            Adrian Hajdin
                        </a>{" "}
                        -
                        <a
                            className={classes.link}
                            href="http://youtube.com/javascriptmastery"
                        >
                            {" "}
                            JavaScript Mastery
                        </a>
                    </Typography>
                    <img
                        className={classes.image}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzfFfFdLgOnFsv0_tdMw9rl5rIJlW8UyV557TGTFgcteAhlzdTvCB4fOanv3MzN6zb5_c&usqp=CAU"
                        height="50px"
                        alt="JSMastery logo"
                    />
                </div>
            ) : null} */}

        </div>
    );
};

export default App;
