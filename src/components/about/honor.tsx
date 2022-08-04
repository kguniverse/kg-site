import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  date: {
    float: "right",
  },
});
type honorProp = {
  name: string;
  date: string;
};

export function Honor(props: { honor: Array<honorProp> }) {
  const honor = props.honor;
  const classes = useStyles();
  function renderItem(item: honorProp, index: number) {
    return (
      <div key={index}>
        <h3>
          <strong>{item.name}</strong>
          <code className={classes.date}>{item.date}</code>
        </h3>
      </div>
    );
  }
  return (
    <div className="section">
      <h2>
        <strong>Honor</strong>
      </h2>
      {honor.map((item: any, index: number) => {
        return renderItem(item, index);
      })}
    </div>
  );
}
