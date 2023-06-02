import { useState } from "react"
import { textData } from "./data.jsx"

const App = () => {
  const [text, setText] = useState(textData)
  const [paragraphCount, setParagraphCount] = useState(1)

  const handleChange = (e) => {
    setParagraphCount(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setText(textData.slice(0, paragraphCount))
  }

  return (
    <main>
      <section className="text-gen">
        <h1 className="title">tired of boring lorem ipsum ?</h1>
        <form className="query" onSubmit={handleSubmit}>
          <label className="paragraph-label" htmlFor="paragraph-count">
            paragraphs:
          </label>
          <input
            type="number"
            id="paragraph-count"
            name="paragraph-count"
            min="1"
            max="8"
            className="paragraph-input"
            value={paragraphCount}
            onChange={handleChange}
          />
          <button className="gen-btn">generate</button>
        </form>
        <article className="generated-paragraphs">
          {text.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>
          })}
        </article>
      </section>
    </main>
  )
}
export default App
