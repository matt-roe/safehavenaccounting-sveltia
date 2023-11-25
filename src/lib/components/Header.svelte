<script>
	import MainNav from './MainNav.svelte'
	import HamburgerMenuButton from './HamburgerMenuButton.svelte'
	import { siteTitle } from '$lib/config'
  import lottie from 'lottie-web';
  import animationData from '$lib/assets/animations/bars.json';
  import { onMount } from 'svelte';

  let isModalOpen = false

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	}

  var timer = {
    running: false,
    startedAt: null,
    elapsedTime: null,
    _interval: null
  }

  function startTimer () {
    timer = {
      running: true,
      startedAt: Date.now(),
      elapsedTime: 0,
      _interval: setInterval(() => {
        if (timer.running) {
          timer.elapsedTime = Date.now() - timer.startedAt
          console.log(timer.elapsedTime)
          if (timer.elapsedTime >= 10000) {
            stopTimer();
            isModalOpen = true;
          }
        }
      }, 1000) // accurate to 1/10th of a second
    }

  }

  function stopTimer () {
    console.log('stop');
    timer.running = false;
  }


  let animationContainer
  onMount(()=>{
    lottie.loadAnimation({
      container: animationContainer,
      animationData: animationData
    })
    startTimer()
  })



</script>


<header>
	<a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main">
		Skip to main content
	</a>

	<a href="/" class="site-title">
		{siteTitle}
	</a>
  <div class="w-20" bind:this={animationContainer}></div>
	<HamburgerMenuButton />
	<MainNav />

</header>

<!-- Put this part before </body> tag -->
<!-- 🔵 conditional `modal-open` class if true -->
<div class="modal" class:modal-open={isModalOpen}>
  <div class="modal-box">
    <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
			<!-- 🔵 set false on click -->
      <button class="btn" on:click={()=>isModalOpen = false}>Yay!</button>
    </div>
  </div>
</div>
