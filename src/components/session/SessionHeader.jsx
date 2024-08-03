import H2title from "../common/H2Title"

const SessionHeader = ({ title }) => {
  return (
    <header className=" flex justify-center">
      <H2title>{title}</H2title>
    </header>
  )
}

export default SessionHeader