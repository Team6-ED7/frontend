export const H3title = ({ className, children }) => {
  return (
    <h2
      className={`text-black font-rajdhani text-2xl font-black pb-5 ${className} `}
    >
      {children}
    </h2>
  );
};
export default H3title;
