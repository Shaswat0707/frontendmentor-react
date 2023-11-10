import { useState, useReducer } from "react";

const initialURLs = [];

const ACTIONS = {
  ADDED: "added",
  DELETED: "deleted",
  CLICKED: "clicked",
};

function urlReducer(urls, action) {
  switch (action.type) {
    case ACTIONS.ADDED: {
      return [
        ...urls,
        {
          original: action.original,
          shortened: action.shortened,
          clicked: false,
        },
      ];
    }
    case ACTIONS.DELETED: {
      return urls.filter((url) => url.shortened !== action.shortened);
    }
    case ACTIONS.CLICKED: {
      return urls.map((url) => {
        if (url.shortened === action.shortened) url.clicked = true;
        else url.clicked = false;
        return url;
      });
    }
    default: {
      return urls;
    }
  }
}

function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

const UrlInputBox = () => {
  const [URLs, dispatch] = useReducer(urlReducer, initialURLs);

  const [error, setError] = useState(false);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleShortening = async () => {
    if (typeof input === "undefined" || input === null || !validURL(input)) {
      setError(true);
      return;
    }
    let data = await generateShortenedURL();
    dispatch({ type: ACTIONS.ADDED, original: input, shortened: data });
    setInput("");
  };

  const handleClicked = (url) => {
    navigator.clipboard.writeText(url.shortened);
    dispatch({
      type: ACTIONS.CLICKED,
      shortened: url.shortened,
    });
  };

  const generateShortenedURL = async () => {
    let response = await fetch(
      `https://tinyurl.com/api-create.php?url=${input}`
    );
    let data = await response.text();
    return data;
  };

  return (
    <div className="url-shortener">
      <div className="container">
        <div className="input-container">
          <input
            type="text"
            value={input}
            aria-label="URL Input"
            aria-required="true"
            onChange={handleChange}
            data-error={error}
            placeholder="Shorten a link here..."
          />
          <p className="error" data-error={error}>
            Please add a link
          </p>
          <button
            className="primary-button"
            onClick={handleShortening}
            data-button="secondary"
          >
            Shorten It!
          </button>
        </div>
        {URLs.length > 0 ? (
          <div className="data-container">
            {URLs.map((url) => (
              <div key={url.shortened} className="url-container">
                <p className="original">{url.original}</p>
                <div className="shorten-container">
                  <p className="shortened">{url.shortened}</p>
                  <button
                    className={
                      "primary-button" + (url.clicked ? " copied" : "")
                    }
                    data-button="secondary"
                    onClick={() => handleClicked(url)}
                  >
                    {url.clicked ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default UrlInputBox;
