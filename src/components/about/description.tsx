import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  description: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
  },
  contact: {
    display: "flex",
    flexDirection: "column",
  },
});

export function Description(props: { name: string; contact: any }) {
  const name = props.name;
  const contact = props.contact;
  const classses = useStyles();
  const Contact = (props: { contact: any }) => {
    return (
      <Box className={classses.contact}>
        <h2>Contact</h2>
        <Box>
          <EmailIcon />
          <a href={"mailto:" + props.contact.email}>{props.contact.email}</a>
        </Box>
        <Box>
          <GitHubIcon />
          <a href={"https://" + props.contact.github}>{props.contact.github}</a>
        </Box>
      </Box>
    );
  };
  return (
    <Box className={classses.description}>
      <Avatar
        alt="kg"
        src="/avatar.png"
        sx={{
          width: "auto",
          height: "auto",
          maxWidth: "50%",
          objectFit: "cover",
        }}
      />
      <h1>{name}</h1>

      <Divider />
      <Contact contact={contact} />
    </Box>
  );
}
