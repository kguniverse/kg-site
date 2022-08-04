import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  date: {
    float: "right",
  },
});
type educationProps = {
  name: string;
  degree: string;
  major: string;
  startDate: string;
  endDate: string;
};

export function Education(props: { education: Array<educationProps> }) {
  const education = props.education;
  const classes = useStyles();
  function renderList(item: educationProps, index: number) {
    return (
      <div key={index}>
        <h3>
          <strong>{item.name}</strong>
          <code className={classes.date}>
            {item.startDate + " - " + item.endDate}
          </code>
        </h3>
        &emsp;&emsp;
        <strong>{item.degree}</strong>
        &emsp;
        {item.major}
      </div>
    );
  }
  return (
    <div className="section">
      <h2>
        <strong>Education</strong>
      </h2>
      {education.map((item: any, index: number) => {
        return renderList(item, index);
      })}
    </div>
  );
}
