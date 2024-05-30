export const Footer = () => {
  const year = new Date().getFullYear();
  console.log(year);

  return (
    <div>
      &copy; {year} All rights reserved :: Designed and developed by Mario
      Esteban Mateo
    </div>
  );
};
