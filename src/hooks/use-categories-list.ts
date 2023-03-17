import { graphql, useStaticQuery } from "gatsby";

interface CategoriesQueryResult {
  allMarkdownRemark: {
    group: Array<{
      fieldValue: string;
      totalCount: number;
    }>;
  };
}

const useCategoriesList = () => {
  const { allMarkdownRemark } = useStaticQuery<CategoriesQueryResult>(
    graphql`query CategoriesListQuery {
  allMarkdownRemark(
    filter: {frontmatter: {template: {eq: "post"}, draft: {ne: true}}}
  ) {
    group(field: {frontmatter: {category: SELECT}}) {
      fieldValue
      totalCount
    }
  }
}`,
  );

  return allMarkdownRemark.group ?? [];
};

export default useCategoriesList;
