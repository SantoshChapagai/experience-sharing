export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="text-center">&copy; Copyright Santosh {year}</div>
  )
}
