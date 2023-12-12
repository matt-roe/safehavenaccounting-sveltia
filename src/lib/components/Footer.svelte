<script>
	import MainNav from './MainNav.svelte'
	import { siteTitle, siteDescription, siteAuthor, siteAdministrator, siteAdminLink, siteTemplateLink, siteTemplateAuthor } from '$lib/config'
	import Testimonials from '$lib/components/Testimonials.svelte';
</script>

<footer>

  <div>
    <h3>Navigation</h3>
    <MainNav />
  </div>

  <div style="margin-top:-2.4rem;">
    <Testimonials />
  </div>

  <div>
    <h3>{siteTitle}</h3>
    <h5>{siteDescription}</h5>
    <br>
    <p>Website created with <a href='https://svelte.kit'>Sveltekit</a><br> by <a href={siteAdminLink}>{siteAdministrator}</a><br>with special thanks to <a href={siteTemplateLink}> {siteTemplateAuthor}</a></p>
    <br>
    <span class="badge">&copy;{new Date().getFullYear()} {siteAuthor}</span>
  </div>

</footer>
