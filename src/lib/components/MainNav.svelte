<script>
	import { navItems } from '$lib/config';
	import { isMenuOpen, theme } from '$lib/assets/js/store';
	import NavItem from './NavItem.svelte';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
	
</script>
<!-- Contents of this file will be used in the header and the responsive hamburger menu. -->
<nav class="main-nav" class:open={$isMenuOpen}>
	<ul>
		{#each navItems as page}
		<NavItem href={page.route}>
			{page.title}
		</NavItem>
		{/each}
	</ul>
	<HamburgerMenuButton closeOnly="true" />
</nav>
<input type="checkbox" name="light" id="light" on:change={theme('light')}>
<label for="light"></label>
<input type="checkbox" name="night" id="night" on:change={theme('night')}>
<label for="night"></label>

<style>
input {
	display:none;
}

label[for=light] {
	width: 11vmin;
	cursor: pointer;
	height: 30vmin;
	margin-top: -30vmin;
	clip-path: polygon(30% 0, 70% 0, 95% 100%, 5% 100%);
}

label[for=night] {
	position: relative;
	bottom: 3vmin;
	background: #fff;
	width: 36px;
	height: 36px;
	border-radius: 100% 1% 100% 100%;
	background: radial-gradient(circle at 90% 10%, #fff 0 0.1vmin, #fff0 calc(0.1vmin + 1px) 100%), radial-gradient(circle at 68% 25%, #fff 0 0.1vmin, #fff0 calc(0.1vmin + 1px) 100%), radial-gradient(circle at 85% 40%, #fff 0 0.08vmin, #fff0 calc(0.08vmin + 1px) 100%), radial-gradient(circle at 95% 20%, #fff0 0 2vmin, #fff calc(2vmin + 1px) 100%);
	cursor: pointer;
}

.light {
	width: 0.75vmin;
	height: 0.75vmin;
	background: #f600;
	border-radius: 100%;
	left: 5.1vmin;
	top: 1.95vmin;
	animation: spin 6s linear 0s infinite;
	animation-play-state: running;
	perspective: 10vmin;
}

.light:before,
.light:after {
	content: "";
	position: relative;
	width: 30vmin;
	height: 4vmin;
	background: radial-gradient(circle at 0% 50%, #fdf8cc6e, #fff0);
	margin-top: -1.85vmin;
	clip-path: polygon(100% 0, 0 53%, 100% 100%);
	margin-left: 0.375vmin;
}

.light:after {
	transform: rotateX(60deg);
}

/* labels */
label[for=night] {
	position: relative;
	bottom: 3vmin;
	background: #0000;
	width: 36px;
	height: 36px;
	border-radius: 0%;
	--star: #fff 0 1px, #fff0 2px 100%;
	cursor: pointer;
	animation: hide-moon 0.5s ease-in-out 0s 1;
}

label[for=night]:before {
	content: "";
	position: relative;
	bottom: 6px;
	background: #fff;
	width: 24px;
	height: 24px;
	left: 6px;
	border-radius: 100% 1% 100% 100%;
	background: 
		radial-gradient(circle at 90% 10%, var(--star)), 
		radial-gradient(circle at 68% 25%, var(--star)), 
		radial-gradient(circle at 85% 40%, var(--star)), 
		radial-gradient(circle at 95% 20%, #fff0 0 12px, #fff 13px 100%);
	cursor: pointer;
}


@keyframes hide-moon {
	0% { transform: rotate(0deg) scale(0.25); }
	100% { transform: rotate(360deg) scale(1); }
}

@keyframes hide-sun {
	0% { transform: rotate(0deg) scale(0.25);  }
	100% { transform: rotate(360deg) scale(1); }
}

#night:checked ~ label[for=night] {
	animation: hide-sun 0.5s ease-in-out 0s 1;    
}

#night:checked ~ label[for=night]:before { 
	width: 36px;
	height: 36px;
	border-radius: 1%;
	background: 
		radial-gradient(circle at 4px 17px, var(--star)),
		radial-gradient(circle at 32px 17px, var(--star)), 
		radial-gradient(circle at 18px 4px, var(--star)),
		radial-gradient(circle at 18px 32px, var(--star)),          
		radial-gradient(circle at 11px 6px, var(--star)),
		radial-gradient(circle at 11px 30px, var(--star)),
		radial-gradient(circle at 6px 10px, var(--star)),
		radial-gradient(circle at 6px 25px, var(--star)),         
		radial-gradient(circle at 25px 6px, var(--star)),
		radial-gradient(circle at 25px 30px, var(--star)),
		radial-gradient(circle at 30px 10px, var(--star)),
		radial-gradient(circle at 30px 25px, var(--star)),
		radial-gradient(circle at 50% 50%, #fff 0 9px, #fff0 10px 100%);
	cursor: pointer;
}

</style>