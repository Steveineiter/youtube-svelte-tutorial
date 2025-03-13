<script lang="ts">
    import {createState, MyState} from "./state.svelte"

    let {
        name,
    } : {
        name: string
    } = $props();

    const myState = createState();
    const myStateTwo = new MyState();
</script>


 <div>
    <h1>
        {name ? name : "User"}
    </h1>
    <!-- <button onclick={myState.up}>{myState.value}</button> -->
    <!-- <button onclick={() =>  {
        myState.value = 10; // this won't work without a set function tho
    }}>{myState.value}</button> -->
    <button onclick={myState.up}>{myState.value}</button>
    <button onclick={() => myStateTwo.up()}>{myStateTwo.value}</button>
</div>


