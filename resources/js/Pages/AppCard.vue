<script setup>
import ServiceCard from './ServiceCard.vue';
 
 
</script>

<template>
<div class="bg-slate-50 dark:bg-black dark:text-white">
    <section class="min-h-screen flex items-center  justify-center  bg-gray-50 dark:bg-gray-900 ">

        

        <ServiceCard 

            hoverCard="hover:bg-red" 
            boxIcon="bg-red"
            colorIcon="text-red"
            nameIcon="desktop"
            statusColor="bg-success" 
            borderColorStatus="group-hover:border-red" 
            serviceTitle="Bureau d'Ordre" 
            roleService="Administrateur"

            src="http://[::1]:5173/../../../public/storage/assets/app1.png"/>


            

        <ServiceCard 
            hoverCard="hover:bg-[#523392]" 
            boxIcon="bg-[#523392]"
            colorIcon="text-[#523392]"
            nameIcon="shield"
            statusColor="bg-red" 
            borderColorStatus="group-hover:border-[#523392]" 
            serviceTitle="Police Administrative" 
            roleService="Gestionnaire des demandes"
            src="http://[::1]:5173/../../../public/storage/assets/app2.png"/>

        <ServiceCard 
            hoverCard="hover:bg-[#04ACB7]" 
            boxIcon="bg-[#01ACB7]"
            colorIcon="text-[#523392]"
            nameIcon="folder"
            statusColor="bg-[#00C371]" 
            borderColorStatus="group-hover:border-[#00C371]" 
            serviceTitle="La Patrimoine Communal" 
            roleService="Gestionnaire des dossiers"
            src="http://[::1]:5173/../../../public/storage/assets/app3.png"/>

       
        
        
        
    </section>
</div>

</template>



<style lang="css" scoped>

</style>