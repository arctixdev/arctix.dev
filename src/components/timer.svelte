<script>
	import { now } from 'svelte/internal';

	function timeTo(date) {
		return Math.abs(now() - date.getTime()) / 3.6e5;
	}
</script>
