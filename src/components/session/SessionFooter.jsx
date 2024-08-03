import { Link } from "react-router-dom"

const SessionFooter = ({ message, link, linkText }) => {
  return (
    <footer className="flex justify-center gap-1 font-medium font-poppins text-foreground items-baseline">
      <span>{message}</span>
      <Link to={link} className="text-tertiary cursor-pointer ">
        {linkText}
      </Link>
    </footer>
  )
}

export default SessionFooter