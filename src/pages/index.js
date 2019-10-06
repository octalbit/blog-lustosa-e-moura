import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

import Hero from '../components/Hero';
import About from '../components/About';
import Area from '../components/Area';
import Law from '../components/Lawyer';
import BlogHome from '../components/BlogHome'
import ContactBox from '../components/ContactBox'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Hero />
		<About />
		<Area />
		<Law />
		<BlogHome />
		<ContactBox />
	</Layout>
);

export default IndexPage;
