import * as React from "react";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import ArticleCard from "../../components/ArticleCard";
import useArticles from "../../hooks/useArticles";
import Intro from "@/components/Intro";

export default function Articles(articleId) {
  const { data, isLoading, isError, error } = useArticles();
  const [articles, setArticles] = React.useState([]);

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = React.useState(1);
  const [nbrOfPages, setNbrOfPages] = React.useState(
    Math.ceil(articles.length / itemsPerPage)
  );

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  React.useEffect(() => {
    if (data !== undefined) {
      setArticles(data);
      setNbrOfPages(Math.ceil(data.length / itemsPerPage));
    }
  }, [data]);
  if (isLoading) {
    return "Loading...";
  } else if (isError) {
    return error.message;
  }
  return (
    <>
      <Intro />
      <Box
        id="articles"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"

      >
        <Grid padding={3} container display="flex" sx={{ direction: { xs: "column", md: "row" } }} justifyContent="space-between" alignItems='center'>
          {articles
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((article) => (
              <Grid mb={6} item key={article.articleId} xs={12} md={6} lg={4} padding={1}>

                <ArticleCard
                  id={article.articleId}
                  title={article.title}
                  content={article.content.substring(0, 150).concat('...')}
                  publishDate={article.publishDate}
                  actions={true}
                />
              </Grid>
            ))}
        </Grid>
        <Pagination
          count={nbrOfPages}
          page={currentPage}
          onChange={handleChangePage}
          defaultPage={1}
          size="large"
          showFirstButton
          showLastButton
        />
      </Box>
    </>
  );
}
