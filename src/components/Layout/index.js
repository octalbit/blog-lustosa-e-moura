import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../../utils/typography';
import GlobalStyles from '../../styles/global'

import * as S from './styled'
import Navbar from '../Navbar'

class Layout extends React.Component {
	render() {
		const { location, title, children } = this.props;
		const rootPath = `${__PATH_PREFIX__}/`;
		let header;

		if (location.pathname === rootPath) {
			header = (
				<h1
					style={{
						...scale(1.5),
						marginBottom: rhythm(1.5),
						marginTop: 0
					}}
				>
					<Link
						style={{
							boxShadow: `none`,
							textDecoration: `none`,
							color: `inherit`
						}}
						to={`/`}
					>
						{title}
					</Link>
				</h1>
			);
		} else {
			header = (
				<h3
					style={{
						fontFamily: `Montserrat, sans-serif`,
						marginTop: 0
					}}
				>
					<Link
						style={{
							boxShadow: `none`,
							textDecoration: `none`,
							color: `inherit`
						}}
						to={`/`}
					>
						{title}
					</Link>
				</h3>
			);
		}
		return (
			<S.LayoutWrapper>
				<GlobalStyles />
				<Navbar />
				<main>{children}</main>
				<footer>
					© {new Date().getFullYear()}, criado por
					{` `}
					<a href="https://frosty-beaver-32580f.netlify.com/" target="_blank">
						Octalbit
					</a>
				</footer>
			</S.LayoutWrapper>
		);
	}
}

export default Layout;
