function Tweet(props) {
  const nameStyle = {
    color: props.nameColor,
  };
  const defaultStyle = {
    color: props.defaultColor,
    backgroundColor: props.backgroundColor,
    padding: props.defaultPadding
  };
  return (
    <div style={defaultStyle}>
      <p><strong style={nameStyle}>{props.name}</strong> @{props.username}</p>
      <p>{props.message}</p>
      <p>{props.date}</p>
    </div>
  )
}