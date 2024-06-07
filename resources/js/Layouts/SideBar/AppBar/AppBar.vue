<script setup></script>

<template>

    <aside id="logo-sidebar" class=" h-screen lg:h-full lg:flex" aria-label="Sidebar">


       
            <div class="w-20 lg:w-auto h-full overflow-y-auto  z-50 bg-sidebar border-0">
                <div class="h-full bg-white-300 px-5  overflow-y-auto ">
                    <div class="flex  flex-col items-center space-y-3 h-full font-medium ">


                        <a href="" class="flex-none content-center py-3 w-10 lg:w-16 pt-9">
                            <img src="../../../../../public/storage/assets/svg/logo_white.svg" alt="logo" />
                        </a>
                        <header>
                            <slot name="top"></slot>
                        </header>


                        <div class="flex-1 w-max"></div>


                        <div class="flex-none content-center py-11 lg:py-1">

                            <footer>
                                <slot name="bottom"></slot>
                            </footer>

                        </div>

                    </div>
                </div>
            </div>
     


    </aside>


</template>



<style lang="css">

</style>
