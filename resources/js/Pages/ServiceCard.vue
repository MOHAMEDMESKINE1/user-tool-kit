<script setup>
defineProps({
    src:String,
    serviceTitle:String,
    roleService:String,
    statusColor:String,
    nameIcon:String,
    boxIcon:String,
    colorIcon:String,
    hoverCard:String,
    borderColorStatus:String,

})
</script>

<template>

     <div :class="[`${hoverCard}`,'cursor-pointer  duration-700 ease-out hover:duration-700 hover:text-white hover relative w-[388px]   group  h-[400px]  flex flex-col  border  rounded-lg bg-white dark:bg-gray-800 m-4']">
            <img class="absolute w-[288px] end-0 h-full " :src="src" :alt="serviceTitle" />

            <div class="px-5 pt-5">
                <div
                    :class="['w-[100px] relative  h-[100px]  bg-opacity-10  group-hover:bg-[#FFFFFF] group-hover:bg-opacity-30  flex items-center justify-center rounded-[15px]',`${boxIcon}`]">
                    <i :class="[' text-[52px] group-hover:text-white ',`${colorIcon} pi pi-${nameIcon}`]"></i>
                    <span
                        :class="['group-hover:duration-700 absolute -bottom-1 -left-2 group-hover:bottom-2 group-hover:-left-0.5  translate-y-1/4 w-[43px] h-[43px]  border-4 border-white  dark:border-gray-800 rounded-full',`${statusColor} ${borderColorStatus}`]">
                    </span>
                </div>
            </div>


            <div class="flex flex-1"></div>
            <div class="flex flex-1"></div>



            <div class=" w-full px-5">
                <h1 class="font-apptitle  text-[30px]  font-medium">{{serviceTitle}}</h1>
            </div>





            <div class="flex flex-1"></div>

            <div class="flex h-px  w-full bg-gray-200 dark:bg-gray-700"></div>

            <a href="#">
                <div class="flex flex-row items-center px-7">
                    <div class="h-[88px] flex flex-col justify-center">
                        <h1 class=" text-[19px] font-medium">Continuer comme</h1>
                        <h1 class=" text-[14px] font-normal">{{roleService}}</h1>
                    </div>
                    <div class="flex-1"></div>
                    <div>
                        <i class="fa-solid fa-arrow-right text-[35px]"></i>
                    </div>

                </div>
            </a>

        </div>

</template>

