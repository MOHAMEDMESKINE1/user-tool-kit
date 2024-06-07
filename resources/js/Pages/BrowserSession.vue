<script setup>
    import {
        ListGroup,
        Title,
        Text,
        Badge,
        ListGroupItem,
        ButtonLink,
        BreadCrumb,
        BreadCrumbItem
    } from 'vue-component-cua'
    import AuthLayout from '@/Layouts/AuthLayout.vue';
</script>

<template>
    <AuthLayout>


        <div class=" flex flex-col ">
            <div class="flex justify-between ">
                <Title type="h5" class="mb-2 font-bold">
                    Utilisateurs
                </Title>
            </div>
            <!-- breadcrumbs -->
            <div class=" mb-4">
                <BreadCrumb>
                    <BreadCrumbItem title='Acceuil' icon='pi-home' href='/' />
                    <BreadCrumbItem title='Roles et Utilsateurs' href='/' />
                    <BreadCrumbItem title='Utilsateurs' href='/' :last="true" />
                </BreadCrumb>
            </div>
            <!-- Trusted Browser  -->
            <div class="grid  grid-cols-1 lg:grid-cols-2 ">


                <div>
                    <Title type="h6" class="mb-3 font-bold">Trusted Browser</Title>
                    <Text fontSize="sm" class="mb-3">Most Jetstream features can be customized via action classes.
                        However, for security, Jetstream's browser session services.</Text>
                </div>
                <div>
                    <div class="bg-white mt-5">
                        <ListGroup>

                            <ListGroupItem>
                                <div class='flex  justify-between'>

                                    <div class="flex">
                                        <i class="pi pi-desktop me-2 my-2 text-2xl "></i>
                                        <div class="flex-col px-2">

                                            <Text>Windows - chrome</Text>
                                            <Text>127.0.0.1 . <span class="text-success">This device</span> </Text>
                                        </div>

                                    </div>

                                    <ButtonLink color='error'>Logout</ButtonLink>

                                </div>
                            </ListGroupItem>

                            <ListGroupItem>
                                <div class='flex  justify-between'>

                                    <div class="flex">
                                        <i class="pi pi-desktop me-2 my-2 text-2xl "></i>
                                        <div class="flex-col px-2">

                                            <Text>Windows - chrome</Text>
                                            <Text>127.0.0.1 . <span class="text-success">This device</span> </Text>
                                        </div>

                                    </div>

                                    <ButtonLink color='error'>Logout</ButtonLink>
                                </div>
                            </ListGroupItem>

                            <ListGroupItem>
                                <div class='flex  justify-between'>

                                    <div class="flex">
                                        <i class="pi pi-desktop me-2 my-2 text-2xl "></i>
                                        <div class="flex-col px-2">

                                            <Text>Windows - chrome</Text>
                                            <Text>127.0.0.1 . <span class="text-success">This device</span> </Text>
                                        </div>

                                    </div>

                                    <ButtonLink color='error'>Logout</ButtonLink>
                                </div>
                            </ListGroupItem>

                        </ListGroup>
                    </div>
                </div>
            </div>
            <!-- sessions  -->
            <div class="grid grid-cols-1 lg:grid-cols-2 mt-12  ">

                <div class="">
                    <Title type="h6" class="mb-3 font-bold">Mes Sessions</Title>
                    <Text fontSize="sm" class="mb-3">Most Jetstream features can be customized via action classes.
                        However, for security, Jetstream's browser session services.</Text>
                </div>
                <div>
                    <div class="bg-white mt-5">
                        <ListGroup>

                            <ListGroupItem>
                                <div class='flex  justify-between'>

                                    <div class="flex">
                                        <i class="pi pi-desktop me-2 my-2 text-2xl "></i>
                                        <div class="flex-col px-2">

                                            <Text>Windows - chrome</Text>
                                            <Text>127.0.0.1 . <span class="text-success">This device</span> </Text>
                                        </div>

                                    </div>

                                    <ButtonLink color='error'>Logout</ButtonLink>
                                </div>
                            </ListGroupItem>

                            <ListGroupItem>
                                <div class='flex  justify-between'>

                                    <div class="flex">
                                        <i class="pi pi-desktop me-2 my-2 text-2xl "></i>
                                        <div class="flex-col px-2">

                                            <Text>Windows - chrome</Text>
                                            <Text>127.0.0.1 . <span class="text-success">This device</span> </Text>
                                        </div>

                                    </div>

                                    <ButtonLink color='error'>Logout</ButtonLink>
                                </div>
                            </ListGroupItem>

                            <ListGroupItem>
                                <div class='flex  justify-between'>

                                    <div class="flex">
                                        <i class="pi pi-desktop me-2 my-2 text-2xl "></i>
                                        <div class="flex-col px-2">

                                            <Text>Windows - chrome</Text>
                                            <Text>127.0.0.1 . <span class="text-success">This device</span> </Text>
                                        </div>

                                    </div>

                                    <ButtonLink color='error'>Logout</ButtonLink>
                                </div>
                            </ListGroupItem>

                        </ListGroup>
                    </div>
                </div>
            </div>
        </div>
    </AuthLayout>
</template>



<style lang="css" scoped>

</style>
