import { CreatePagesArgs } from "gatsby";

interface TagsQueryResult {
  allMarkdownRemark: {
    group: Array<{
      fieldValue: string;
      totalCount: number;
    }>;
  };
}

const tagsQuery = async (graphql: CreatePagesArgs["graphql"]) => {
  const result = await graphql<TagsQueryResult>(`{
  allMarkdownRemark(
    filter: {frontmatter: {template: {eq: "post"}, draft: {ne: true}}}
  ) {
    group(field: {frontmatter: {tags: SELECT}}) {
      fieldValue
      totalCount
    }
  }
}`);

  return result?.data?.allMarkdownRemark?.group || [];
};

export default tagsQuery;
