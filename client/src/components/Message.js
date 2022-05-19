const Message = ({ variant, message }) => {
  return (
    <div className={`alert alert-${variant || 'info'}`}>
      {message}
    </div>
  )
}

export default Message
