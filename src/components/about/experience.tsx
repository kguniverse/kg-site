import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  date: {
    float: "right",
  },
});
type experienceProps = {
  name: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  url?: string;
};

export function Experience(props: { experience: Array<any> }) {
  const experience = props.experience;
  const classes = useStyles();
  function renderItem(item: experienceProps, index: number) {
    return (
      <div key={index}>
        <h3>
          <strong>{item.name}</strong>
          <code className={classes.date}>
            {item.startDate + " - " + item.endDate}
          </code>
        </h3>
        {item.url ? <a href={item.url}>{item.url}</a> : <div />}
        <p>
          <em>{item.position}</em>
          <br />
          {item.description}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2>
        <strong>Experience & Projects </strong>
      </h2>
      {experience.map((item: any, index: number) => {
        return renderItem(item, index);
      })}
    </div>
  );
}
