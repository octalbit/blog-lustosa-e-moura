import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import Hero from '../components/Hero';
import About from '../components/About';
import Area from '../components/Area';
import Law from '../components/Lawyer';
import BlogHome from '../components/BlogHome'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Hero />
		<About />
		<Area />
		<Law />
		<BlogHome />
	</Layout>
);

export default IndexPage;
