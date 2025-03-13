<script lang="ts">

    import Header from "./Header.svelte";

    // let name = "Bernd"
    let name = $state("Stefan");


    let status: "OPEN" | "CLOSED" = $state("OPEN"); // OPEN | CLOSED is the type.
    // function toggle() {
    //     status = status === "OPEN" ? "CLOSED" : "OPEN";  // We update the value directly, there is no state.
    // } 
    function onclick() {
        status = status === "OPEN" ? "CLOSED" : "OPEN";  // We update the value directly, there is no state.
    }


    // Derived state (gets its value from other values eg array)
    let full_name = $derived(name + " " + "Fuckyeahoida")

</script>

<!-- <Header name="Stefan" /> -->
<!-- <Header name={name} /> Same as: -->
 <Header {name} />  <!-- Really cool uwu , bellow as well xD -->
 <input type="text" bind:value={name} />


 <p>The store is now {status}</p>
 <!-- <button onclick={toggle}>Toggle Status</button> -->
 <!-- <button {onclick}>Toggle Status</button> -->
 <button onclick={() => {
    status = status === "OPEN" ? "CLOSED" : "OPEN";
 }}>Toggle Status</button>


 <h2> {full_name} </h2>


 <Header {name} fake_name="FHA" />