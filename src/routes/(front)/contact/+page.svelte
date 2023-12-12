<script>
	let selected;
	let options = [
		{ value: 'lead', name: 'Leader' },
		{ value: 'contributor', name: 'Contributor' }
	];
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>
<div class="grid place-items-center">
  <h1>Contact</h1>
  <h5>Here you can inquire about us, our process and services, or just say hello!</h5>
</div>




<div class="pt-20 grid place-items-center">
	<form
		netlify
		id="contactForm"
		class="grid grid-flow-row gap-6"
		name="contact"
		method="POST"
		data-netlify="true"
		data-netlify-recaptcha="true"
		netlify-honeypot="bot-field"
		action="https://formspree.io/f/mvojdjre"
	>
		<label for="name" class="mb-2 max-w-sm min-w-xs">Your Name:
      <input class="input text-black" id="name" placeholder="Name" type="text" name="name" /></label
		>
		<label for="business" class="mb-2 max-w-sm min-w-xs"
			>Business Name:
      <input
        class="input text-black"
				id="business"
				placeholder="Business Name"
				type="text"
				name="business"
			/></label
		>
		<label for="email" class="mb-2 max-w-sm min-w-xs"
			>Your Email: <input class="input text-black" id="email" placeholder="Email" type="email" name="email" /></label
		>
		<label for="phone" class="mb-2 max-w-sm min-w-xs"
			>Your Phone: <input class="input text-black" id="phone" placeholder="Phone" type="phone" name="phone" /></label
		>
    <label for="preferPhone" class="mb-2 max-w-sm min-w-xs">
      I prefer phone:
      <input id="preferPhone" class="checkbox max-w-sm min-w-xs" type="checkbox" name="preferPhone"/>
    </label>


    <select class="select select-bordered w-full mb-2 max-w-sm min-w-xs text-black" items={options} bind:value={selected}>
      <option disabled selected>Your role:</option>
      {#each options as option}
          <option>{option.name}</option>
      {/each}
    </select>

		<label for="message" class="label">
      <span class="label-text text-white">Your Message</span>
    </label>
    <textarea id="message" class="textarea textarea-bordered text-black" placeholder="Message"></textarea>

		<input type="hidden" name="form-name" value="contact" />
		<button class="btn btn-secondary mx-auto" type="submit" value="Submit">Send</button>
	</form>
</div>
