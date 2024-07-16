type Props = {};

const Styled = {
  borderTop: "1px solid black",
  height: "2px",
  padding: 0,
  margin: "20px auto 10px auto",
};

function Separator({}: Props) {
  return <div style={Styled}></div>;
}

export default Separator;
