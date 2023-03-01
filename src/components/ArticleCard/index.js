import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function ArticleCard(props) {
  return (
    <Card elevation={12} sx={{ minWidth: 300 }} >
      <CardMedia
        sx={{ height: 140 }}
        image="https://source.unsplash.com/random"
        title="green iguana"
      />
      <CardContent sx={{ minHeight: 150 }} >
        <Typography gutterBottom variant={props.variant} component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.content}
        </Typography>
      </CardContent>
      {props.actions && (
        <CardActions>
        <Link href={`/Articles/${props.id}`}>
          <Button size="small" variant="contained" color="secondary">
            Read
          </Button>
        </Link>
        </CardActions>
      )}
    </Card>
  );
}
