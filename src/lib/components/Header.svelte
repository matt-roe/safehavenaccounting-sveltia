<script>
	import MainNav from './MainNav.svelte';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
	import { siteTitle } from '$lib/config';
	import lottie from 'lottie-web';
	import animationData from '$lib/assets/animations/accounting.json';
	import { onMount } from 'svelte';

	import { toast } from 'svoast';
	async function launchToast() {
		toast.success('Super good looking toast ;)');
	}

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	};

	var isModalOpen = false;

	var timer = {
		running: false,
		startedAt: null,
		elapsedTime: null,
		_interval: null
	};

	function startTimer() {
		timer = {
			running: true,
			startedAt: Date.now(),
			elapsedTime: 0,
			_interval: setInterval(() => {
				if (timer.running) {
					timer.elapsedTime = Date.now() - timer.startedAt;
					console.log(timer.elapsedTime);
					if (timer.elapsedTime >= 10000) {
						stopTimer();
						launchToast();
					}
				}
			}, 1000) // accurate to 1/10th of a second
		};
	}

	function stopTimer() {
		console.log('stop');
		timer.running = false;
	}

	let animationContainer;
	onMount(() => {
		lottie.loadAnimation({
			container: animationContainer,
			animationData: animationData
		});
		var isSubscribed = localStorage.getItem('isSubscribed');
		console.log(isSubscribed);
		if (isSubscribed == null) {
			localStorage.setItem('isSubscribed', false);
		}
		if (isSubscribed == 'false') {
			startTimer();
		}
	});
</script>

<header>
	<a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main">
		Skip to main content
	</a>

	<a href="/" class="site-title">
		{siteTitle}
	</a>
	<div class="w-20" bind:this={animationContainer} />
	<HamburgerMenuButton />
	<MainNav />
</header>

<!-- Put this part before </body> tag -->
<!-- 🔵 conditional `modal-open` class if true -->
<div
	data-te-modal-init
	data-te-modal-non-invasive="true"
	class="pointer-events-none fixed left-0 top-0 z-[1055] hidden w-full overflow-y-auto overflow-x-hidden outline-none"
	id="exampleModalNonInvasive"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
	class:modal-open={isModalOpen}
>
	<div
		data-te-modal-dialog-ref
		class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:my-7 min-[576px]:max-w-[500px]"
	>
		<div
			class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600"
		>
			<div
				class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
			>
				<h5
					class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
					id="exampleModalLabel"
				>
					Subscribe
				</h5>
				<button
					type="button"
					class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
					data-te-modal-dismiss
					aria-label="Close"
					on:click={() => (isModalOpen = false)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="relative flex-auto p-4" data-te-modal-body-ref>
				<p class="py-4">Please subscribe to receive our free educational resources!</p>
				<form
					netlify
					id="subscribeForm"
					class=""
					name="subscribe"
					data-netlify="true"
					data-netlify-recaptcha="true"
					netlify-honeypot="bot-field"
					action="https://formspree.io/f/mvoegnqe"
					method="post"
				>
					<label for="name" class="mb-2"
						><input
							class="input text-black"
							id="name"
							placeholder="Name"
							type="text"
							name="name"
						/></label
					>
					<label for="email" class="mb-2"
						><input
							class="input text-black"
							id="email"
							placeholder="Email"
							type="email"
							name="email"
						/></label
					>
					<input type="hidden" name="form-name" value="subscribe" />
					<button
						class="btn btn-secondary mx-auto"
						type="submit"
						on:click={() => localStorage.setItem('isSubscribed', true)}
						value="Submit">Subscribe</button
					>
				</form>
			</div>
			<div
				class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
			>
				<button
					type="button"
					class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
					data-te-modal-dismiss
					data-te-ripple-init
					data-te-ripple-color="light"
					on:click={() => (isModalOpen = false)}
				>
					Close
				</button>
			</div>
		</div>
	</div>
</div>
<div class="modal pointer-events-none fixed left-0 top-0 w-full">
	<div class="modal-box w-3/12">
		<form method="dialog" class="modal-backdrop">
			<button>close</button>
			<button class="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
		</form>
		<div class="modal-action grid grid-flow-row justify-items-center">
			<!-- 🔵 set false on click -->
		</div>
	</div>
</div>
