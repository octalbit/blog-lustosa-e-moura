import React from 'react';
import * as S from '../styles/styledBlog';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

class BlogIndex extends React.Component {
	render() {
		const { data } = this.props;
		const siteTitle = data.site.siteMetadata.title;
		const posts = data.allMarkdownRemark.edges;

		return (
			<Layout location={this.props.location} title={siteTitle}>
				<SEO title="Notícias" />
				<S.BlogBaseWrapper>
					<S.BlogBaseContainer>
						<S.BlogBaseContent>
							{posts.map(({ node }) => {
								const title = node.frontmatter.title || node.fields.slug;
								return (
									<S.BlogBasePostItem key={node.fields.slug}>
										<header>
											<S.BlogBaseDateBoxtext>{node.frontmatter.date}</S.BlogBaseDateBoxtext>
											<S.BlogBaseTitleBoxtext
												style={{
													marginBottom: rhythm(1 / 4),
													
												}}
											>
												<Link style={{ boxShadow: `none`, color: '#B88A34' }} to={node.fields.slug}>
													{title}
												</Link>
											</S.BlogBaseTitleBoxtext>
											
										</header>
										<section>
											<S.BlogBaseDescBoxtext
												dangerouslySetInnerHTML={{
													__html: node.frontmatter.description || node.excerpt
												}}
											/>
									
										</section>
									</S.BlogBasePostItem>
								);
							})}		
						</S.BlogBaseContent>
					</S.BlogBaseContainer>
				</S.BlogBaseWrapper>
			</Layout>
		);
	}
}

export default BlogIndex;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						description
						url_movie
						url_photo
					}
				}
			}
		}
	}
`;
