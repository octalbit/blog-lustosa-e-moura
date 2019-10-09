/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';

const Bio = () => {
	const data = useStaticQuery(graphql`
		query BioQuery {
			avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
				childImageSharp {
					fixed(width: 50, height: 50) {
						...GatsbyImageSharpFixed
					}
				}
			}
			site {
				siteMetadata {
					author
					social {
						twitter
					}
				}
			}
		}
	`);

	const { author, social } = data.site.siteMetadata;
	return (
		<div>
			<p style={{ fontWeight: '600'}}>
				Escrito por <strong>{author}</strong> advocacia e consultoria.
				{` `}
			</p>
		</div>
	);
};

export default Bio;
