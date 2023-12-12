<script>
	import { Parallax, ParallaxLayer } from 'svelte-parallax'

	let parallax;
	let disabled = false;
	let fancy = 'streamlined'.split('');
</script>

<button class="disable" on:click={() => disabled = !disabled}>Stop animation</button>
<div class="w-screen" style="overflow: visible !important;">
<Parallax sections={3} bind:this={parallax} disabled={disabled}>
	{#each fancy as char, index (index)}
	  <ParallaxLayer
			rate={(index + .5) / (fancy.length - 1)}
      offset={1}
		  style="
			  margin-left: {7.7 + (index * 7)}%;
				display: flex;
				justify-content: flex;
				align-items: center;
		  "
		>
			<p class="fancy">
				{char}
			</p>
	  </ParallaxLayer>
	{/each}

	<ParallaxLayer offset={1} rate={-2.5} style="display: flex; justify-content: flex-end;">
		<div style="background-color: lightblue; opacity: 0.5; margin-left:50%; width:100%; height: 100%;"/>
	</ParallaxLayer>

	<ParallaxLayer offset={1} rate={2.5} style="display: flex; justify-content: flex-start;">
		<div style="background-color: yellow; opacity: 0.5; width: 50%; height: 100%;"/>
	</ParallaxLayer>

  <ParallaxLayer
	  rate=1
		style="
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		"
	>
    <h1 class="h1">Your business bookkeeping ...</h1>
    <button
      id="top"
		  class="btn"
			on:click={() => parallax.scrollTo(3, {selector: '#bottom', duration: 4000})}
		>
		  Learn More ↓
		</button>
  </ParallaxLayer>

	<ParallaxLayer
	  offset=2
		rate=1
		style="
		"
    class="grid place-items-center"
	>

    <div class="grid place-items-center">
      <h2>
        Safe Haven Accounting provides you services to fit your business needs,
      </h2>
      <a href="/services">
        <button class="btn">
          Services
        </button>
      </a>
    </div>
    <div class="grid place-items-center">
      <h2>
        as well as learning resources to educate yourself and your staff.
      </h2>
      <a href="/blog">
        <button class="btn">
          Resources
        </button>
      </a>
    </div>
    <div class="grid place-items-center my-20">
      <button
        id="bottom"
        class="btn"
        on:click={() => parallax.scrollTo(1, {selector: '#top', duration: 1000})}
      >
        Back to top
      </button>
    </div>
  </ParallaxLayer>
</Parallax>
</div>
<style>
  .disable {
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    z-index: 10;
    font-size: .6rem;
  }

	.fancy {
		font-size: 6rem;
	}
</style>
