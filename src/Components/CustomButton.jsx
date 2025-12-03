const CustomButton = ({ ...props }) => {
  return (
    <button
      variant="contained"
      {...props}
      six={{ margin: 5, baackgroundColor: "red" }}
    />
  );
};

export default CustomButton;
