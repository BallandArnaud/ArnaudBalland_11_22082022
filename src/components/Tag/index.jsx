import './index.css'

function Tag(props) {
  const { tagName } = props
  return <div className="tag">{tagName}</div>
}

export default Tag
