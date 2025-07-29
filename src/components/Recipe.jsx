import Markdown from 'react-markdown'
import "../styles/App.css"
const Recipe = (props) => {
    const recipe = props.recipe
  return (
    <section className='.recipe-container'>
    <Markdown>{recipe}</Markdown>
    </section>
  )
}
export default Recipe;