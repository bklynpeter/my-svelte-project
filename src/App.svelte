<script>
	import FeedbackList from './components/FeedbackList.svelte';
	import FeedbackStats from './components/FeedbackStats.svelte';
	import FeedbackForm from './components/FeebackForm.svelte';
	let feedback = [
		{
			id: 1,
			rating: 10,
			text: 'Lorem ipsum dolor sit amet Lorem',
		},
		{
			id: 2 ,
			rating: 9,
			text: 'Lorem ipsum dolor sit amet Lorem',
		},
		{
			id: 3,
			rating: 7 ,
			text: 'Lorem ipsum dolor sit amet Lorem',
		},
	];

	$: count = feedback.length;

	$: average = (feedback.reduce((a, {rating}) => a + rating, 0)/count).toFixed(1);
	// $: shortAverage = average.toFixed(1)

	const deleteFeedback = (e) => {
		const itemId = e.detail;
		feedback = feedback.filter((item) => item.id !== itemId);
	}

	const addFeedback = (e) => {
		feedback = [e.detail,...feedback];
	}
	
</script>

<main class = 'container'>
	<FeedbackForm on:add-feedback = {addFeedback} />
	<FeedbackStats {count} {average} />
	<FeedbackList feedback = {feedback} on:delete-feedback = {deleteFeedback} />
</main>
