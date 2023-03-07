import Stack from "@mui/material/Stack";
import ArticleCard from "@/components/ArticleCard";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { useArticle } from "@/hooks/useArticles";
import { useRouter } from "next/router";
import Drawer from "@/components/Drawer";
import CommentCard from "@/components/CommentCard";
import { Button, TextField, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { AddCommentMutation, useAddComment } from "@/hooks/useComments";



export default function ArticleDetail() {
  const theme = useTheme();
  const router = useRouter();
  const { id } = router.query;
  const [open, setOpen] = React.useState(false);
  const { data, isLoading, isError, error } = useArticle(id);
  const [articlen,setArticle] = React.useState;
  const [commentContent, setCommentContent] = React.useState("");
  const { addComment, CommentIsLoading } = useAddComment();

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const getCurrentUser = () => {};
  
  const saveComment = (e) => {
    const newComment = {
      content: commentContent,
      publishDate: new Date(),
      article: article,
    };
  
    addComment(newComment);
    setCommentContent("");
  };
  
  const deleteComment = (e) => {};
  
  const editComment = () => {};

  if (isLoading) {
    return "loading";
  } else if (isError) {
    return error;
  } else {
    return (
      <Stack spacing={4} padding={3}>
        <ArticleCard
          title={article?.title}
          variant="h3"
          content={article?.content}
          publishDate={article?.publishDate}
          actions={false}
        />
        <Box padding={2}>
          <TextField
            id="outlined-multiline-flexible"
            label="Add comment..."
            multiline
            fullWidth
            onChange={(e) => setCommentContent(e.target.value)}
          />
          {console.log("test",commentContent)}
          <Grid
            width={300}
            container
            display="flex"
            justifyContent="space-between"
            alignItems="flex-end"
            mt={2}
          >
            <Button
              variant="contained"
              sx={{ color: "white", bgcolor: "secondary.main" }}
              onClick={(e) => saveComment(e)}
              endIcon={<SaveIcon />}
            >
              Save
            </Button>
            <Button
              variant="contained"
              sx={{ color: "white", bgcolor: "secondary.main" }}
              onClick={editComment}
              endIcon={<EditIcon />}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              sx={{ color: "white", bgcolor: "secondary.main" }}
              onClick={deleteComment}
              endIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </Grid>
        </Box>
        <Drawer>
          <Stack spacing={3} padding={2} bgcolor="primary.main">
            {article.comments.map((comment) => (
              <CommentCard
                key={comment.id}
                content={comment.content}
                publishDate={comment.publishDate}
              />
            ))}
          </Stack>
        </Drawer>
      </Stack>
    );
  }
}
