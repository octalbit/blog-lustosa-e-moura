import React from 'react';

import * as S from './styled';
import TitleBox from '../components/TitleBox';
import { rhythm } from '../utils/typography';
import { Link, graphql } from 'gatsby';

class BlogsHome extends React.Component {
	render() {
		const { data } = this.props || null;
		const siteTitle = data.site.siteMetadata.title;
		const posts = data.allMarkdownRemark.edges;

		return (
			<S.BlogHomeWrapper>
				<S.BlogHomeContainer>
					<S.BlogHomeContent>
						<TitleBox text="Notícias" />
						<S.BlogHomeBoxItems>
							{posts.map(({ node }) => {
								const title = node.frontmatter.title || node.fields.slug;
								return (
									<S.BlogHomeBoxItem key={node.fields.slug}>
										<header>
											<S.BlogHomeDateBoxtext>{node.frontmatter.date}</S.BlogHomeDateBoxtext>
											<S.BlogHomeTitleBoxtext
												style={{
													marginBottom: rhythm(1 / 4)
												}}
											>
												<Link
													style={{ boxShadow: `none`, color: '#B88A34' }}
													to={node.fields.slug}
												>
													{title}
												</Link>
											</S.BlogHomeTitleBoxtext>
										</header>
										<section>
											<S.BlogHomeDescBoxtext>
												{node.frontmatter.description}
											</S.BlogHomeDescBoxtext>
										</section>
									</S.BlogHomeBoxItem>
								);
							})}
						</S.BlogHomeBoxItems>
						<S.BlogHomeBoxBtn to={/blog/}>mais notícias</S.BlogHomeBoxBtn>
					</S.BlogHomeContent>
				</S.BlogHomeContainer>
			</S.BlogHomeWrapper>
		);
	}
}

export default BlogsHome;

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
					}
				}
			}
		}
	}
`;
