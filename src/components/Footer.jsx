export const Footer = () => {
  const year = new Date().getFullYear();
  console.log(year);

  return (
    <div className="text-center text-white font-opensans mt-5 p-5 bg-primary">
      &copy; {year} All rights reserved | Developed by Mario Esteban Mateo
    </div>
  );
};
