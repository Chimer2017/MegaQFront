import { useState } from "react";
import { BaseNavbar } from "../components/navbar/base";
import { ask } from "../network/functions";

export function HomePage() {
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  //This isnt suppoused to work atm
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = await ask(question)
    // setAnswer(res)
  };
  return (
    <>
      <BaseNavbar />
      <section className="hero is-primary is-bold is-large">
        <div className="hero-body">
          <h1 className="title is-2">Welcome to MegaQ!</h1>
          <h3 className="subtitle is-4">
            Working with Mega Q is easy. We recommend asking questions as if you
            were interviewing a potential user for product. Use proper grammar
            and punctuation for best results.
            <br />
          </h3>
          <h4 className="subtitle is-5">
            Currently, can answer questions about the following topics:
          </h4>
          <li className="subtitle is-5 list-item">Cooking/Food</li>
          <h3 className="subtitle is-5 list-item">Here are some examples:</h3>
          <li className="subtitle is-5 list-item">
            What is the best part of cooking?
          </li>
          <li className="subtitle is-5 list-item">
            What do you hate most about shopping in store?
          </li>

          <label htmlFor="qq" className="title is-4">
            Question:{" "}
          </label>
          <div className="is-flex-direction-row mt-1">
            <input
              type="text"
              name="qq"
              placeholder="Input your question for MegaQ!"
              required
              className="input is-success mr-3 "
              style={{ width: "50%" }}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button
              type="submit"
              value="Ask Away"
              className="form-button button is-primary is-inverted is-outlined"
              onSubmit={handleSubmit}
            >
              Ask
            </button>
          </div>
          <div id="answer">
            <h1 id="answer">{answer}</h1>
          </div>
        </div>
        <script src="../static/js/scripts.js"></script>
      </section>
    </>
  );
}
