<script lang="ts">
	import PageBlock from '$lib/components/PageBlock.svelte';

	export let data;
	const profileData = data.profileItem;
</script>

<PageBlock>
	<h1 class="h1 mb-8 text-primary-500">Profile</h1>
	<div class="flex flex-col items-center gap-10">
		<div class="text-center">
			<h3 class="h3 mb-2 text-tertiary-500">Username</h3>
			<h4 class="h4">{profileData.username}</h4>
		</div>
		<div class="text-center">
			<h3 class="h3 mb-2 text-tertiary-500">Account created</h3>
			<h4 class="h4">{new Date(profileData.created_at).toDateString()}</h4>
		</div>
		{#if profileData.updated_at}
			<div class="text-center">
				<h3 class="h3 mb-2 text-tertiary-500">Account last updated</h3>
				<h4 class="h4">{new Date(profileData.updated_at).toDateString()}</h4>
			</div>
		{/if}
	</div>
	<!-- <span class="divider-vertical my-auto h-48" />
	<div class="p-8 basis-1/3 flex flex-col">
		<h3 class="h3 mb-8 text-secondary-500">Edit account details</h3>
	</div> -->
</PageBlock>
