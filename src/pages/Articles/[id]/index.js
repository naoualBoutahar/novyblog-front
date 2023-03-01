import Stack from "@mui/material/Stack";
import ArticleCard from "@/components/ArticleCard";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { useArticle } from "@/hooks/useArticles";
import { useRouter } from "next/router";
import Drawer from "@/components/Drawer";
import CommentCard from "@/components/CommentCard";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



export default function ArticleDetail() {
  const router = useRouter();
  const { id } = router.query;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { data, isLoading, isError, error } = useArticle(id);

  const article = data;
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (isLoading) {
    return "loading";
  }
  else if (isError) {
    return error
  }
  else {
    return (<Stack spacing={4} padding={3}>
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
        />
        <Box display="flex" justifyContent="space-between" alignItems="flex-end" mt={2}>
        <Button variant="contained" endIcon={<SaveIcon />}>
          Save
        </Button>
        <Button variant="contained" endIcon={<EditIcon />}>
          Edit
        </Button>
        <Button variant="contained"  startIcon={<DeleteIcon />}>
          Delete
        </Button>
        </Box>
      </Box>
      <Drawer >
        <Stack spacing={3} padding={2} bgcolor="primary.dark">{article.comments ? article?.comments.map(comment => <CommentCard key={comment.id} content={comment.content} publishDate={comment.publishDate} />) : "no comments"}</Stack></Drawer>
    </Stack>
    );
  }
}
