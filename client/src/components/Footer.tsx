export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="text-center bg-blue-200 py-4">&copy; Copyright Santosh {year}</div>
  )
}
