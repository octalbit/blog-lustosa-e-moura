import React from 'react';
import * as S from '../styles/styledBlogPost';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';
import SocialLinks from '../components/SocialLinks';

class BlogPostTemplate extends React.Component {
	render() {
		const post = this.props.data.markdownRemark;
		const siteTitle = this.props.data.site.siteMetadata.title;
		const { previous, next } = this.props.pageContext;

		return (
			<Layout location={this.props.location} title={siteTitle}>
				<SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
				<S.BlogPostWrapper>
					<S.BlogPostContainer>
						<S.BlogPostContent>
							<header>
								<S.BlogPostTitle
									style={{
										marginTop: rhythm(1),
										marginBottom: 0
									}}
								>
									{post.frontmatter.title}
								</S.BlogPostTitle>
								<S.BlogPostInfoPost>
									<S.BlogPostInfoTextBox>
										<Bio />
										<S.BlogPostInfoDate>{post.frontmatter.date}</S.BlogPostInfoDate>
									</S.BlogPostInfoTextBox>
									{/* <SocialLinks /> */}
								</S.BlogPostInfoPost>

								{/* <img src={post.frontmatter.url_photo} style={{ width: '100%' }} /> */}
							</header>
							<section dangerouslySetInnerHTML={{ __html: post.html }} />
							<hr
								style={{
									marginBottom: rhythm(1)
								}}
							/>
						</S.BlogPostContent>
					</S.BlogPostContainer>
				</S.BlogPostWrapper>

				<nav>
					<ul
						style={{
							display: `flex`,
							flexWrap: `wrap`,
							justifyContent: `space-between`,
							listStyle: `none`,
							padding: 0
						}}
					>
						<li>
							{previous && (
								<Link to={previous.fields.slug} rel="prev">
									← {previous.frontmatter.title}
								</Link>
							)}
						</li>
						<li>
							{next && (
								<Link to={next.fields.slug} rel="next">
									{next.frontmatter.title} →
								</Link>
							)}
						</li>
					</ul>
				</nav>
			</Layout>
		);
	}
}

export default BlogPostTemplate;

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		site {
			siteMetadata {
				title
				author
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			id
			excerpt(pruneLength: 160)
			html
			frontmatter {
				title
				date(formatString: "DD MMMM, YYYY")
				description
			}
		}
	}
`;
