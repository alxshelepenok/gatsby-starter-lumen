import { CreatePagesArgs } from "gatsby";

interface CategoriesQueryResult {
  allMarkdownRemark: {
    group: Array<{
      fieldValue: string;
      totalCount: number;
    }>;
  };
}

const categoriesQuery = async (graphql: CreatePagesArgs["graphql"]) => {
  const result = await graphql<CategoriesQueryResult>(`{
  allMarkdownRemark(
    filter: {frontmatter: {template: {eq: "post"}, draft: {ne: true}}}
    sort: {frontmatter: {date: DESC}}
  ) {
    group(field: {frontmatter: {category: SELECT}}) {
      fieldValue
      totalCount
    }
  }
}`);

  return result?.data?.allMarkdownRemark?.group ?? [];
};

export default categoriesQuery;
