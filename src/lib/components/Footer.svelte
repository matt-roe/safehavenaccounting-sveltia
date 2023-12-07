<script>
	import MainNav from './MainNav.svelte'
	import { siteTitle, siteDescription, siteAuthor, siteAdministrator, siteAdminLink, siteTemplateLink, siteTemplateAuthor } from '$lib/config'
	import Testimonials from '$lib/components/Testimonials.svelte';
</script>

<footer>

  <div>
    <MainNav />
  </div>

  <div>
    <Testimonials />
  </div>

  <div>
    <p class="h2">{siteTitle}</p>
    <p class="h4">{siteDescription}</p>
    <br>
    <p>Website created with <a href='https://svelte.kit'>Sveltekit</a><br> by <a href={siteAdminLink}>{siteAdministrator}</a><br>with special thanks to <a href={siteTemplateLink}> {siteTemplateAuthor}</a></p>
    <br>
    <span class="badge">&copy;{new Date().getFullYear()} {siteAuthor}</span>
  </div>

</footer>
