const Card = (props) => {
  return (
    <div
      class="card my-2 p-2"
      classList={{ "rounded-3": props.rounded, "shadow-lg": !props.flat }}
    >
      {props.children}
    </div>
  )
}

export default Card
