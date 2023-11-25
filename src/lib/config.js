/**
 * All of these values are used throughout the site – for example,
 * in the <meta> tags, in the footer, and in the RSS feed.
 *
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/

export const siteTitle = 'Safe Haven Accounting'
export const siteDescription = 'Accounting & bookkeeping services for business and not for profit organizations.'
export const siteURL = 'safehavenaccounting.com'
export const siteLink = 'https://safehavenaccounting.com/'
export const siteAuthor = '- Safe Haven Accounting'
export const siteAdministrator = 'Data Insight Solutions'
export const siteAdminLink = 'https://data-insight-solutions.com/'
export const siteTemplateLink = 'https://github.com/josh-collinsworth/sveltekit-blog-starter'
export const siteTemplateAuthor = 'Josh Collinsworth'

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Home',
		route: '/'
	}, {
		title: 'Services',
		route: '/services'
	}, {
		title: 'Resources',
		route: '/blog'
	}, {
		title: 'Links',
		route: '/links'
	}, {
		title: 'FAQs',
		route: '/faqs'
	}, {
		title: 'Contact',
		route: '/contact'
	},
]
