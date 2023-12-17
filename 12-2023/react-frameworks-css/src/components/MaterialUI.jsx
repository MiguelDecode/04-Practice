import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function MaterialUI() {
  function MediaCard() {
    return (
      <Card sx={{ maxWidth: 345, marginInline: "auto" }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.unsplash.com/photo-1607863002591-e1718c499b07?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxpemFyZHxlbnwwfHwwfHx8MA%3D%3D"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }

  return (
    <>
      <h2>Material UI</h2>
      <MediaCard />
    </>
  );
}

export default MaterialUI;
