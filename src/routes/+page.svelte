<script lang="ts">
	import { fly } from "svelte/transition";
    import Header from "./Header.svelte";

    let formState = $state({
        answers: {},
        step: 0,
        error: ""
    })

    // Pretty much a wacht in console. 
    $inspect(formState.step)
    
    const QUESTIONS = [
        {
            question: "What is you name?",
            id: "name",
            type: "text"
        },
        {
            question: "Whats your birthday?",
            id: "birthday",
            type: "date"
        },
        {
            question: "What's your favorite color?",
            id: "color",
            type: "color"
        }
    ];

    function nextStep(id: string) {
        if(formState.answers[id]) {
            formState.step += 1;
            formState.error = "";
        } else {
            formState.error = "Please fill out the form input.";
        }
    }

    // DONT create state based of other state in efect tho!
    // Will only run once. We don't care about rendering functions etc. we only care about values.
    $effect(() => {
        console.log("on mounted")
        // On unmount / when unmounted or destroyed aka component is removed or before a effect re-runs:
        return () => {
            console.log("on unmounted")
        }
    });

    // To see unmount in effect / if it reruns.:
    $effect( () => {
        // This will re-run, when formState.step has changed - THATS AMAZING so little code UwU
        console.log('formState', formState.step);
        return () => {
            //before effect Re-Runs
            console.log("before formState reruns.", formState.step)
        }
    })
</script>


<Header name={formState.answers.name}/>


<main>
    {#if formState.step >= QUESTIONS.length}
        <p> Thank you!</p>
    {:else}
        <p>Step: {formState.step +1}</p>
    {/if}

    <!-- {#each QUESTIONS as question (question.id)} -->
        <!-- {question.id} -->
        <!-- {@render formStep({
            question: "What's your name",
            id: "name",
            type: "text"
        })} -->
    <!-- {#each QUESTIONS as {id, question, type} (id)}
        {@render formStep({question, id, type})} -->

    <!-- Even shorter, destructure more robust i guess tho: -->
    {#each QUESTIONS as question, index (question.id)}
        {#if formState.step === index}
            <!-- {@render formStep(question)} -->
             <!-- With animation: -->
            <div 
              in:fly = {{ x: 200, duration: 2000, opacity:0, delay:1000 }}
              out:fly = {{ x: -200, duration: 1000, opacity:0 }}
            >
                {@render formStep(question)}
            </div>
        {/if}
    {/each}

    {#if formState.error}
    <p class="error">{formState.error}</p>
    {/if}

</main>

<!-- Nice to debug -->
{JSON.stringify(formState)}

{#snippet formStep({ question, id, type }: {
    question: string;
    id: string;
    type: string;
})}
    <article>
        <div>
            <label for={id}>{question}</label>
            <input {type} {id} bind:value={formState.answers[id]}/>
        </div>
        <button onclick={() => nextStep(id)}>Next</button>
    </article>
{/snippet}



<style>
    .error {
        color: red;
    }

</style>