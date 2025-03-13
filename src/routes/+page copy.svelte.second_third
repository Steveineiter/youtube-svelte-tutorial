<script lang="ts">
    import Header from "./Header.svelte";

    let formState = $state({
        name: "",
        birthday: "",
        step: 0,
        error: ""
    })
</script>
<Header name={formState.name}/>


<main>
    <p>Step: {formState.step + 1}</p>

    {#if formState.step === 0}
        <div> 
            <label for="name">Your Name</label>
            <input type="text" id="name" bind:value={formState.name}>
        </div>
        <button onclick={() => {
            if(formState.name !== "") {
                formState.step += 1;
                formState.error = "";
            } else {
                formState.error = "Your name is empty. Please write your name.";
            }
            }}>Next
        </button>
    <!-- {:else} -->
    {:else if formState.step === 1}
        <div> 
            <label for="bday">Your Birthday</label>
            <input type="date" id="bday" bind:value={formState.birthday}>
        </div>
        <button onclick={() => {
            if(formState.birthday !== "") {
                formState.step += 1;
                formState.error = "";
            } else {
                formState.error = "Your birthday is empty. Please write your birthday.";
            }
            }}>Next
        </button>
    {/if}

    <!-- Move the if down, because else it would push stuff around and thats bad UX -->
    {#if formState.error}
    <p class="error">{formState.error}</p>
    {/if}

</main>

<!-- Snippets -->
{#snippet formStep({ question, id, type }: {
    type: string;
    id: string;
    question: string;
})}
    <article>
        <div>
            <label for={id}>{question}</label>
            <input {type} {id} bind:value={formState[id]}/>
        </div>
    </article>

{/snippet}



<!-- What if we want to give a class and its not scoped correctly for any reason? 
     aka having a global definition in here instead of a shared global css file. 
     
     THEN it leaks! -->
<style>
    /* If both are not commendet out, header would be blue and name div would be violet. */
    /*  AKA local overwrite global */
    /* :global(div) {
        background: blue;  
    }
    div {
        background: blueviolet;
    } */
    .error {
        color: red;
    }

</style>