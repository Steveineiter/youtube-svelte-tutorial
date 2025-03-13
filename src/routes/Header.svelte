<script lang="ts">
    let {
        name
    } : {
        name: string
    } = $props();
</script>

<!-- <div class="header"> -->
 <div>
    <!-- {#if name}
        <h1>{name}'s Form'</h1>
    {/if} -->
    <h1>
        {name ? name : "User"}
    </h1>
</div>


<!-- <style>
    div {
        background: red;
    }
</style> -->
